---
title: Angular 2+ project
lang: en-US
---

# Use AnyMod in an Angular 2+ project

## Setup

To use AnyMod with [Angular 2+](https://angular.io/), add the AnyMod script tag into your document `<head>` before any Angular script tags. Then make `AnyMod` available in your `.ts` file:

```ts
declare var AnyMod: any;
```

Now you can add your mod and call `AnyMod.render()` to render the mod:

```ts
@Component({
  ...
  template: `<div id="anymod-aklnr"></div>`,
})
class AnyModDemo {
  ...
  ngOnInit() {
    AnyMod.render()
  }
}
```

You can use `AnyMod.render()` by itself or with a callback or promise. See the section on [AnyMod.render](/guide/global-methods.html#anymod-render) for more.

## Example

The following example shows a mod being rendered in typescript with `AnyMod.render`:

<iframe width="100%" height="650" src="https://jsfiddle.net/component/1wd5p0gv/embedded/js,html,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod, and you only need to call `AnyMod.render()` once:

```ts
@Component({
  ...
  template: `
    <!-- Card with top image -->
    <div id="anymod-aklnr"></div>
    <!-- GitHub button -->
    <div id="anymod-oorka"></div>
    <!-- Team page -->
    <div id="anymod-dmkdn"></div>  
  `,
})
class AnyModDemo {
  ...
  ngOnInit() {
    AnyMod.render()
  }
}
```

## Re-rendering

You can call `AnyMod.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `AnyMod.render()` will use that data instead of making another API call.

::: tip
See the section on [AnyMod.render](/guide/global-methods.html#anymod-render) for more.
:::