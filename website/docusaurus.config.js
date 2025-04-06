/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Archway',
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
            path: '../docs', // Path to your existing docs directory
            routeBasePath: '/', // Serve docs at the root URL
            sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
          },
        },
      ],
    ],
  };
  
  export default config;