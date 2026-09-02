// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkHideActivitatToc from './src/plugins/remark-hide-activitat-toc.js';

// Organització i repositori de GitHub.
//
// Quan el build corre dins de GitHub Actions, tots dos valors es dedueixen de
// la variable GITHUB_REPOSITORY ("organitzacio/repositori"), de manera que la
// URL i el baseUrl sempre són correctes encara que el repositori canviï de nom.
// Els valors de sota només s'utilitzen en local i s'han d'ajustar un cop.
const [ORG, REPO] = (process.env.GITHUB_REPOSITORY || 'malbareda/ofimaticaIA').split('/');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ofimàtica i Intel·ligència Artificial',
  tagline: 'M0223 · 1r SMX · Institut Sabadell',
  favicon: 'img/logo.svg',

  url: `https://${ORG}.github.io`,
  baseUrl: `/${REPO}/`,
  organizationName: ORG,
  projectName: REPO,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ca',
    locales: ['ca'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${ORG}/${REPO}/edit/main/`,
          beforeDefaultRemarkPlugins: [remarkHideActivitatToc],
          // Activa-ho quan el repositori ja tingui historial de commits:
          // showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ofimàtica i IA',
        logo: {alt: 'Institut Sabadell', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'apunts', position: 'left', label: 'Apunts'},
          {to: '/recursos/politica-us-ia', position: 'left', label: 'Política d\'ús de la IA'},
          {to: '/recursos/glossari', position: 'left', label: 'Glossari'},
          {href: `https://github.com/${ORG}/${REPO}`, label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Apunts',
            items: [
              {label: 'BA1 — Fonaments i infraestructura d\'IA', to: '/ba1-fonaments-ia/'},
              {label: 'BA2 — Comunicació professional amb IA', to: '/ba2-comunicacio-professional/'},
              {label: 'BA3 — Contingut, fonts i comunicació visual', to: '/ba3-contingut-fonts-visual/'},
              {label: 'BA4 — Dades i professionalització', to: '/ba4-dades-professionalitzacio/'},
            ],
          },
          {
            title: 'Recursos',
            items: [
              {label: 'Glossari', to: '/recursos/glossari'},
              {label: 'Guia de prompting', to: '/recursos/guia-prompting'},
              {label: 'L\'empresa', to: '/recursos/lempresa'},
              {label: 'Eines del mòdul', to: '/recursos/eines'},
              {label: 'Com es lliura', to: '/recursos/com-lliurar'},
            ],
          },
        ],
        copyright: `Institut Sabadell · Departament d'Informàtica · CC BY-NC-SA 4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
