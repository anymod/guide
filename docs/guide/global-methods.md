---
title: Global methods
lang: en-US
---

# Global methods

`Anymod` is a global JavaScript object that provides access to all of the mods on a page along with several useful utility functions.

## Anymod.ready

**`Anymod.ready(callback)`**

Executes a callback once the Anymod script has finished loading.

#### Usage

```JS
Anymod.ready(function () {
  console.log('Hello world!')
})
Anymod.ready(function () {
  console.log('Hello again!')
})
```

#### Result

Runs the callbacks when Anymod has finished loading.

```
Hello world!
Hello again!
```

::: tip
You don't need to use `Anymod.ready()` in a mod's own code: it will already be ready.
:::

## Anymod.render

**`Anymod.render(callback) -> [promise]`**

Renders mod tags that were added to the page after Anymod's initial run. Can be used with a callback or a promise.

#### Usage

```js
// With a callback
Anymod.render(function() {
  console.log('Render complete')
})
```

```js
// With a promise
Anymod.render()
.then(function() {
  console.log('Render complete')
})
```

#### Result

Mod tags that were asynchronously added to the page are rendered.

```html
<!-- Hello world text -->
<div id="anymod-abcde"></div>
```
Mod is rendered:
```html
<!-- Hello world text -->
<div id="anymod-abcde" abcde data-anymod="abcde-0000000" data-anymod-mounted>
  Hello, World!
</div>
```

#### Behavior

Mods are rendered automatically when the Anymod script loads. However, you may not have all mods on the page at that time, so you can call `Anymod.render()` at any time to render mods that have been added since initial page load. There are a few scenarios where this may happen, and the behavior for each is shown below:

| Scenario | Behavior |
|:---------|:---------|
| No unrendered mods | Execute promise or callback, if any. |
| New, unrendered mods | Fetch data with single API call for all new mods, then render unrendered mods, then execute promise or callback, if any. |
| Previously fetched (but now unrendered) mods | Use the existing data from `Anymod.Page` to render unrendered mods, then execute promise or callback, if any. |

::: tip
`Anymod.render()` is useful when using mods within modern JavaScript frameworks. See the Anymod guides for [React](/guide/react.html), [Vue.js](/guide/vue.html), or [Angular](/guide/angular.html) for more specifics.
:::

## Anymod( key )

**`Anymod(key)`**

Returns the data object for a given mod.

#### Usage

```js
Anymod('abcde')
```

#### Result

```json
{
  key: "abcde", 
  data: {
    message: "Hello, world!"
    items: []
  }, 
  html: "<div>Hello, world!</div>",
  css: "[abcde]{background:red;padding:10px...}",
  js: "console.log('hello');",
  cssAssets: ["https://cdn.example.com/stylesheet.css"],
  jsAssets: []
}
```

Similarly, you can read a specific piece of data:

```js
Anymod('abcde').data.message
// --> "Hello, world!"
```

## Anymod.buildImage

**`Anymod.buildImage(image, { options })`**

Resizes and crops an `image` based on `options` inputs.

#### Usage

```js
// Inside of Anymod editor JavaScript panel
Anymod.buildImage(mod.data.image, { w: 300, h: 200, c: 'fill', g: 'face' })
```

```html
<!-- Handlebars: inside of Anymod editor HTML panel -->
<img src="{{ buildImage image w=300 h=200 c='fill' g='face' }}" />
```

Image transformations are based on Cloudinary's interface. See the following table for more information:

| Option | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| w | `Integer` | - | Width of the image in pixels |
| h | `Integer` | - | Height of the image in pixels |
| c | `String` | `fit` | [Cropping mode](https://cloudinary.com/documentation/image_transformations#scale): `scale`, `fit`, `mfit`, `fill`, `lfill`, `limit`, `pad`, `lpad`, `mpad`, `crop`, or `thumb`. |
| g | `String` | `center` | [Cropping gravity](http://cloudinary.com/documentation/image_transformations#control_gravity): see link for options. |

#### Example

Given an `image` field with an uploaded image:

<img src="https://res.cloudinary.com/component/image/upload/v1495041007/guide_buildimage_example.jpg"/>

You can resize and crop the image in your JavaScript (JS panel) or with Handlebars (HTML panel):

```js
// JavaScript (JS panel)
var newImage = Anymod.buildImage(mod.data.image, { w: 400, h: 150, c: 'fill' })
```
```html
<!-- Handlebars (HTML panel) -->
<img src="{{ buildImage image w=400 h=150 c='fill' }}" />
```

<img src="https://res.cloudinary.com/component/image/upload/c_fill,w_400,h_150/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

If the image has a face, you can smart crop by using the `g: 'face'` option:

```js
// JavaScript (JS panel)
var newImage = Anymod.buildImage(mod.data.image, { w: 150, h: 150, c: 'crop', g: 'face' })
```
```html
<!-- Handlebars (HTML panel) -->
<img src="{{ buildImage image w=150 h=150 c='crop' g='face' }}" />
```

<img src="https://res.cloudinary.com/component/image/upload/c_crop,w_150,h_150,g_face/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

::: tip
See the [image manipulation example](/examples/image-manipulation.html) for more.
:::

## Anymod.loadScript

**`Anymod.loadScript(url, callback, { options })`**

Loads a script tag into the `<body>` element as denoted by `url`. Executes an optional `callback` function once the script is loaded.

#### Usage

```js
Anymod.loadScript('https://www.google.com/recaptcha/api.js', function () {
  console.log('reCaptcha script has loaded.')
}, { defer: true })
```

#### Options

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| id | `string` | - | Sets the `id` attribute for the `<script>` tag. |
| async | `boolean` | `true` | Sets the `async` attribute for the `<script>` tag. |
| defer | `boolean` | `false` | Sets the `defer` attribute for the `<script>` tag. |

::: tip
You can add scripts directly to a mod without invoking `loadScript`. See [custom scripts](/examples/custom-scripts.html) for more.
:::

## Anymod.loadStylesheet

**`Anymod.loadStylesheet(url, callback, { options })`**

Loads a stylesheet tag into the `<head>` element as denoted by `url`. Executes an optional `callback` function once the stylesheet is loaded.

#### Usage

```js
Anymod.loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css', function () {
  console.log('Bulma CSS has loaded.')
}, { id: 'my-stylesheet' })
```

#### Options

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| id | `string` | - | Sets the `id` attribute for the `<link>` tag. |

::: tip
You can add stylesheets directly to a mod without invoking `loadStylesheet`. See [custom stylesheets](/examples/custom-stylesheets.html) for more.
:::
