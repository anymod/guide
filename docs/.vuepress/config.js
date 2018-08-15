module.exports = {
  title: 'Anymod Guide',
  description: 'Documentation & Examples for Anymod',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Module Monday', link: '/module-monday/' },
      { text: 'Library', link: 'https://anymod.com/library' },
    ],
    sidebar: {
      '/guide/': [
        '/',
        '/examples/markdown.html',
        ['/guide/', 'Explicit link text']
      ],
      '/examples/': [
        '/examples/markdown.html',
      ],
      '/module-monday/': [
        '/module-monday/08.html',
        '/module-monday/07.html',
        '/module-monday/06.html',
        '/module-monday/05.html',
        '/module-monday/04.html',
        '/module-monday/03.html',
        '/module-monday/02.html',
        '/module-monday/01.html',
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
    // https://vuepress.vuejs.org/default-theme-config/#algolia-search
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }

    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'anymod/guide',
    // repoLabel: 'Contribute',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'anymod/guide',
    // if your docs are not at the root of the repo:
    // docsDir: '..',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page'
  },
  markdown: {
    lineNumbers: true
  }
}