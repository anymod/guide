---
title: Optimize CSS & JS assets
lang: en-US
---

In this example, we'll improve page load speeds by adding external CSS & JS assets.

### 1. Page with 3 mods on it

Let's say we have the 3 mods on our page, so that our page HTML contains the following:

```html
<!-- Mod with Vue JS -->
<div id="anymod-lrmmr"></div>

<!-- Mod with Bootstrap CSS, reCAPTCHA JS, & Axios JS -->
<div id="anymod-obkka"></div>

<!-- Mod with Bulma CSS -->
<div id="anymod-bobmm"></div>
```

::: tip
If 2 mods share the same asset, it will still only be loaded once. Similarly, if the page already contains an asset that mods use, it will only be loaded once.
:::

Taken together, the 3 mods above have the following external assets added to them:

| Name | Type | URL |
|:---- |:---- |:--- |
| Vue.js | JS | https://cdn.jsdelivr.net/npm/vue |
| Bootstrap | CSS | https://cdn.anymod.com/anymod.namespaced.a01.bootstrap-v4.1.css |
| reCAPTCHA | JS | https://www.google.com/recaptcha/api.js |
| Axios | JS | https://unpkg.com/axios/dist/axios.min.js |
| Bulma | CSS | https://cdn.anymod.com/anymod.namespaced.a04.bulma-v0.7.css |

By default, AnyMod will load all of the assets needed for these mods automatically, and the mods will work right out of the box.

However, in order to know which assets to load, AnyMod has to make a request when the page is first parsed, and then load the assets.  This is fast, but we can make the process even faster by eliminating this first request.

### 2. Reading the browser console

When a page with the above 3 mods is loaded, the browser console will display a message with suggestions on how to improve performance.

<img src="https://res.cloudinary.com/component/image/upload/v1537308861/optimize-01_eiuyj1.png">

Following the suggestion, we can paste the asset tags into the document's `<head>`:

```html{4-10}
<head>
  <title>Example web page</title>

  <!-- AnyMod assets -->
  <link href="https://cdn.anymod.com/anymod.namespaced.a01.bootstrap-v4.1.css" rel="stylesheet">
  <link href="https://cdn.anymod.com/anymod.namespaced.a04.bulma-v0.7.css" rel="stylesheet">
  <script defer src="https://www.google.com/recaptcha/api.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <!-- /AnyMod assets -->

  <!-- AnyMod script -->
  <script id="AnyMod-script">
    (function (m,o,d,u,l,a,r,i,z,e) {
      u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
      e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
    })('AnyMod','87M478','https://cdn.anymod.com/v2',window,document,'script',{});
  </script>
  <!-- /AnyMod script -->
</head>
```

### 3. Reload the page

Now when we load the page, the browser console no longer offers any suggestions since we have optimized the asset load sequence. 

By adding the assets directly to the page, the browser can load the assets in parallel with the mods, making the page load faster.

