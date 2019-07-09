---
title: Use ES6 / ES2015
lang: en-US
---

In this example, we'll use ES6 / ES2015 JavaScript in a mod.

### 1. Set your mod to Babel mode

Select Babel from the JS panel dropdown:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/es6-1-compile-method.png">

::: tip
[Babel](https://babeljs.io/docs/en) is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
:::

### 2. Add some HTML

Add some HTML to the mod. For this example, add some basic text with an id of `message`:

```html
<div id="message">
  Hello, World!
</div>
```

### 3. Add some ES6 JavaScript

Add the JS below to your mod.  A few features of ES6 / ES2015 highlighted here are:

- Line 1: `let` assignment, similar to `var` in earlier JS versions
- Line 3: `const` assignment, used for one-time assignment when a variable's value will not change
- Line 6: String literal syntax (using **\`** instead of **"** or **'**) with a variable inserted using `${}`
- Line 12: Arrow operator `=>` used in place of `function` syntax

```js
let messageEl = document.getElementById('message')

const itemsToAdd = [
  10,
  22,
  `This mod is ${mod.key}`
]

/* 
 * Loop over itemsToAdd and add a div for each item 
 */
itemsToAdd.map(item => {
  let newDiv = document.createElement('div')
  newDiv.innerHTML = item
  messageEl.append(newDiv)
})
```

::: tip
This is only a subset of ES6 / ES2015 features. You can learn more [here](https://babeljs.io/docs/en/learn)
:::

### 4. Result

Saving the mod will reload its preview, which should look like:

<div>
  Hello, World!
  <div>10</div>
  <div>22</div>
  <div>This mod is bkkan</div>
</div>

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/es6-4-result.png">

Babel has pre-compiled the above ES6 / ES2015 JavaScript into "regular" ES5 JavaScript as shown below, and this JavaScript is what ultimately runs in the browser when the mod is loaded:

```js
"use strict";
var messageEl = document.getElementById("message");
var itemsToAdd = [
  10,
  22,
  "This mod is ".concat(mod.key)
];

/*
 * Loop over itemsToAdd and add a div for each item
 */
itemsToAdd.map(function(item){
  var newDiv = document.createElement("div");
  newDiv.innerHTML = item;
  messageEl.append(newDiv);
});
```

In this way, you can use new features of ES6 / ES2015 JavaScript while still maintaining backwards compatibility for mods viewed in older browsers.