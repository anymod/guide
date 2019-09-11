---
title: General usage
lang: en-US
---

# General usage

<sandbox/>

## Installing a mod

To install a mod on your page, do the following:

1. Add or clone the mod into your project
2. Paste the AnyMod script and mod tag to your HTML

### Add or clone a mod

Each mod has a `Clone` button in the top corner. Clicking this button creates a copy of the mod in your project.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/usage-clone.png">

Follow the instructions on the bottom of the page in order to add the mod to your website:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/usage-add.png">

### Paste into your HTML

To make the mod show on your page, paste the mod tag into your HTML where you would like the mod to show:

```html
<!-- Card with top image -->
<div id="anymod-ekaob"></div>
```

then paste the AnyMod script once, just before the closing `</head>` tag:

```html
<!-- AnyMod -->
<script id="AnyMod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('AnyMod','XXXXXX','https://cdn.anymod.com/v2',window,document,'script',{});
</script>
<!-- /AnyMod -->
```

Now when you load the page, the mod appears:

<div class="mod-container" style="text-align:center;">
  <!-- Card with top image Usage-01 -->
  <mod mod-key="mklmd"/>
</div>

To add multiple mods to a page, paste each mod wherever you want:

```html
<!-- Card with top image -->
<div id="anymod-ekaob"></div>
<br />
<!-- GitHub button -->
<div id="anymod-nbdal"></div>
```

<div class="mod-container" style="text-align:center;">
  <!-- Card with top image Usage-01 -->
  <mod mod-key="mklmd"/>
  <br>
  <!-- [Sandbox] GitHub button Social-03 -->
  <div id="anymod-oorka"></div>
</div>

::: tip
Only add the AnyMod script once, even if you have many mods on a page.
:::

## Editing a mod

There are two ways to edit a mod:

- Edit **content** directly from your own web page; or
- Edit **content & code** in the AnyMod dashboard

### Editing from your own page

When you are logged into AnyMod and viewing your own web page, you will see a pencil icon on the right side of the page. Click this icon, then click a mod to make edits.

::: tip
Try it: click the pencil <sandbox-inline/> on the right of this page, then click the above mod and make some edits.
:::

### Editing from the AnyMod dashboard

To edit content from the AnyMod dashboard, click the pencil icon at the top of the page.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/usage-edit.png">

This will open the same interface as the on-page editor, and will allow you to make content edits.

To edit code from the AnyMod dashboard, make changes to the HTML, CSS, or JS panels and then click `Save & Publish` at the top of the page.

::: tip
Try it: [click here](https://anymod.com/mod/ekaob) to clone the above mod and start making edits.
:::

## Moving a mod to a different project

While viewing our newly cloned & edited mod, click the arrow next to the "Clone" button then click "Move to another project".

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/move-mod.png">
