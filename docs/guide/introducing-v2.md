---
title: Announcing v2
lang: en-US
---

# Announcing Anymod v2 🎉🎉🎉

We've updated Anymod to improve speed & flexibility.

Our primary goals for **v2** were:
1. **Improve speed** - pages with Anymod now load 5-10 times faster
2. **Make mod development more flexible** - now you can build mods with any web tools you want

We're really happy with the end result, and we think you'll enjoy using Anymod even more with **v2**.

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

This also means the underlying Anymod script is smaller & faster to load (was 41kB, now 11kB), and you can still add frameworks like Vue, React, Angular, jQuery, and more when you need them.

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
<!-- Anymod -->
<script id="Anymod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('Anymod','ABCDEF','https://cdn.anymod.com/v2',window,document,'script',{});
</script>
<!-- /Anymod -->
```
::: tip
Be sure to replace `ABCDEF` with your project ID.
:::

This new approach allows for significant speed increases because it doesn't wait for the DOM to load before requesting mod data.

As a nice bonus, the script loaded for **v2** weighs in at 11kB, roughly 1/4 the size of the **v1** script (41kB).

## Updated functionality

### Anymod.Event

`Anymod.Event` has been reimplemented using [Eev](https://github.com/chrisdavies/eev), a tiny (500 byte) library for events. You can use `Anymod.Event` to send data to or from mods in your project.
- Old syntax (deprecated): `Anymod.Event.$on`, `Anymod.Event.$emit`, `Anymod.Event.$off`
- New syntax (removes $): `Anymod.Event.on`, `Anymod.Event.emit`, `Anymod.Event.off`

### Anymod( key )

In **v1**, calling `Anymod('abcde')` returns the Vue instance for mod `abcde`.

In **v2**, calling `Anymod('abcde')` returns an object containing data for mod `abcde`. 

Unlike v1, v2 is no longer reactive by default.  For example, calling `Anymod('abcde').myField = 'foo'` no longer updates the `myField` value for the mod.  This was a feature of Vue.js, and you can re-enable this type of reactivity if needed by using a framework like Vue, React, or Angular.

## Legacy functionality

Vue.js and Axios have been factored out of **v2** and are no longer included by default.

### Anymod.Vue

In **v1**, `Anymod.Vue` contained the `Vue` constructor for [Vue.js](https://vuejs.org/) 2.1.4. This is no longer defined in **v2**, as the dependency on Vue.js has been removed.

To include Vue in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose a Vue version from the dropdown list provided for the mod's JS sources.

### Anymod.axios

In **v1**, `Anymod.axios` contained the `axios` constructor for [Axios](https://github.com/axios/axios) 0.15.3. This is no longer defined in **v2**, as the dependency on Axios has been removed.

To include Axios in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose an Axios version from the dropdown list provided for the mod's JS sources.

### Re-adding legacy functionality

As described above, new mods do not have access to `Anymod.Vue` or `Anymod.axios` by default.  If you require these, consider including the latest versions [Vue.js](https://vuejs.org/) and [Axios](https://github.com/axios/axios) separately.  

Alternatively, you can add the following URL to a mod's JS sources to get the legacy versions:

`https://cdn.anymod.com/anymod.legacy.vue-axios.js`

### Component namespace

Previously, the `Anymod` object was also namespaced to `Component`.  For example, calling `Anymod.render()` was equivalent to `Component.render()`.  This `Component` namespace has been removed in **v2**.

## Examples

Given a mod with the following fields:

| Field name| Value | Type |
|:-----------|:-----|:------|
| message  | Hello, World! | Simple text |
| myHtml   | &lt;p&gt;I'm a P tag&lt;/p&gt; | Rich text (HTML) |
| imgSrc   | https://via.placeholder.com/90x90 | Image |
| myLink   | https://example.com | Link (URL) |
| myColor  | #409CDC | Color |
| repeatText | ["Foo", "Bar", "Baz"] | Simple text (with 3 repeat items) |

The below examples show several ways to insert content in a mod's HTML panel.

### Plain HTML with Handlebars (no JS framework)

You can use [Handlebars](https://handlebarsjs.com/expressions.html) syntax to insert content without needing a JS framework.

With values from the table above, adding the following to a mod's HTML:

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

would yield the following output:

```html
<!-- Simple text -->
Hello, World!

<!-- Rich text (HTML) -->
<p>I'm a P tag</p>

<!-- Image -->
<img src="https://via.placeholder.com/90x90">

<!-- Link -->
<a href="https://example.com">My link</a>

<!-- Color -->
<span style="background: #409CDC">My color</span>

<!-- Repeat fields -->
Foo
Bar
Baz
```

### Vue.js

Field values are also available in a mod's JS panel through the `mod.data` object, so you could add the above fields with [Vue.js](https://vuejs.org/v2/guide/syntax.html) instead of Handlebars like so:

```js
// In the mod's JavaScript panel (be sure to include the Vue.js script URL)
new Vue({
  el: mod.el,
  data: mod.data
})
```

```html
<!-- In the mod's HTML panel -->

<!-- Simple text -->
<!-- Escape curly braces with a leading backslash \{{ -->
\{{ message }}

<!-- Rich text (HTML) -->
<div v-html="myHtml"></div>

<!-- Image -->
<img :src="imgSrc">

<!-- Link -->
<a :href="myLink">My link</a>

<!-- Color -->
<span :style="{ background: myColor }">My color</span>

<!-- Repeat fields -->
<!-- Escape curly braces with a leading backslash \{{ -->
<span v-for="item in items">
  \{{ item.repeatText }}
</span>
```

would yield the following output:

```html
<!-- Simple text -->
Hello, World!

<!-- Rich text (HTML) -->
<p>I'm a P tag</p>

<!-- Image -->
<img src="https://via.placeholder.com/90x90">

<!-- Link -->
<a href="https://example.com">My link</a>

<!-- Color -->
<span style="background: #409CDC">My color</span>

<!-- Repeat fields -->
<span>Foo</span>
<span>Bar</span>
<span>Baz</span>
```

<!-- ## React Coming soon -->

### Others

We will introduce options for building mods with JSX & TypeScript soon, in order to better support traditional syntax for React & Angular mods. Stay tuned!