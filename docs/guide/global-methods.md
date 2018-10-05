---
title: Global methods [TODO]
lang: en-US
---

# Global methods

`Anymod` is a global JavaScript object that provides access to all of the mods on a page along with several useful utility functions. You can interact with it to read and write data, hook into mod events, load and render mods, and more.

## Anymod.ready [TODO]

::: tip
You don't need to use `Anymod.ready` in a mod's own code: it will already be ready.
:::

## Anymod.render [TODO]

## Anymod( key )

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

## Anymod.buildImage [TODO]

## Anymod.loadScript [TODO]

## Anymod.loadStylesheet
