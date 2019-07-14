---
title: Announcing v2
lang: en-US
---

# Announcing AnyMod v2 🎉🎉🎉

We've updated AnyMod to improve speed & flexibility.

Our primary goals for **v2** were:
1. **Improve speed** - pages with AnyMod now load 5-10 times faster
2. **Make mod development more flexible** - now you can build mods with any web tools you want

We're really happy with the end result, and we think you'll enjoy using AnyMod even more with **v2**.

::: tip
To start using **v2**, replace the v1 script with the [v2 script](#adding-v2-to-your-page) on your page.
:::

## Mods load 5-10x faster

We've completely reworked how mods are delivered for **v2**, and the end result is a significantly faster load time.

For a typical page:
- <span style="padding:3px 5px;">v1: mod data loads in 100-200ms</span>
- <strong style="background:#fff497;padding:3px 5px;">v2: mod data loads in 10-20ms</strong>

The **v2** script makes heavy use of caching, and the script sends a request for cached data immediately, before the DOM is fully loaded. Mods are then rendered as soon as the data is received and the DOM is ready. Mods are also delivered as a JS file instead of through an AJAX request, which eliminates multiple round trip DNS and OPTIONS requests, saving even more time.

## Use any JS framework (or none)

### Removed dependency on Vue

For **v2**, we've removed the dependency on Vue.js. Now you can use plain JavaScript or any framework you want when building mods (including Vue!).

This also means the underlying AnyMod script is smaller & faster to load (was 41kB, now 11kB), and you can still add frameworks like Vue, React, Angular, jQuery, and more when you need them.

### HTML pre-compilation with Handlebars

Now you can add content directly to your mod HTML by using [Handlebars](https://handlebarsjs.com/expressions.html) syntax, so you don't need to rely on a framework to get editable content in your HTML.

```html
<!-- Old syntax (based on Vue.js) -->
<div v-text="message"></div>

<!-- New syntax (handlebars) -->
{{ message }}
```

<!-- [See more examples](#examples) -->

## Adding v2 to your page

To upgrade a web page from **v1** to **v2**, remove the v1 script tag from the `<body>`, and add the **v2** script in the `<head>`.

### Remove old script tag

Remove the **v1** tag from the bottom of the page:

```html
<!-- Placed before closing </body> tag -->
<script project="ABCDEF" src="https://cdn.anymod.com/v1"></script>
```

### Add v2 script snippet to the `<head>` of the page

```html
<!-- Place inside <head> tag -->
<!-- AnyMod -->
<script id="AnyMod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('AnyMod','ABCDEF','https://cdn.anymod.com/v2',window,document,'script',{});
</script>
<!-- /AnyMod -->
```
::: tip
Be sure to replace `ABCDEF` with your project ID.
:::

This new approach allows for significant speed increases because it doesn't wait for the DOM to load before requesting mod data.

As a nice bonus, the script loaded for **v2** weighs in at 11kB, roughly 1/4 the size of the **v1** script (41kB).

## Updated functionality

### AnyMod.Event

`AnyMod.Event` has been reimplemented using [Eev](https://github.com/chrisdavies/eev), a tiny (500 byte) library for events. You can use `AnyMod.Event` to send data to or from mods in your project.
- Old syntax (deprecated): `AnyMod.Event.$on`, `AnyMod.Event.$emit`, `AnyMod.Event.$off`
- New syntax (removes $): `AnyMod.Event.on`, `AnyMod.Event.emit`, `AnyMod.Event.off`

### AnyMod( key )

In **v1**, calling `AnyMod('abcde')` returns the Vue instance for mod `abcde`.

In **v2**, calling `AnyMod('abcde')` returns an object containing data for mod `abcde`. 

Unlike v1, v2 is no longer reactive by default.  For example, calling `AnyMod('abcde').myField = 'foo'` no longer updates the `myField` value for the mod.  This was a feature of Vue.js, and you can re-enable this type of reactivity if needed by using a framework like Vue, React, or Angular.

## Legacy functionality

Vue.js and Axios have been factored out of **v2** and are no longer included by default.

### AnyMod.Vue

In **v1**, `AnyMod.Vue` contained the `Vue` constructor for [Vue.js](https://vuejs.org/) 2.1.4. This is no longer defined in **v2**, as the dependency on Vue.js has been removed.

To include Vue in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose a Vue version from the dropdown list provided for the mod's JS sources.

### AnyMod.axios

In **v1**, `AnyMod.axios` contained the `axios` constructor for [Axios](https://github.com/axios/axios) 0.15.3. This is no longer defined in **v2**, as the dependency on Axios has been removed.

To include Axios in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose an Axios version from the dropdown list provided for the mod's JS sources.

### Re-adding legacy functionality

As described above, new mods do not have access to `AnyMod.Vue` or `AnyMod.axios` by default.  If you require these, consider including the latest versions [Vue.js](https://vuejs.org/) and [Axios](https://github.com/axios/axios) separately.  

Alternatively, you can add the following URL to a mod's JS sources to get the legacy versions:

`https://cdn.anymod.com/anymod.legacy.vue-axios.js`

### Component namespace

Previously, the `AnyMod` object was also namespaced to `Component`.  For example, calling `AnyMod.render()` was equivalent to `Component.render()`.  This `Component` namespace has been removed in **v2**.

## Examples

You can use Handlebars syntax to insert content into mod HTML without needing a JS framework.

```html
<!-- Simple text -->
{{ message }}

<!-- Rich text (HTML) -->
{{{ myHtml }}}

<!-- Image -->
<img src="{{ imgSrc }}">

<!-- Link -->
<a href="{{ myLink }}">My link</a>

<!-- Color -->
<span style="background: {{ myColor }}">My color</span>

<!-- Repeat fields -->
{{#each items}}
  {{ repeatText }}
{{/each}}
```

You can also access colors, images, and numbers as SCSS variables:

```scss
// Color
color: $myColor;

// Image
background: url($imgSrc);

// Number
padding: $padding;
```

And can access any mod field in JavaScript through `mod.data`:

```js
// Non-repeat fields
let a = mod.data.message
,   b = mod.data.imgSrc

// Repeat fields available as mod.data.items
mod.data.items.map(item => {
  console.log(item.image)
})
```

::: tip
See more examples for building mods with:

- [React](/examples/react.html)
- [Vue](/examples/vue.html)
- [ES6](/examples/es6.html)
- [SCSS](/examples/scss.html)
- [Handlebars](/examples/handlebars.html)
- [JSX](/examples/jsx.html)
- [TypeScript](/examples/typescript.html)
:::