---
title: Content versions
lang: en-US
---

# Content versions

Content versions allow you to use different content for the same mod depending on context.

This is useful for multi-language, split-testing, and other variations where you want to use the same mod with different content.

## Creating a version

To create a content version, visit the editing page for one of your mods, then click on the dropdown text that says `default` to find `Manage versions`.

![Version menu](https://res.cloudinary.com/component/image/upload/v1573854979/versions-1_vhk3id.png)

From this screen, you can create a new version based off of an existing version. Try entering a version like "ES" (Spanish), and click `Create`.

![Creating a version](https://res.cloudinary.com/component/image/upload/v1573855217/versions-2_c5turt.png)

This creates a copy of the default version that can be edited separately.

## Editing a version

Back in the mod's `Content` tab, you can now select your version from the dropdown:

![Selecting a version](https://res.cloudinary.com/component/image/upload/v1573855410/versions-3_wji9bm.png)

Edit the version as you would normally:

![Editing a version](https://res.cloudinary.com/component/image/upload/v1573855572/versions-4_uvc4vy.png)

## Setting the version on a web page

To use a non-default version on your live website, you can specify the version in the AnyMod script or in the URL for the page.

### AnyMod Script

Use the `version` option in the AnyMod script to display a specific version. For example, to display the `ES` version:

<!-- prettier-ignore -->
```html{6}
<!-- AnyMod -->
<script id="AnyMod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('AnyMod','ABCDEF','https://cdn.anymod.com/v2',window,document,'script',{ version: 'ES' });
</script>
<!-- /AnyMod -->
```

::: tip
Note the `{ version: 'ES' }` in the last line of the script. [Learn more](/guide/script.html) about script options.
:::

### URL

You can also set the version by the URL, by specifying it in either the `lang` querystring or the `version` querystring.

For example, to set the version to `ES`, you could do the following:

`https://example.com?lang=ES`

OR

`https://example.com?version=ES`

If your version name has a space in it, be sure to URL-encode the space character using `%20`:

`https://example.com?version=my%20version`

::: tip
If both the URL and the AnyMod Script specify a version, the URL version will be used.
:::

## Mods without a version

AnyMod will use the `default` version for mods that do not have a named version defined. If you use the AnyMod Script or URL methods above to set the version for a page, all mods that do not have that version will display their `default` content instead.
