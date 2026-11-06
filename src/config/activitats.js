/**
 * Configuració de visibilitat de les activitats.
 *
 * Canvia el valor de l'activitat que vulguis obrir:
 *   false → oculta (els alumnes veuen "activitat no disponible")
 *   true  → visible (els alumnes veuen l'enunciat i el .docx)
 *
 * Després: git add + commit + push. GitHub Actions desplegarà automàticament.
 */
const activitats = {
  1: false,   // S01 — Presentació i primer contacte
  2: false,   // S02 — Tokens, models i context
  3: false,   // S03 — APIs, privacitat i dades
  4: false,   // S04 — Prompting i system prompts
  5: false,   // S05 — Format de documents
  6: false,   // S06 — IA integrada al processador
  7: false,   // S07 — Iteració, rols i context
  8: false,   // S08 — Documents llargs i índex
  9: false,   // S09 — Plantilles, correspondència i macros
  10: false,  // S10 — Correu: configuració i gestió
  11: false,  // S11 — Redacció de correus i agents
  12: false,  // S12 — Introducció a NotebookLM
  13: false,  // S13 — Verificació i combinació de fonts (inclou l'antiga S14)
  14: false,  // S14 — Formats d'imatge i edició
  15: false,  // S15 — Generació d'imatges amb IA
  16: false,  // S16 — Cas pràctic: fonts i imatge
  17: false,  // S17 — Estructura i disseny de presentacions
  18: false,  // S18 — Presentacions assistides per IA
  19: false,  // S19 — Notes de ponent i exposició
  20: false,  // S20 — Vídeo digital i música IA
  21: false,  // S21 — Exposicions grup 1
  22: false,  // S22 — Exposicions grup 2
  28: false,  // S28 — Skills
  29: false,  // S29 — Agent amb API
};

export default activitats;
