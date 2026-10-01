# VELOCITA RUN

A 3D endless runner set in **Halcyon Bay** — a rain-slicked coastal transit
city. You play **Vela**, a courier sprinting the elevated Arterial Line: the
freight and maintenance deck that rings the bay.

Original world, cast and naming. Nothing is derived from Subway Surfers.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production bundle into dist/
npm run preview    # serve the built bundle

npm run bake:buildings    # regenerate the building kit from source GLBs
npm run verify:buildings  # geometry + material checks (no browser needed)
```

Every texture is drawn procedurally to a canvas at boot, every sound is
synthesised with the Web Audio API, and the entire cast is built from
primitives. The one third-party asset is Kenney's *Modular Buildings* pack
(CC0 1.0), used for skyline towers and baked down to a single 78 KB JSON
payload — see [Notable decisions](#notable-decisions). The runtime fetches
nothing.

To rebuild the kit from scratch, download the pack and unzip its `Models/GLB
format` folder to `assets/kenney-modular-buildings/`, then run
`npm run bake:buildings`.

---

## Controls

| Action | Keyboard | Mouse | Touch |
| --- | --- | --- | --- |
| Change lane | `←` `→` / `A` `D` | move pointer left/right | swipe left/right |
| Jump | `↑` / `Space` / `W` | click centre | swipe up / tap |
| Slide | `↓` / `S` | — | swipe down |
| Pause | `Esc` / `P` | pause button | pause button |

**The track is strictly three lanes.** The player always sits on lane 0, 1 or
2 at a fixed centre — there is no free lateral position and no partial lane.

**Mouse steering is a switch, not an analogue axis.** Horizontal pointer
position selects *which* lane; it never controls *how far* the character
moves. The move itself is the same eased tween the keyboard uses, so the two
feel identical.

Two details make this safe alongside the keyboard:

- **Armed-on-move.** Steering stays disarmed until the pointer is genuinely
  moved, so a keyboard player who clicked *Play* on the right-hand side of the
  window isn't yanked sideways on frame one.
- **Keyboard wins.** Keys are consumed before steering is polled, and steering
  only acts on the frame a boundary is crossed.

Both are toggleable under **Settings → Mouse steering**, alongside a lane
invert option.

---

## Architecture

```
src/
├── main.js               entry point
├── Game.js               orchestrator — owns every subsystem and wiring
│
├── core/
│   ├── GameConfig.js     all tuning constants + world identity
│   ├── EventBus.js       typed pub/sub; systems never call each other
│   ├── StateMachine.js   loading/menu/countdown/playing/paused/…
│   ├── Loop.js           fixed 120 Hz simulation, interpolated render
│   ├── Input.js          keyboard + mouse + touch → discrete intents
│   ├── Pool.js           object pooling (Object3DPool, BudgetTracker)
│   ├── Storage.js        versioned localStorage + settings
│   ├── Materials.js      cached materials & geometries
│   ├── ProceduralTextures.js  canvas-drawn concrete, rust, facades…
│   └── PostFX.js         bloom + single-pass grade/aberration/vignette
│
├── world/
│   ├── World.js          owns the scene graph, scroll, sector rotation
│   ├── TrackRibbon.js    instanced deck tiles (≈4 draw calls per sector)
│   ├── LevelGenerator.js procedural obstacle/coin/powerup stream
│   ├── ObstacleFactory.js pooled obstacle meshes, merged by material
│   ├── PickupFactory.js  instanced coins + procedural power-up cells
│   ├── Scenery.js        parallax skyline + per-sector midground props
│   ├── BuildingKit.js    composes Kenney towers + street blocks at load
│   ├── Atmosphere.js     sky shader, PMREM env map, light rig, weather
│   └── GeoUtils.js       geometry merging (draw-call reduction)
│
├── player/
│   ├── Player.js         movement, collision, power-up state
│   ├── PlayerRig.js      procedural character + code-driven animation
│   └── CameraRig.js      chase camera, FOV kick, shake, dip springs
│
├── game/
│   ├── ScoreSystem.js    score, streak multiplier, records
│   ├── PowerUpManager.js effects, durations, upgrades
│   └── MissionSystem.js  rotating contracts
│
├── fx/
│   ├── ParticleSystem.js one instanced Points cloud for all sparks
│   └── Effects.js        tuned named effects (the "juice" layer)
│
├── audio/AudioManager.js synthesised SFX + adaptive music
└── ui/                   DOM screens, HUD, settings (UIManager + styles.css)
```

Subsystems never import each other's internals. `Game.js` wires them together
through `EventBus` and `StateMachine`, so adding a system means touching one
file.

---

## Notable decisions

**The world scrolls; the player doesn't.** The player stays at `z ≈ 0` and
everything else moves toward the camera. A 20 km run therefore has the same
float precision as the first metre, and recycling is trivial. Row spacing is
computed from *current speed* so reaction time stays fair as the game speeds up.

**Draw calls are budgeted.** The deck is three instanced meshes per sector.
Every obstacle bakes down to one mesh per material via `mergeByMaterial`
(a crate goes from ~9 calls to 3). All coins are two instanced draws
regardless of count. The particle layer is one draw call for every spark in the
game. The whole background — street, skyline, midground, deck — is roughly 30
calls.

**Two building layers, at different distances, for different jobs.** The kit is
only legible close up, so the city is split:

| Layer | Distance | Fog | Job |
| --- | --- | --- | --- |
| `StreetFront` | 8.6 m from the track | 1–5 % | The one you actually read: shopfronts, awnings, doors, sills |
| `Skyline` | 58–145 m | 70–93 % | Silhouette and depth behind the street |

Scaling is the thing that makes or breaks this. Kenney's cell is a
1 × 1 × 0.625 module — already roughly metre-scale — so the street multiplies it
by ~3.5–4.2 for a believable 2.2 m storey, and the skyline by only 1.6–3.2.
Applying a single large scale to both (an earlier attempt used 7.5–14.5 for
everything) produced 48–94 m towers 60 m out: not a skyline, but a wall that
fills the frame and reads as a flat black slab, because there is no detail at
that range to catch any light.

Placement is derived, not guessed: each block is pushed back by its own
measured depth so its *shopfront face* lands on the clearance line, and blocks
are turned a quarter turn to face the track. Getting that rotation wrong would
present a blank rear wall on every building, so `npm run verify:buildings`
asserts the front normal actually points at x = 0.

**The skyline is composed, not modelled.** Horizon towers come from Kenney's
*Modular Buildings* (CC0), assembled at load from ~59 of its 108 pieces.
The kit is modular — 1×1×0.625 cells that stack — so each tower is a stack of
independently chosen floors, and no two silhouettes repeat. The earlier skyline
had three fixed shapes instanced ~40 times, which read as wallpaper no matter
how well it was shaded. Floor counts are derived from each footprint to hold a
believable height-to-width ratio; rolling them independently produced 18:1
needles. The kit's *pitched* roofs are excluded entirely — their slopes sample
the dark part of the atlas and halved the facade luminance of any tower they
touched.

**Baked, not loaded.** `tools/bake-kenney.mjs` converts the GLB set into
`src/world/buildingKit.json` (78 KB, Int16 positions, Int8 normals). The source
material is a flat 16-swatch palette atlas with baked light/dark gradients and
no texture detail, so the bake samples it once into a vertex colour attribute
and the texture disappears from the runtime entirely. That also sidesteps the
atlas's glTF UV convention (`v=0` at top), which a default `flipY = true` would
flip into the empty black half of the image.

**Glass is separated from structure.** The bake classifies each face and emits
two index buffers, so window panes render with an emissive material while walls
stay matte. This is what makes towers look inhabited at night. The threshold
(`b - r ≥ 38`) came from measuring every face in the pack: walls sit warm at
`-130..-57`, glazing is blue at `46..98`, and the gap between is empty. A
"bright and slightly cool" rule also catches rooftop AC housings and would light
up every plant room.

**Procedural everything else.** Textures are canvas-generated (concrete
speckle, expansion joints, rust blooms, lit window grids). Audio is
oscillators, filters and noise buffers — the coin pitch rises with your
collection streak, and the music's arpeggio only enters once you're moving
fast.

**Anisotropy, not resolution.** Pixel ratio is capped per quality preset and
textures use anisotropic filtering, so surfaces stay sharp at grazing angles
(the deck, seen almost edge-on) without paying for 4× texture memory.

**Fairness is enforced, not hoped for.** The generator guarantees no row ever
seals all three lanes with something unactable. Low barriers and gantries may
span the full width precisely because jumping or sliding clears them.

**Feel.** Lane changes are rate-limited tweens that bank into the turn.
Input is buffered (160 ms), with coyote time on jumps and air-slide. The
hitbox is 86% of the visual width. Near-misses pay out. That's the difference
between a prototype and something that feels fair.

---

## Quality

`auto` detects a starting preset from CPU cores and device memory, then
steps down to `low` if the average frame rate stays below ~42 fps. Presets
control shadows, shadow map size, pixel ratio cap, fog distance, particle
budget, prop density and anisotropy.

`buildingLayers` drives how many *distinct* towers are composed for the
skyline (3 per layer). Variety scales with it, and so does cost: each distinct
tower costs one merged geometry plus two instanced draws.

`prefers-reduced-motion` is respected for UI animation.

---

## Credits

- **Kenney — [Modular Buildings](https://kenney.nl/assets/modular-buildings)**.
  CC0 1.0 Universal (public domain), so no attribution is legally required;
  credited here because it's good manners. Used for skyline towers.
- Everything else — geometry, textures, audio, characters — is generated by the
  code in this repository.