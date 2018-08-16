---
title: Add a mod to your page
lang: en-US
---

::: danger
TODO get this working
:::

In this example, we'll add a mod to an empty web page.

The page we'll start with is basic HTML. You can copy and paste into a file on your computer if you'd like to follow along:

```html
<html>

  <head>
    <title>Basic web page</title>
  </head>

  <body>
    <h1>Hello, World!</h2>
  </body>

</html>
```

Opening this file in our browser, the page looks like this:

<img src="https://res.cloudinary.com/component/image/upload/v1534381540/add-mod-01_xkimjj.png">

To add a mod to the page, first find a mod that you like (the [Library](https://anymod.com/library) is a good place to look!).

For this example, we'll add an animated timeline, which you can find [here](https://anymod.com/mod/nmnko?v=30)

Click the **Fork** button to copy the mod into your project, then click **Add to website**:

1. Paste the **mod tag** in the `<body>` wherever you want the mod to appear
2. Paste the **Anymod script** just before the closing `</head>` tag of your web page

Our updated HTML file now looks like this:

```html
<html>

  <head>
    <title>Basic web page</title>

    <!-- Anymod script -->
    <script id="Anymod-script">
      (function (m,o,d,u,l,a,r,i,z,e) {
        u[m]={Project:o,opts:r};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
        e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
      })('Anymod','865732','https://cdn.anymod.com/v2',window,document,'script');
    </script>
    <!-- /Anymod script -->
  </head>

  <body>
    <h1>Hello, World!</h2>
    
    <!-- Mod tag -->
    <div id="anymod-nmnko"></div>
    <!-- /Mod tag -->
  </body>

</html>
```

Now when the page is reloaded, the mod appears:

<img src="https://res.cloudinary.com/component/image/upload/v1534381540/add-mod-02_ladprh.png">

Congratulations, you've added a mod to your web page!