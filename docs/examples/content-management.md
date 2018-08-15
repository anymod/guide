---
title: Content Management & Editing (CMS)
lang: en-US
---

In this example, you'll see how to add editable content to any web page.

### 1. Create a blank mod

Start with an empty mod, with nothing added. You can fork [this blank mod](https://anymod.com/mod/llaba) if desired.
<img src="https://res.cloudinary.com/component/image/upload/v1534372573/cms-01_njksxm.png"/>

### 2. Add a field named `content`

In the settings section, add an `HTML` field named `content`
<img src="https://res.cloudinary.com/component/image/upload/v1534372573/cms-02_cyynqb.png"/>

### 3. Add the `content` field to your HTML panel

Use Handlebars HTML insertion syntax (`{{{` `}}}`) to automatically insert your field into the mod. For non-HTML fields (e.g. Plain Text), you can use a double mustache (`{{` `}}`) instead of a triple mustache.  See [Using Handlebars](/examples/handlebars.html) for more info.
<img src="https://res.cloudinary.com/component/image/upload/v1534372573/cms-03_figr30.png"/>

### 4. Set a value for the `content` field

Click the **Content** button and add some text to your `content` field. Click **Publish**.
<img src="https://res.cloudinary.com/component/image/upload/v1534372573/cms-04_ukwr7h.png"/>

### 5. Now your content is being inserted into your mod

It is visible in the preview panel below all the code panels.
<img src="https://res.cloudinary.com/component/image/upload/v1534372573/cms-05_wrrfav.png"/>

### 6. Add the mod to any website or web app

Click the **Add to website** button and follow the instructions.  If you have not done so already, paste the anymod script into your page's &lt;head&gt; element:

```html
<head>
  <!-- Anymod -->
  <script id="Anymod-script">
    (function (m,o,d,u,l,a,r,i,z,e) {
      u[m]={Project:o,opts:r};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
      e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
    })('Anymod','XXXXXX','https://cdn.anymod.com/v2',window,document,'script');
  </script>
  <!-- /Anymod -->
</head>
```

This enables Anymod on the page.  Now add the mod in your HTML wherever you want it to appear:

```html
<div id="anymod-nmnmo"></div>
```

::: tip
Make sure you add your own project ID in the Anymod script above (where it says `XXXXXX`), and make sure you use your own mod (not `nmnmo`).
:::

### 7. Reload your page

You content should show on your page.  If you are logged into Anymod, you will also see a pencil icon appear on the right side of the page.  Clicking this icon enables you to make edits to your content.