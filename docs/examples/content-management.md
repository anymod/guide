---
title: Content Management & Editing (CMS)
lang: en-US
---

In this example, you'll see how to add editable content to any web page.

### 1. Create a blank mod

Start with an empty mod, with nothing added. You can clone [this blank mod](https://anymod.com/mod/llaba) if desired.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/cms-1-create-blank-mod.png">

### 2. Add a field named `content`

Click the pencil icon to open the editor, then in the **Fields** tab, add a field named `content` with type `Rich text (HTML)`

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/cms-2-add-content-field.png">

### 3. Add the `content` field to your HTML panel

Use Handlebars HTML insertion syntax (`{{{` `}}}`) to automatically insert your field into the mod. For non-HTML fields (e.g. Plain Text), you can use a double mustache (`{{` `}}`) instead of a triple mustache.  See [Using Handlebars](/examples/handlebars.html) for more info.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/cms-3-add-content.png">

### 4. Set a value for the `content` field

Click the new field and add some text to your `content` field. Click **Save & Publish**.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/cms-4-set-content-value.png">

### 5. Now your content is being inserted into your mod

It is visible in the preview pane.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/cms-5-preview.png">

### 6. Add the mod to any website or web app

Follow the instructions at the bottom of the page. If you have not done so already, paste the anymod script into your page's `<head>` element:

```html
<head>
  <!-- AnyMod -->
  <script id="AnyMod-script">
    (function (m,o,d,u,l,a,r,i,z,e) {
      u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
      e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
    })('AnyMod','XXXXXX','https://cdn.anymod.com/v2',window,document,'script',{});
  </script>
  <!-- /AnyMod -->
</head>
```

This enables AnyMod on the page.  Now paste the mod's tag in your page's HTML wherever you want your mod to appear:

```html
<!-- Lorem ipsum text -->
<div id="anymod-nmnmo"></div>
```

::: tip
Make sure you add your own project ID in the AnyMod script above (where it says `XXXXXX`), and make sure you use your own mod (not `nmnmo`).
:::

### 7. Reload your page

You content should show on your page.  If you are logged into AnyMod, you will also see a pencil icon appear on the right side of the page.  Clicking this icon enables you to make edits to your content.