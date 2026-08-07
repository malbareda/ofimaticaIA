# Apunts — Ofimàtica i Intel·ligència Artificial (M0223)

Apunts públics del mòdul **M0223 Aplicacions ofimàtiques**, impartit com a
*Ofimàtica i Intel·ligència Artificial* a 1r de SMX de l'Institut Sabadell.

> **Aquest repositori és públic i el veuen els alumnes.**
> Res que sigui exclusiu de professorat (solucionaris, enunciats d'examen,
> rúbriques de correcció, dades d'alumnat) no pot entrar aquí. Aquest material
> viu a la carpeta de Drive del departament.

## Posar-lo en marxa

```bash
npm install     # només la primera vegada
npm start       # servidor de desenvolupament a http://localhost:3000
npm run build   # genera la web estàtica a build/
```

Cal Node.js 20 o superior.

## Estructura

```
docs/
├── intro.md                          Presentació del mòdul
├── ba1-fonaments-ia/                 Setmanes 1-4
├── ba2-comunicacio-professional/     Setmanes 5-11
├── ba3-contingut-fonts-visual/       Setmanes 12-23
├── ba4-dades-professionalitzacio/    Setmanes 24-31
└── recursos/                         Glossari, guies i referència transversal
```

Cada sessió és un fitxer Markdown independent. La barra lateral es genera
automàticament a partir de les carpetes i del camp `sidebar_position`.

## Publicació

El repositori conté **només el codi font**. La web es genera amb
`npm run build`, que converteix els fitxers Markdown de `docs/` en HTML estàtic
dins de `build/`. Aquesta carpeta no es puja al repositori: es regenera a cada
desplegament.

`.github/workflows/deploy.yml` fa aquest procés automàticament a cada `push`
sobre `main` i en publica el resultat a GitHub Pages.

### Primer desplegament

1. Crea el repositori a GitHub i fes-hi el primer `push` sobre `main`.
2. Vés a **Settings → Pages** i tria, com a origen, **GitHub Actions**
   (no *Deploy from a branch*).
3. Espera que acabi el workflow a la pestanya **Actions**.

La web quedarà a `https://ORGANITZACIO.github.io/REPOSITORI/`.

No cal tocar `ORG` ni `REPO` a `docusaurus.config.js`: dins de GitHub Actions es
dedueixen de `GITHUB_REPOSITORY`. Els valors escrits al fitxer només afecten
l'execució en local; si vols que `npm run build` local generi les mateixes URL
que la web publicada, ajusta'ls.

> El `baseUrl` ha de coincidir amb el nom del repositori. És l'error més comú
> del primer desplegament: si no coincideix, la web es publica però es veu sense
> estils i amb tots els enllaços trencats.

### Provar-ho en local abans de publicar

```bash
npm install
npm start          # servidor de desenvolupament amb recàrrega automàtica
npm run build      # comprova que no hi ha enllaços trencats
npm run serve      # serveix el resultat del build tal com es veurà publicat
```

## Llicència

Contingut sota [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca).
