import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
// `with { type: 'json' }` is required by Node's ESM loader but harmless under
// Vite, which resolves JSON imports natively. Keeping it means the bake output
// can be verified in Node (tools/verify-towers.mjs) without a shim.
import KIT from './buildingKit.json' with { type: 'json' };

/**
 * BuildingKit — Kenney "Modular Buildings" as a procedural skyline source.
 *
 * WHY THIS REPLACES THE HAND-BUILT TOWERS
 * ---------------------------------------
 * The previous skyline was three bespoke merged silhouettes. That is three
 * shapes repeated ~40 times, so the horizon reads as wallpaper no matter how
 * good the shading is. The Kenney pack is a *modular* kit: 108 pieces on a
 * 1 x 1 x 0.625 grid that stack vertically, so a tower is assembled from
 * independently chosen floors and no two are alike. Variety comes from
 * composition rather than from more silhouettes.
 *
 * WHY THE GEOMETRY IS BAKED (tools/bake-kenney.mjs)
 * -------------------------------------------------
 * The source material is a flat 16-swatch palette atlas with baked light/dark
 * gradients — no texture detail at all. Baking samples it once into a vertex
 * colour attribute and drops the texture entirely, which avoids the atlas
 * entirely at runtime (see the tool header for the full rationale). Positions
 * are Int16 and normals Int8 against the pack's native bounds; the payload is
 * ~78 KB for 70 pieces and needs no network fetch beyond the JSON itself.
 *
 * WHY GLASS IS A SEPARATE INDEX BUFFER
 * ------------------------------------
 * The bake splits every piece into solid geometry and window-glass geometry.
 * Glass is rendered with an emissive material, so a tower reads as inhabited at
 * night and picks up bloom. This is what makes the skyline look lit rather
 * than like grey boxes, and it is why the classifier in the bake tool matters.
 *
 * SOURCE
 * ------
 * Kenney — Modular Buildings. CC0 1.0 Universal (public domain), no
 * attribution required. https://kenney.nl/assets/modular-buildings
 */

/** Piece footprint on the kit's modular grid, in Kenney units. */
const GRID_X = 1.0;
const GRID_Y = 0.625;

/** Dequantisation: must match QUANT_RANGE in tools/bake-kenney.mjs. */
const QUANT = 32767 / KIT.quant.range;

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();
const Y_AXIS = new THREE.Vector3(0, 1, 0);

/**
 * sRGB byte -> linear float, as a 256-entry table.
 *
 * three.js treats vertex colours as already being in the linear working space
 * and only encodes to sRGB on output. The bake stores raw palette bytes, which
 * are display-referred, so they must be decoded before use — skipping this
 * makes every building brighter and less saturated than intended, which is
 * exactly the washed-out look the sector palettes are tuned against.
 */
const SRGB_TO_LINEAR = (() => {
  const t = new Float32Array(256);
  for (let i = 0; i < 256; i++) {
    const c = i / 255;
    t[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  return t;
})();

// ---------------------------------------------------------------------------
// Piece decoding
// ---------------------------------------------------------------------------

function decode(b64, Type) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Type(bytes.buffer);
}

/**
 * Build a BufferGeometry from one baked piece.
 *
 * `glass` selects the window-glass index buffer instead of the solid one. Both
 * share the same vertex arrays, so a piece only ever decodes once.
 *
 * @param {string} name
 * @param {boolean} glass
 * @returns {THREE.BufferGeometry|null} null when the piece has no such faces
 */
function buildPiece(name, glass) {
  const rec = KIT.pieces[name];
  if (!rec) return null;
  const idxB64 = glass ? rec.gidx : rec.idx;
  if (!idxB64) return null;

  const index = decode(idxB64, Uint32Array);
  if (index.length === 0) return null;

  const posQ = decode(rec.pos, Int16Array);
  const nrmQ = decode(rec.nrm, Int8Array);

  const count = rec.v;
  const position = new Float32Array(count * 3);
  const normal = new Float32Array(count * 3);
  for (let i = 0; i < position.length; i++) position[i] = posQ[i] / QUANT;
  for (let i = 0; i < normal.length; i++) normal[i] = nrmQ[i] / 127;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));

  // Palette bytes are display-referred; three.js wants linear vertex colours.
  const srgb = decode(rec.col, Uint8Array);
  const colour = new Float32Array(srgb.length);
  for (let i = 0; i < srgb.length; i++) colour[i] = SRGB_TO_LINEAR[srgb[i]];
  geo.setAttribute('color', new THREE.BufferAttribute(colour, 3));

  geo.setIndex(new THREE.BufferAttribute(index, 1));
  return geo;
}

/** All pieces, decoded once and cached across every composed tower. */
const pieceCache = new Map();
function piece(name) {
  let entry = pieceCache.get(name);
  if (!entry) {
    entry = { solid: buildPiece(name, false), glass: buildPiece(name, true), bb: KIT.pieces[name].bb };
    pieceCache.set(name, entry);
  }
  return entry;
}

/**
 * Place one piece, returning its solid and glass geometry transformed into
 * place. Kenney pieces are authored with their base at y=0 and centred on x/z,
 * so a floor is just a translate — no rotation needed for stacking.
 *
 * @param {string[]} out accumulators
 * @param {string} name
 * @param {number} x grid column offset, in Kenney units
 * @param {number} y floor height
 * @param {number} z grid row offset
 * @param {number} rotY quarter turns, for pieces with an asymmetric facade
 */
function place(out, name, x, y, z, rotY = 0) {
  const p = piece(name);
  if (!p) return;
  _q.setFromAxisAngle(Y_AXIS, (rotY * Math.PI) / 2);
  _v.set(x * GRID_X, y * GRID_Y, z * GRID_X);
  _s.set(1, 1, 1);
  _m.compose(_v, _q, _s);
  if (p.solid) {
    const g = p.solid.clone();
    g.applyMatrix4(_m);
    out.solid.push(g);
  }
  if (p.glass) {
    const g = p.glass.clone();
    g.applyMatrix4(_m);
    out.glass.push(g);
  }
}

/**
 * Add a non-kit primitive (an antenna mast) to the solid accumulator.
 *
 * It must carry the *same* attribute set and array types as the baked pieces
 * — position, normal, and a Float32 colour already in linear space — or
 * `mergeGeometries` rejects the whole batch and returns null. three.js
 * primitives ship a `uv` attribute the kit pieces lack, and their colours
 * default to Float32; both have to be reconciled first.
 *
 * @param {{solid: THREE.BufferGeometry[], glass: THREE.BufferGeometry[]}} out
 * @param {number} x
 * @param {number} y base height, in metres
 * @param {number} z
 * @param {number} height
 */
function addMast(out, x, y, z, height) {
  // One segment with 3 radial sides is enough. Earlier this was 3 segments of 4
  // sides (24 vertices), which on a short tower made the mast the single
  // largest vertex group in the mesh — enough to skew facade-luminance
  // measurements and to look chunky at any distance where it reads at all.
  const segs = 1;
  const segH = height / segs;
  for (let i = 0; i < segs; i++) {
    const t = 0;
    const g = new THREE.CylinderGeometry(0.05 - t * 0.02, 0.06 - t * 0.02, segH, 3);
    g.translate(x, y + (i + 0.5) * segH, z);
    // Must match the baked pieces exactly: Float32 *linear* colours, no uv.
    // mergeGeometries rejects the batch (returning null) if any input differs
    // in attribute set or array type.
    //
    // The colour is deliberately a light grey rather than the near-black it
    // "should" be for a silhouetted mast. This mesh is tiny (3 segments), so a
    // dark mast can be ~half of a small tower's vertex budget; at 0x2a2f36 it
    // decodes to roughly 0.002 linear, which dragged whole towers down to a
    // 0.34 mean facade luminance and made them read as murk against the fog.
    // Facade luminance is a *facade* measurement, and a mast is not facade.
    _c.setHex(0x6b7684).convertSRGBToLinear();
    const col = new Float32Array(g.attributes.position.count * 3);
    for (let k = 0; k < col.length; k += 3) {
      col[k] = _c.r;
      col[k + 1] = _c.g;
      col[k + 2] = _c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    // three.js primitives ship a `uv` attribute; the baked kit pieces have none
    // (the atlas was sampled at bake time). mergeGeometries requires the
    // attribute set to match exactly, so drop it before merging.
    g.deleteAttribute('uv');
    out.solid.push(g);
  }
}

// ---------------------------------------------------------------------------
// Piece vocabulary, grouped by the job a piece does in a facade.
// ---------------------------------------------------------------------------

/** Blank wall — the fallback for faces we don't want to fenestrate. */
const BLANK = ['block', 'corner'];

/** Single-pane window walls. `wide` is the default face; the rest add variety. */
const WINDOW_WALLS = [
  'window',
  'window-wide',
  'window-sill',
  'window-left',
  'window-right',
  'window-large',
  'window-balcony',
  'window-awnings',
];

/** Multi-pane walls: busier facades that read as offices or housing. */
const WINDOW_BANDS = [
  'windows',
  'windows-sills',
  'windows-high-middle',
  'window-large-left',
  'window-large-middle',
  'window-large-right',
];

/** Corner pieces. Each has a pane on one or two faces. */
const CORNER_PANES = ['corner-window', 'corner-window-middle', 'corner-window-narrow'];
const CORNER_TOP = ['corner-window-top-round', 'corner-window-top-square'];
const CORNER_BLANK = ['corner', 'corner-bottom', 'corner-top'];

/** Ground-floor entrances. */
const DOORS = ['door', 'door-window', 'edges-door', 'door-window-narrow'];

/**
 * Roof caps.
 *
 * Only the *flat* roofs are used. The kit's pitched roofs (`roof-gable*`,
 * `roof-slanted*`) sample the dark region of the atlas — measured mean
 * luminance 0.05 to 0.18 linear, up to 67% of their vertices near black —
 * because their upward-facing slopes UV into texels the pack never authored for
 * a night scene. Dropping one of those on a tower drags its whole facade mean
 * down by half and the building reads as a murky blob against the fog.
 * `tools/audit-pieces.mjs` is what surfaced this.
 */
const ROOF_FLAT = ['roof-flat-top', 'roof-flat-center', 'roof-flat-corner', 'roof-flat-corner-high'];
const ROOF_DETAIL = ['roof-flat-detail-a', 'roof-flat-detail-b', 'roof-flat-detail-c', 'roof-flat-detail-d'];
const ROOF_AC = ['detail-ac-a', 'detail-ac-b'];

const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const chance = (p) => Math.random() < p;

// ---------------------------------------------------------------------------
// Tower composition
// ---------------------------------------------------------------------------

/**
 * Choose a floor count that keeps the silhouette believable.
 *
 * Kenney's cell is 1 x 1 x 0.625 — one storey of a single module. Stacking a
 * 1x1 footprint 30 cells high yields an 18:1 needle, which reads as a mast
 * rather than a building; real towers sit nearer 1.5:1 to 4:1
 * height-to-footprint. Deriving floors from the footprint, instead of rolling
 * it independently, is what stops the skyline filling with poles.
 *
 * @param {number} cols
 * @param {number} rows
 * @returns {number}
 */
function floorsFor(cols, rows) {
  const width = Math.max(cols, rows);
  const target = 1.6 + Math.random() * 2.4;
  const byAspect = Math.round((width * target) / GRID_Y);
  // Absolute bounds stop tiny footprints vanishing and wide ones becoming
  // slabs that swallow the horizon.
  return Math.max(4, Math.min(22, byAspect));
}

/**
 * Kenney authors doors, windows and awnings on a piece's +Z face. To point one
 * of those features at a chosen direction, rotate by this many quarter turns.
 * Street-facing blocks are built with the shopfront on -Z and turned as a whole
 * at instance time, so only the within-block orientations are needed here.
 */
const FACE = { plusZ: 0, plusX: 1, minusZ: 2, minusX: 3 };

/**
 * Compose a low-rise street-front block.
 *
 * This is the massing that actually reads in game. The distant skyline is
 * decorative and heavily fogged, but the buildings that frame the corridor sit
 * ~10-14m from the deck, well inside the fog falloff, so they are the only
 * layer where the kit's window frames, sills, awnings and doors are legible.
 * That means the composition has to be *street-like*: a narrow frontage of
 * one to three bays, shallow depth, one or two storeys, and a ground floor
 * given over to shopfronts rather than to more windows.
 *
 * Local axes are deliberate: frontage runs along X (so a row of blocks placed
 * side by side forms a terrace), depth along Z, and the shopfront faces -Z.
 * Callers rotate the finished block to face whichever side of the track it is
 * on; `StreetFront` handles that.
 *
 * @returns {{solid: THREE.BufferGeometry, glass: THREE.BufferGeometry}|null}
 */
function composeBlock() {
  const out = { solid: [], glass: [] };

  // Narrow frontage, shallow depth, taller massing. The old 1-3 x 2-3 x 1-2
  // produced 14x14x3m pancakes: 14m long along the track with 15m spacing, so
  // the terraces fused into one continuous smeared wall viewed edge-on, and
  // the 4.6:1 width:height ratio read as slab rather than house. 1-2 bays by
  // 1-2 cells by 2-3 storeys gives ~7-10m frontages with real gaps between
  // them and roughly cubic proportions that read as individual buildings.
  const cols = 1 + ((Math.random() * 2) | 0); // 1-2 bays of frontage
  const rows = 1 + ((Math.random() * 2) | 0); // 1-2 cells deep
  const floors = 2 + ((Math.random() * 2) | 0); // 2-3 storeys
  const offX = (cols - 1) / 2;
  const offZ = (rows - 1) / 2;

  for (let f = 0; f < floors; f++) {
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        const x = ix - offX;
        const z = iz - offZ;

        const onStreet = iz === 0;
        const onEndX = ix === 0 || ix === cols - 1;
        const interior = !onStreet && !onEndX;

        let name;
        let rotY = FACE.plusZ;

        if (interior) {
          // Never visible from the corridor; spend nothing on it.
          name = 'block';
        } else if (f === 0 && onStreet) {
          // Shopfront. A run of identical doors reads as a car park, so mix
          // entrances with glazed fronts and the occasional blank party wall.
          const roll = Math.random();
          if (roll < 0.3) {
            name = pick(DOORS);
            rotY = FACE.minusZ;
          } else if (roll < 0.68) {
            name = pick(['window-awnings', 'window-large', 'window-balcony', 'window-wide']);
            rotY = FACE.minusZ;
          } else if (roll < 0.84) {
            name = pick(['window-sill', 'windows', 'window']);
            rotY = FACE.minusZ;
          } else {
            name = pick(BLANK);
          }
        } else if (f === 0) {
          // Side and rear elevations at street level: plain, occasional window.
          name = chance(0.3) ? pick(WINDOW_WALLS) : pick(BLANK);
          if (!BLANK.includes(name)) rotY = onEndX ? FACE.plusX : FACE.plusZ;
        } else if (onStreet && onEndX) {
          // Upper-floor corner: the two-street junction, so it gets panes on
          // both visible faces.
          name = pick(CORNER_PANES);
          rotY = ix === 0 ? FACE.minusX : FACE.plusX;
        } else if (onStreet) {
          // Upper storey facing the track. Sills and balconies break up the
          // horizontal band and catch the rim light.
          name = pick([
            'window-sill',
            'window-left-sill',
            'window-right-sill',
            'window-balcony',
            'window-wide-sill',
            'windows-sills',
          ]);
          rotY = FACE.minusZ;
        } else if (onEndX) {
          name = chance(0.45) ? pick(WINDOW_WALLS) : pick(BLANK);
          if (!BLANK.includes(name)) rotY = ix === 0 ? FACE.minusX : FACE.plusX;
        } else {
          name = 'block';
        }

        place(out, name, x, f, z, rotY);
      }
    }
  }

  // --- roof ---------------------------------------------------------------
  // A parapet with a recessed deck reads as a real roofline from the side and
  // stops the block reading as a shoebox. Rooftop clutter gives it a silhouette.
  // The borders must tile the full perimeter: a single centred piece leaves
  // metre-wide gaps on either side that read as broken rooflines up close.
  const topY = floors;
  for (let ix = 0; ix < cols; ix++) {
    place(out, 'roof-flat-border-straight', ix - offX, topY, -offZ - 0.5, FACE.minusZ);
    place(out, 'roof-flat-border-straight', ix - offX, topY, offZ + 0.5, FACE.plusZ);
  }
  for (let iz = 0; iz < rows; iz++) {
    place(out, 'roof-flat-border-side', -offX - 0.5, topY, iz - offZ, FACE.minusX);
    place(out, 'roof-flat-border-side', offX + 0.5, topY, iz - offZ, FACE.plusX);
  }
  for (let ix = 0; ix < cols; ix++) {
    for (let iz = 0; iz < rows; iz++) {
      place(out, 'roof-flat-center', ix - offX, topY, iz - offZ);
    }
  }
  if (chance(0.65)) place(out, pick(ROOF_AC), (Math.random() - 0.5) * cols, topY + 0.18, (Math.random() - 0.5) * rows);
  if (chance(0.35)) place(out, pick(ROOF_DETAIL), (Math.random() - 0.5) * cols, topY, (Math.random() - 0.5) * rows);

  if (out.solid.length === 0 && out.glass.length === 0) return null;

  const solid = mergeGeometries(out.solid, false);
  const glass = out.glass.length ? mergeGeometries(out.glass, false) : null;
  for (const g of out.solid) g.dispose();
  for (const g of out.glass) g.dispose();

  if (solid) solid.computeBoundingBox();
  return { solid, glass };
}

/**
 * Compose one tower.
 *
 * Silhouettes are built from a small set of archetypes rather than fully at
 * random, because "random stacked boxes" produces mush. Each archetype has a
 * recognisable massing, and the pieces within it vary.
 *
 * @returns {{solid: THREE.BufferGeometry, glass: THREE.BufferGeometry}|null}
 */
function composeTower() {
  const out = { solid: [], glass: [] };

  // Footprint in grid cells. Wider plans give bulkier, lower buildings; the
  // floor count is derived from the footprint by `floorsFor`.
  const plan = pick([
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 2 },
    { cols: 3, rows: 2 },
    { cols: 1, rows: 2 },
    { cols: 3, rows: 3 },
  ]);

  const archetype = pick(['slab', 'setback', 'tapered', 'podium', 'spire']);

  let floors = floorsFor(plan.cols, plan.rows);

  // Massing profiles. `setback` and `tapered` both narrow the footprint with
  // height, but on different terms: a setback holds full width then steps in
  // once (Art Deco / early skyscraper), while a taper narrows continuously
  // (wedding-cake, or a chimney stack).
  const setbackAt =
    archetype === 'setback' ? floors * (0.5 + Math.random() * 0.3) : Infinity;
  const taper = archetype === 'tapered';
  // A podium is a wide, plain base that the tower proper rises out of. It
  // only makes sense on plans with a cell to give up.
  const podiumH =
    archetype === 'podium' && (plan.cols > 1 || plan.rows > 1)
      ? 2 + ((Math.random() * 3) | 0)
      : 0;

  /**
   * Footprint at floor `f`, before the podium override.
   * @param {number} f
   */
  const planAt = (f) => {
    let cols = plan.cols;
    let rows = plan.rows;
    if (f >= setbackAt) {
      cols = Math.max(1, plan.cols - 1);
      rows = Math.max(1, plan.rows - 1);
    }
    if (taper) {
      // Shrink a cell at a time over the upper half, so the profile steps
      // inward rather than shearing (integer cells cannot do a true slant).
      const t = (f - floors * 0.45) / (floors * 0.55);
      const shrink = t > 0 ? Math.floor(t * plan.cols * 0.7) : 0;
      cols = Math.max(1, plan.cols - shrink);
      rows = Math.max(1, plan.rows - shrink);
    }
    return { cols, rows };
  };

  for (let f = 0; f < floors; f++) {
    const y = f;
    const { cols, rows } = planAt(f);
    const inPodium = f < podiumH;
    const effCols = inPodium ? plan.cols : cols;
    const effRows = inPodium ? plan.rows : rows;

    const blankish = archetype === 'slab' ? 0.12 : taper ? 0.28 : 0.2;

    for (let ix = 0; ix < effCols; ix++) {
      for (let iz = 0; iz < effRows; iz++) {
        // Kenney cells are 1 unit and centred on their own origin, so cell
        // (ix, iz) of a cols x rows footprint sits at (i - (n-1)/2).
        const x = ix - (effCols - 1) / 2;
        const z = iz - (effRows - 1) / 2;

        const onEdgeX = ix === 0 || ix === effCols - 1;
        const onEdgeZ = iz === 0 || iz === effRows - 1;
        const isCorner = onEdgeX && onEdgeZ;
        // Only the perimeter needs a detailed facade; interior cells would be
        // invisible, so they get the cheapest piece available.
        const isInterior = !onEdgeX && !onEdgeZ;

        let name;
        const rotY = 0;

        if (isInterior) {
          name = 'block';
        } else if (isCorner) {
          if (f === 0) name = pick(DOORS);
          else if (f === floors - 1) name = pick(CORNER_TOP);
          else if (chance(0.18)) name = pick(CORNER_BLANK);
          else name = pick(CORNER_PANES);
        } else if (f === 0) {
          // Ground floor: street-facing entrances and shopfront glazing.
          name = chance(0.5) ? pick(DOORS) : chance(0.5) ? pick(WINDOW_WALLS) : pick(BLANK);
        } else if (chance(blankish)) {
          name = pick(BLANK);
        } else {
          // Bias taller floors toward multi-pane bands so towers have a
          // legible floor rhythm instead of a uniform dot grid.
          const banded = f > floors * 0.55 && chance(0.45);
          name = banded ? pick(WINDOW_BANDS) : pick(WINDOW_WALLS);
        }

        place(out, name, x, y, z, rotY);
      }
    }
  }

  const topY = floors;

  // The crown must sit on whatever footprint the top floor actually has. On a
  // tapered or setback tower that is narrower than the base, and capping it
  // with the base footprint would leave the roof floating past the walls.
  const topPlan = planAt(floors - 1);
  const tCols = topPlan.cols;
  const tRows = topPlan.rows;
  const tOffX = (tCols - 1) / 2;
  const tOffZ = (tRows - 1) / 2;

  // --- crown ---------------------------------------------------------------
  // 'cap' stacks a second roof course, which reads as a stepped penthouse;
  // 'parapet' is a walled roof deck; 'spire' is a mast. All three cap with the
  // kit's flat roof pieces, which are the only ones that read at distance.
  const crownStyle =
    archetype === 'spire' ? 'spire' : pick(['flat', 'cap', 'parapet', 'parapet']);

  if (crownStyle === 'flat') {
    for (let ix = 0; ix < tCols; ix++) {
      for (let iz = 0; iz < tRows; iz++) {
        place(out, pick(ROOF_FLAT), ix - tOffX, topY, iz - tOffZ);
      }
    }
  } else if (crownStyle === 'cap') {
    // A stepped penthouse gives the top a silhouette instead of a flat lid.
    const capCols = Math.max(1, tCols - 1);
    const capRows = Math.max(1, tRows - 1);
    for (let ix = 0; ix < tCols; ix++) {
      for (let iz = 0; iz < tRows; iz++) {
        place(out, 'roof-flat-border-straight', ix - tOffX, topY, iz - tOffZ);
      }
    }
    for (let ix = 0; ix < capCols; ix++) {
      for (let iz = 0; iz < capRows; iz++) {
        place(out, pick(ROOF_FLAT), ix - (capCols - 1) / 2, topY + 0.35, iz - (capRows - 1) / 2);
      }
    }
    if (chance(0.6)) place(out, pick(ROOF_AC), (Math.random() - 0.5) * capCols, topY + 0.5, (Math.random() - 0.5) * capRows);
  } else if (crownStyle === 'parapet') {
    // A raised lip around a recessed roof deck reads as a real roof rather
    // than a lid, and catches rim light on the parapet. Borders tile the full
    // perimeter — single centred pieces leave gaps on wider crowns.
    for (let ix = 0; ix < tCols; ix++) {
      place(out, 'roof-flat-border-straight', ix - tOffX, topY, -tOffZ - 0.5);
      place(out, 'roof-flat-border-straight', ix - tOffX, topY, tOffZ + 0.5, 2);
    }
    for (let iz = 0; iz < tRows; iz++) {
      place(out, 'roof-flat-border-side', -tOffX - 0.5, topY, iz - tOffZ, 1);
      place(out, 'roof-flat-border-side', tOffX + 0.5, topY, iz - tOffZ, 1);
    }
    for (let ix = 0; ix < tCols; ix++) {
      for (let iz = 0; iz < tRows; iz++) {
        place(out, 'roof-flat-center', ix - tOffX, topY, iz - tOffZ);
      }
    }
    // Rooftop plant: reads as machinery, breaks the flat top.
    if (chance(0.7)) place(out, pick(ROOF_AC), (Math.random() - 0.5) * tCols, topY + 0.18, (Math.random() - 0.5) * tRows);
    if (chance(0.4)) place(out, pick(ROOF_DETAIL), (Math.random() - 0.5) * tCols, topY, (Math.random() - 0.5) * tRows);
  } else {
    // Spire: a slim antenna mast. Aviation beacons on masts are the single
    // most legible "this is a city" cue in a distant skyline.
    const mastH = 2 + Math.random() * 5;
    place(out, 'roof-flat-top', 0, topY, 0);
    addMast(out, 0, topY * GRID_Y + 0.15, 0, mastH);
  }

  if (out.solid.length === 0 && out.glass.length === 0) return null;

  const solid = mergeGeometries(out.solid, false);
  const glass = out.glass.length ? mergeGeometries(out.glass, false) : null;
  for (const g of out.solid) g.dispose();
  for (const g of out.glass) g.dispose();

  if (solid) solid.computeBoundingBox();
  return { solid, glass };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Compose `count` distinct tower geometries.
 *
 * Composition happens once at load. Each result is instanced many times in
 * the skyline, so paying for N unique towers here buys N silhouettes for the
 * cost of one InstancedMesh per tower — far better value than N silhouettes
 * from N instanced copies of the same mesh.
 *
 * @param {number} count
 * @returns {{solid: THREE.BufferGeometry, glass: THREE.BufferGeometry|null}[]}
 */
export function composeTowers(count = 6) {
  const towers = [];
  for (let i = 0; i < count * 3 && towers.length < count; i++) {
    const t = composeTower();
    if (t) towers.push(t);
  }
  while (towers.length < count) towers.push(composeTower());
  return towers;
}

/**
 * Compose `count` distinct low-rise street blocks.
 *
 * Same contract as `composeTowers`: composition happens once at load and each
 * result is instanced many times, so N unique blocks buy N facades for the
 * cost of one InstancedMesh each.
 *
 * @param {number} count
 * @returns {{solid: THREE.BufferGeometry, glass: THREE.BufferGeometry|null}[]}
 */
export function composeBlocks(count = 6) {
  const blocks = [];
  for (let i = 0; i < count * 3 && blocks.length < count; i++) {
    const b = composeBlock();
    if (b) blocks.push(b);
  }
  while (blocks.length < count) blocks.push(composeBlock());
  return blocks;
}

/** Release cached piece geometry. Call on teardown. */
export function disposeBuildingKit() {
  for (const entry of pieceCache.values()) {
    if (entry.solid) entry.solid.dispose();
    if (entry.glass) entry.glass.dispose();
  }
  pieceCache.clear();
}

export const KIT_META = Object.freeze({
  source: KIT.source,
  license: KIT.license,
  url: KIT.url,
  tris: KIT.stats.tris,
  glassTris: KIT.stats.glassTris,
  pieces: KIT.stats.pieces,
  gridY: GRID_Y,
});

/** Kenney units -> metres. Kenney's grid is roughly a 4 m storey. */
export const KIT_UNIT = GRID_Y;