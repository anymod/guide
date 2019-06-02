module.exports = {
  title: "Anymod Guide",
  description: "Documentation & Examples for Anymod",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://res.cloudinary.com/component/image/upload/v1519346560/mod_logo_120px.png"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      }
    ],
    /* Production scripts */
    [
      "script",
      { id: "Anymod-script" },
      "(function (m,o,d,u,l,a,r,i,z,e) {u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});})('Anymod','8PP6M2','https://cdn.anymod.com/v2',window,document,'script', { toolkit: false });"
    ],
    ["script", { src: "https://cdn.anymod.com/anymod.com.sandbox.js" }],
    /* Local scripts */
    // ['script', { id: 'Anymod-script' }, "(function (m,o,d,u,l,a,r,i,z,e) {u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;e=['http://localhost:5000/v2/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});})('Anymod','8PP6M2','http://localhost:4000/v2',window,document,'script', { toolkit: false });"],
    // ['script', { src: 'http://localhost:4000/anymod.com.sandbox.js' }],
    /* Scripts for mods */
    [
      "script",
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      }
    ],
    ["script", { src: "/guide-ref.js" }]
  ],
  ga: "UA-89033101-2",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Examples", link: "/examples/" },
      { text: "Module Monday", link: "/module-monday/" },
      { text: "Mods", link: "https://anymod.com/mods" },
      { text: "Community", link: "https://community.anymod.com" }
    ],
    sidebar: {
      "/guide/": [
        "/guide/quickstart.html",
        "/guide/",
        {
          title: "Mod features",
          collapsable: false,
          children: [
            "/guide/content-management-cms.html",
            "/guide/form.html",
            "/guide/image-gallery.html",
            "/guide/navigation.html",
            "/guide/social-media.html"
            // '/guide/custom-mods.html', // TODO
            // ['/guide/', 'Explicit link text']
          ]
        },
        {
          title: "Mod editor",
          collapsable: false,
          children: ["/guide/html.html"]
        },
        {
          title: "Using Anymod",
          collapsable: false,
          children: [
            "/guide/usage.md",
            "/guide/script.md",
            "/guide/global-methods.md",
            "/guide/react.md",
            "/guide/vue.md",
            "/guide/angular.md",
            "/guide/angular-js.md",
            "/guide/bootstrap.md",
            "/guide/data-only.md"
          ]
        },
        // TODO
        // {
        //   title: 'Anymod dashboard',
        //   collapsable: false,
        //   children: [
        //     '/guide/dashboard-pages.html',
        //     '/guide/dashboard-drafts.html',
        //     '/guide/dashboard-responses.html',
        //   ]
        // },
        "/guide/introducing-v2.html",
        "/guide/v1.html"
      ],
      "/examples/": [
        ["/examples/", "List of examples"],
        // Getting started
        "/examples/add-a-mod.html",
        // Content management
        ["/examples/content-management.html", "Content management (CMS)"],
        "/examples/make-page-editable.html",
        "/examples/create-a-draft.html",
        // Build & customize mods
        "/examples/react.html",
        "/examples/vue.html",
        "/examples/custom-stylesheets.html",
        "/examples/custom-scripts.html",
        "/examples/handlebars.html",
        "/examples/scss.html",
        "/examples/es6.html",
        "/examples/jsx.html",
        "/examples/typescript.html",
        // Enhancements
        "/examples/optimize-assets.html",
        "/examples/image-manipulation.html",
        "/examples/right-size-image.html"
        // External Services [TODO]
        // '/examples/axios.html',
        // '/examples/mailchimp.html',
        // '/examples/cloudinary.html',
        // '/examples/google-maps.html',
        // '/examples/recaptcha.html',
      ],
      "/module-monday/": [
        "/module-monday/41.html",
        "/module-monday/40.html",
        "/module-monday/39.html",
        "/module-monday/38.html",
        "/module-monday/37.html",
        "/module-monday/36.html",
        "/module-monday/35.html",
        "/module-monday/34.html",
        "/module-monday/33.html",
        "/module-monday/32.html",
        "/module-monday/31.html",
        "/module-monday/30.html",
        "/module-monday/29.html",
        "/module-monday/28.html",
        "/module-monday/27.html",
        "/module-monday/26.html",
        "/module-monday/25.html",
        "/module-monday/24.html",
        "/module-monday/23.html",
        "/module-monday/22.html",
        "/module-monday/21.html",
        "/module-monday/20.html",
        "/module-monday/19.html",
        "/module-monday/18.html",
        "/module-monday/17.html",
        "/module-monday/16.html",
        "/module-monday/15.html",
        "/module-monday/14.html",
        "/module-monday/13.html",
        "/module-monday/12.html",
        "/module-monday/11.html",
        "/module-monday/10.html",
        "/module-monday/09.html",
        "/module-monday/08.html",
        "/module-monday/07.html",
        "/module-monday/06.html",
        "/module-monday/05.html",
        "/module-monday/04.html",
        "/module-monday/03.html",
        "/module-monday/02.html",
        "/module-monday/01.html"
      ]
    },
    lastUpdated: "Last Updated", // string | boolean
    // https://vuepress.vuejs.org/default-theme-config/#algolia-search
    algolia: {
      apiKey: "1869e5a6fd56b1d3d72d2e23acd8b900",
      indexName: "anymod"
    },

    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'anymod/guide',
    // repoLabel: 'Contribute',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'anymod/guide',
    // if your docs are not at the root of the repo:
    // docsDir: '..',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page"
  },
  markdown: {
    lineNumbers: true
  }
};
