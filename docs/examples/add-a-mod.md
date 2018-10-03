---
title: Add a mod to your page
lang: en-US
---

In this example, we'll add a mod to an empty web page.

### 1. Basic web page

We'll start with a basic HTML web page. You can copy and paste into a file on your computer if you'd like to follow along:

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

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534381540/add-mod-01_xkimjj.png">

### 2. Add a mod

To add a mod to the page, first find a mod that you like (the [Library](https://anymod.com/library) is a good place to look!).

For this example, we'll add an animated timeline, which you can find [here](https://anymod.com/mod/oollr?v=30)

Click the **Clone** button to copy the mod into your project.

### 3. Add the mod to your page

In the mod editor view, click the **Add to website** button in top right corner.

First, paste the **mod tag** in the `<body>` wherever you want the mod to appear.

Next, paste the **Anymod script** just before the closing `</head>` tag of your web page.

Our updated HTML file now looks like this:

```html{7-12,20}
<html>

  <head>
    <title>Basic web page</title>

    <!-- Anymod -->
    <script id="Anymod-script">
      (function (m,o,d,u,l,a,r,i,z,e) {
        u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
        e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
      })('Anymod','8PP6M2','https://cdn.anymod.com/v2',window,document,'script',{});
    </script>
    <!-- /Anymod -->
  </head>

  <body>
    <h1>Hello, World!</h2>
    
    <!-- Timeline demo -->
    <div id="anymod-oollr"></div>
  </body>

</html>
```

Now when the page is reloaded, the mod appears:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534381540/add-mod-02_ladprh.png">

Congratulations, you've added a mod to your web page!