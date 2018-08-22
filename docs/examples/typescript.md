---
title: Use TypeScript
lang: en-US
---

In this example, we'll use TypeScript in a mod.

### 1. Set your mod to TypeScript mode

Select TypeScript from the JS panel dropdown:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534862351/js-01_zggtos.png">

### 2. Add some TypeScript

Add the TypeScript below to your mod.  A few features of TypeScript highlighted here are:

- Line 1: Use a `class` definition to define general behavior
- Line 2: Define the `name` attribute with the type set to `string`
- Line 4: Set a default value of 0 for the `distanceInMeters` variable
- Line 5: Use string interpolation to insert `${this.name}` and `${distanceInMeters}`
- Line 9: Use `extends` to create a class that inherits properties from the `Animal` class
- Lines 11-14: Create a `move` function that performs an action (`outputText()`) and then calls the `move` function for the parent class with `super.move()`

```ts{1-7,9,11-14}
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    outputText(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    outputText("Slithering...");
    super.move(distanceInMeters);
  }
}

function outputText(txt) {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = txt;
  mod.el.append(newDiv);
}

var sam = new Snake("Sammy the Python");

sam.move();
sam.move(34);
```

### 3. Result

Saving the mod will reload its preview, which should look like:

<div>
  <div>Slithering...</div>
  <div>Sammy the Python moved 5m.</div>
  <div>Slithering...</div>
  <div>Sammy the Python moved 34m.</div>
</div>

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534898117/typescript-02_sbfqrv.png">

The above TypeScript is pre-compiled into "regular" ES5 JavaScript automatically, and this JavaScript is what ultimately runs in the browser when the mod is loaded.

::: tip
For more about TypeScript, see the [official docs](https://www.typescriptlang.org/index.html)
:::