---
title: AngularJS project
lang: en-US
---

# Use AnyMod in an AngularJS v1 project

## Setup

To use mods with [AngularJS v1](https://angularjs.org/), add the mod tag in an Angular template and call `AnyMod.render()` to render the mods.

One way to do this is in your HTML template and your controller:

```html
<div ng-controller="myCtrl">
  <div id="anymod-aklnr"></div>
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  AnyMod.render()
}])
```

Another way is to use a directive:

```html
<div ng-controller="myCtrl">
  <div demo></div>
</div>
```
```js
angular.module('myApp').directive('demo', [function () {
  return {
    template: '<div id="anymod-aklnr"></div>',
    link: function (scope, ele, attrs) {
      AnyMod.render()
    }
  }
}])
```

Either way works equally well, so you can use whichever method you prefer.

You can use `AnyMod.render()` by itself or with a callback or promise. See the section on [AnyMod.render](/guide/global-methods.html#anymod-render) for more.

## Example

The following example shows 2 mods being rendered: 1 with the directive approach (`aklnr`: the top card) and 1 with the controller approach (`dmkdn`: the team page).

<iframe width="100%" height="650" src="https://jsfiddle.net/component/eq64jp87/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod, and you only need to call `AnyMod.render()` once:

```html
<div ng-controller="myCtrl">
  <!-- Card with top image -->
  <div id="anymod-aklnr"></div>
  <!-- GitHub button -->
  <div id="anymod-oorka"></div>
  <!-- Team page -->
  <div id="anymod-dmkdn"></div> 
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  AnyMod.render()
}])
```

## Re-rendering

You can call `AnyMod.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `AnyMod.render()` will use that data instead of making another API call.

::: tip
See the section on [AnyMod.render](/guide/global-methods.html#anymod-render) for more.
:::
