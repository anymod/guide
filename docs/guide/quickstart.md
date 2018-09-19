---
title: Quickstart
lang: en-US
---

## Timeline mod

Add a timeline mod to your web page:

1. Paste the Anymod script in the head of your HTML, just before the closing `</head>` tag:

```html
<!-- Anymod -->
<script id="Anymod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,opts:r};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('Anymod','865732','https://cdn.anymod.com/v2',window,document,'script');
</script>
<!-- /Anymod -->
```

2. Paste the mod tag inside the `<body>` of your HTML, wherever you want the mod to show:

```html
<div id="anymod-nmnko"></div>
```

3. When you load your page, a timeline mod appears:

<iframe src="https://preview.anymod.com?project=865732&key=nmnko&rand=0" width="100%" height="400" frameborder="0" sandbox="allow-scripts" style="border:1px solid #eaecef;">
</iframe>

You have just added your very first mod!

::: tip
If this was your mod, you could edit its content easily. You can clone this mod into your own project [here](https://anymod.com/mod/nmnko?v=20) and make edits, or simply view it in a [jsfiddle](https://jsfiddle.net/component/pv1zuycw/).
:::

## HTML

The HTML for the above example looks like the following:

```html
<html>

  <head>
    <title>Anymod Quickstart</title>

    <!-- Anymod -->
    <script id="Anymod-script">
      (function (m,o,d,u,l,a,r,i,z,e) {
        u[m]={Project:o,opts:r};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
        e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
      })('Anymod','865732','https://cdn.anymod.com/v2',window,document,'script');
    </script>
    <!-- /Anymod -->
  </head>

  <body>
    <div id="anymod-nmnko"></div>
  </body>

</html>
```

See the [Examples](/examples/) section for even more examples.