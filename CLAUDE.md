# CLAUDE.md — OfimaticaIA

Carpeta de treball del mòdul **M0223 Aplicacions ofimàtiques** (1r SMX, Institut Sabadell), impartit com a *Ofimàtica i Intel·ligència Artificial*. 31 sessions de 3 h, 4 blocs d'avaluació, empresa fictícia Vallcorba Informàtica SL com a fil conductor.

## Idioma

Tot el projecte és en **català**. Qualsevol fitxer generat ha de ser en català.

## Regla fonamental

> **Res que sigui exclusiu de professorat no pot arribar mai al repositori Git.**

Solucionaris, enunciats d'examen, claus de correcció, rúbriques internes, dades d'alumnat i documents de seguiment **mai** van dins d'`apunts-git/`. El `.gitignore` ja té una xarxa de seguretat, però la separació principal és física: el repo és **només** `apunts-git/`.

## Estructura de carpetes

```
OfimaticaIA/
├── apunts-git/              ← REPO GIT (públic, alumnat)
│   ├── docs/
│   │   ├── ba1-fonaments-ia/         (S01-S04, fet)
│   │   ├── ba2-comunicacio-professional/ (S05-S11, fet)
│   │   ├── ba3-contingut-fonts-visual/   (S12-S23, fet)
│   │   ├── ba4-dades-professionalitzacio/ (S24-S31, S29-S30 fets, S24-S28+S31 pendents)
│   │   └── recursos/                 (glossari, guia prompting, empresa, FAQ, etc.)
│   ├── static/activitats/            (enunciats en Word)
│   ├── docusaurus.config.js
│   ├── sidebars.js
│   └── .gitignore
├── Drive-Professorat/       ← PRIVAT (Google Drive del departament)
│   ├── 00-Programacio-i-normativa/   (programació didàctica, qüestions obertes, correspondència RA-CA-BA)
│   ├── 01-Avaluacio/                 (rúbriques, ponderacions)
│   ├── 02-Narrativa-empresa-ficticia/
│   ├── 03-BA1-fonaments-ia/          (fitxes de sessió, solucionaris)
│   ├── 04-BA2-comunicacio-professional/
│   ├── 05-BA3-contingut-fonts-visual/
│   ├── 06-BA4-dades-professionalitzacio/
│   ├── 07-Recursos-tecnics/          (comptes, edat, requisits tècnics)
│   ├── 08-Seguiment-del-curs/
│   └── 99-Plantilles/
├── Planificacio - no fer push/  ← PRIVAT (disseny, TODO)
├── Bibliografia/                ← PRIVAT (material de referència)
├── README.md
└── REVISAR.md                   (checklist detallat de pendents, actualitzat 10/08/2026)
```

## Git

- Repo: `https://github.com/malbareda/ofimaticaIA.git`
- Branch: `main`
- Desplegament: GitHub Pages via GitHub Actions (Docusaurus)
- URL pública: `https://malbareda.github.io/ofimaticaIA/`
- **Només** la carpeta `apunts-git/` és el repositori. Fer `git` des de l'arrel no funcionarà.

## Tecnologia dels apunts

- **Docusaurus** (preset classic, locale `ca`, docs a `/`)
- Sidebars autogenerades per directori dins de cada BA
- Llicència CC BY-NC-SA 4.0

## Contingut del mòdul

### Blocs d'avaluació

| Bloc | Nom | Sessions |
|------|-----|----------|
| BA1 | Fonaments i infraestructura d'IA | S01-S04 |
| BA2 | Comunicació professional amb IA | S05-S11 |
| BA3 | Contingut, fonts i comunicació visual | S12-S23 |
| BA4 | Dades i professionalització | S24-S31 |

### Empresa fictícia

Vallcorba Informàtica, SL — servei informàtic al Vallès, 14 persones. Personatges principals: Núria Vallcorba (gerenta), Aleix Ferrer, Rocío Salas, Dani Ntumba, Laia Puig. Quatre clients: Forn Cardús, Gestoria Amat, Escola Bressol El Cargol, Tallers Roure. Definida a `apunts-git/docs/recursos/lempresa.md`.

### Estat (agost 2026)

- 25 de 31 sessions redactades (falten S24-S28 i S31, totes de full de càlcul)
- Programació didàctica feta (Word, 16 p., 12 AEA, revisió 0.4)
- 3 rúbriques redactades (ús d'IA, entrevista, exposició)
- 62 de 62 criteris d'avaluació assignats
- Pendents clau: autoritzacions familiars, ponderacions, validació departament, sessions de full de càlcul

## Convencions

### Fitxers de sessió (apunts públics)

- Un `.md` per sessió: `sNN-nom-de-la-sessio.md`
- Cada bloc té un `index.md` i un `_category_.json`
- Cada sessió pot tenir material a `static/activitats/` (Word)

### Material de professorat

- Dins de `Drive-Professorat/0X-BAn.../SNN-.../`
- Cada sessió té: `fitxa-de-sessio.md`, `material-base/`, `solucionari/`

### Principis de disseny del mòdul

1. **Anti-copia-enganxa**: el procés és l'evidència, no el resultat final
2. **El procés com a evidència**: documentar l'ús de la IA (què, per què, què has canviat, què has verificat)
3. **Economia de recursos**: eines amb pla gratuït, edat mínima 16 anys, clau d'API del centre amb límit
4. **Mostreig amb entrevista**: sistema d'avaluació per verificar comprensió real

## Què NO fer

- No posar material de professorat dins d'`apunts-git/`
- No fer `git push` des de l'arrel (el `.git` és a `apunts-git/`)
- No fer push de la carpeta `Planificacio - no fer push/`
- No generar contingut en castellà o anglès sense que es demani explícitament
- No inventar sessions o criteris d'avaluació nous sense validar-ho primer
