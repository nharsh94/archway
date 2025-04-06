/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'archway',
  tagline: 'Solution Architecture Patterns and Blueprints',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs', // Adjusted to point to parent docs folder
          routeBasePath: '/', // Serve docs at root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Archway Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          href: 'https://github.com/nharsh94/archway',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `©${new Date().getFullYear()} Archway`,
    },
    mermaid: {
      theme: { light: 'default', dark: 'dark' },
    },
  },
};

export default config;
