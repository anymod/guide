---
title: Global methods
lang: en-US
---

# Global methods

`AnyMod` is a global JavaScript object that provides access to all of the mods on a page along with several useful utility functions.

## AnyMod.ready

**`AnyMod.ready(callback)`**

Executes a callback once the AnyMod script has finished loading.

#### Usage

```JS
AnyMod.ready(function () {
  console.log('Hello world!')
})
AnyMod.ready(function () {
  console.log('Hello again!')
})
```

#### Result

Runs the callbacks when AnyMod has finished loading.

```
Hello world!
Hello again!
```

::: tip
You don't need to use `AnyMod.ready()` in a mod's own code: it will already be ready.
:::

## AnyMod.render

**`AnyMod.render(callback) -> [promise]`**

Renders mod tags that were added to the page after AnyMod's initial run. Can be used with a callback or a promise.

#### Usage

```js
// With a callback
AnyMod.render(function() {
  console.log('Render complete')
})
```

```js
// With a promise
AnyMod.render()
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

Mods are rendered automatically when the AnyMod script loads. However, you may not have all mods on the page at that time, so you can call `AnyMod.render()` at any time to render mods that have been added since initial page load. There are a few scenarios where this may happen, and the behavior for each is shown below:

| Scenario | Behavior |
|:---------|:---------|
| No unrendered mods | Execute promise or callback, if any. |
| New, unrendered mods | Fetch data with single API call for all new mods, then render unrendered mods, then execute promise or callback, if any. |
| Previously fetched (but now unrendered) mods | Use the existing data from `AnyMod.Page` to render unrendered mods, then execute promise or callback, if any. |

::: tip
`AnyMod.render()` is useful when using mods within modern JavaScript frameworks. See the AnyMod guides for [React](/guide/react.html), [Vue.js](/guide/vue.html), or [Angular](/guide/angular.html) for more specifics.
:::

## AnyMod( key )

**`AnyMod(key)`**

Returns the data object for a given mod.

#### Usage

```js
AnyMod('abcde')
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
AnyMod('abcde').data.message
// --> "Hello, world!"
```

## AnyMod.Project

You can get the current project at any time with `AnyMod.Project`

```js
AnyMod.Project
// -> "8PP6M2"
```

## AnyMod.ApiUrl

You can get the AnyMod API URL with `AnyMod.ApiUrl`

```js
AnyMod.ApiUrl
// -> "https://api.anymod.com/v2/"
```

## AnyMod.Event

AnyMod comes with a built-in message bus for communication between mods or within your application. It is based on [Eev](https://github.com/chrisdavies/eev) and has three methods:

- **`AnyMod.Event.on(`**`eventName, callback`**`)`**

  Listen for a custom event, which can be triggered by `AnyMod.Event.emit`. The  `callback` will receive whatever `data` is emitted.

- **`AnyMod.Event.off(`**`eventName, callback`**`)`**

  Remove custom event listener(s). `eventName` and `callback` must match the event as defined in `AnyMod.Event.on`.

- **`AnyMod.Event.emit(`**`eventName, data`**`)`**

  Trigger an event. Any additional arguments will be passed into the `callback` function for `AnyMod.Event.on`.

#### Usage

```js
function logHello (data) {
  console.log('Hello, ' + data.name + '!')
}

// Create event listener
AnyMod.Event.on('custom:message', logHello)

// Trigger event
AnyMod.Event.emit('custom:message', { name: 'everyone' })
// -> "Hello, everyone!"

// Remove event listener
AnyMod.Event.off('custom:message', logHello)

// Trigger event again
AnyMod.Event.emit('custom:message', { name: 'everyone' })
// -> Does nothing (event listener was removed with .off())
```

#### Example (on)

The following [mod](https://anymod.com/mod/nbkmn) has an event **listener** added:

```js
AnyMod.Event.on('updateMod', function(data) {
  title.innerHTML = data.title
  text.innerHTML = data.text
})
```

<mod mod-key="nbkmn"/>

Open your browser console and run the following to update the mod:

```js
AnyMod.Event.emit('updateMod', { title: 'Hello, world', text: 'New text' })
```

#### Example (emit)

The following [mod](https://anymod.com/mod/kodbb) has an event **emitter** added:

```js
AnyMod.Event.emit('updateMod', {
  title: titleInput.value,
  text: textInput.value
})
```

<mod mod-key="kodbb"/>

Because it emits the `updateMod` event, this mod can communicate with the first mod that has the event listener added.

Click the `Send event` button to update the first mod's text.

::: tip
View the code for the [listener](https://anymod.com/mod/nbkmn) and [emitter](https://anymod.com/mod/kodbb) mods to learn more.
:::


## AnyMod.buildImage

**`AnyMod.buildImage(image, { options })`**

Resizes and crops an `image` based on `options` inputs.

#### Usage

```js
// Inside of AnyMod editor JavaScript panel
AnyMod.buildImage(mod.data.image, { w: 300, h: 200, c: 'fill', g: 'face' })
```

```html
<!-- Handlebars: inside of AnyMod editor HTML panel -->
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
var newImage = AnyMod.buildImage(mod.data.image, { w: 400, h: 150, c: 'fill' })
```
```html
<!-- Handlebars (HTML panel) -->
<img src="{{ buildImage image w=400 h=150 c='fill' }}" />
```

<img src="https://res.cloudinary.com/component/image/upload/c_fill,w_400,h_150/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

If the image has a face, you can smart crop by using the `g: 'face'` option:

```js
// JavaScript (JS panel)
var newImage = AnyMod.buildImage(mod.data.image, { w: 150, h: 150, c: 'crop', g: 'face' })
```
```html
<!-- Handlebars (HTML panel) -->
<img src="{{ buildImage image w=150 h=150 c='crop' g='face' }}" />
```

<img src="https://res.cloudinary.com/component/image/upload/c_crop,w_150,h_150,g_face/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

::: tip
See the [image manipulation example](/examples/image-manipulation.html) for more.
:::

## AnyMod.loadScript

**`AnyMod.loadScript(url, callback, { options })`**

Loads a script tag into the `<body>` element as denoted by `url`. Executes an optional `callback` function once the script is loaded.

#### Usage

```js
AnyMod.loadScript('https://www.google.com/recaptcha/api.js', function () {
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

## AnyMod.loadStylesheet

**`AnyMod.loadStylesheet(url, callback, { options })`**

Loads a stylesheet tag into the `<head>` element as denoted by `url`. Executes an optional `callback` function once the stylesheet is loaded.

#### Usage

```js
AnyMod.loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css', function () {
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
