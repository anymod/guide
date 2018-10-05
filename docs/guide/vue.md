---
title: Vue.js project
lang: en-US
---

# Use Anymod in a Vue.js project

## Setup

To use mod with [Vue.js](https://vuejs.org/), add the mod's tag to your HTML and mount Vue as usual:

```html
<div id="demo">
  <!-- Card with top image -->
  <div id="anymod-aklnr"></div>
</div>
```
```js
new Vue({
  el: '#demo'
})
```

## Inside a custom Vue component

To use mods inside a custom Vue component, call `Anymod.render()` once Vue has mounted:

```html
<div id="demo">
  <my-component></my-component>
</div>
```
```js
// register
Vue.component('my-component', {
  template: '<div id="anymod-aklnr"></div>'
})

// create a root instance
new Vue({
  el: '#demo',
  mounted: function () {
    Anymod.render()
  }
})
```

## Example

<iframe height='500' scrolling='no' title='Anymod with Vue.js' src='//codepen.io/anymod/embed/ePdpge/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod, like so:

```html
<div id="demo">
  <!-- Card with top image -->
  <div id="anymod-aklnr"></div>
  <!-- GitHub button -->
  <div id="anymod-oorka"></div>
  <!-- Team page -->
  <div id="anymod-dmkdn"></div>  
</div>
```
```js
new Vue({
  el: '#demo',
  mounted: function () {
    Anymod.render()
  }
})
```

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your Vue.js component (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

::: tip
See the section on [Anymod.render](/guide/global-methods.html#anymod-render) for more.
:::
