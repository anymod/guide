---
title: Quickstart
lang: en-US
---

# Quickstart
<sandbox/>

## Timeline mod

Add a timeline mod to your web page:

1. Paste the AnyMod script in the head of your HTML, just before the closing `</head>` tag:

```html
<!-- AnyMod -->
<script id="AnyMod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('AnyMod','8PP6M2','https://cdn.anymod.com/v2',window,document,'script',{});
</script>
<!-- /AnyMod -->
```

2. Paste the mod tag inside the `<body>` of your HTML, wherever you want the mod to show:

```html
<!-- Timeline demo -->
<div id="anymod-oollr"></div>
```

3. When you load your page, a timeline mod appears:

<div class="mod-container">
  <!-- Timeline demo v2 [Sandbox] -->
  <mod :mod-key="'lmbrm'"/>
</div>

You have just added your very first mod!

::: tip
Click the pencil <sandbox-inline/> on the right, then click the timeline mod above to edit its content.

You can clone this mod into your own project [here](https://anymod.com/mod/oollr?v=20) and make live edits, or simply view it in a [jsfiddle](https://jsfiddle.net/component/pv1zuycw/).
:::

## HTML

The HTML for the above example looks like the following:

```html
<html>

  <head>
    <title>AnyMod Quickstart</title>

    <!-- AnyMod -->
    <script id="AnyMod-script">
      (function (m,o,d,u,l,a,r,i,z,e) {
        u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
        e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
      })('AnyMod','8PP6M2','https://cdn.anymod.com/v2',window,document,'script',{});
    </script>
    <!-- /AnyMod -->
  </head>

  <body>
    <!-- Timeline demo -->
    <div id="anymod-oollr"></div>
  </body>

</html>
```

See the [Examples](/examples/) section for even more examples.