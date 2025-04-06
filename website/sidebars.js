module.exports = {
    sidebar: [
      {
        type: 'doc',
        id: 'index', // Points to index.md
        label: 'Introduction',
      },
      {
        type: 'category',
        label: 'Resilience',
        items: ['categories/resilience/circuit-breaker'], // Path relative to the docs folder
      },
    ],
  };