---
title: Use SCSS
lang: en-US
---

In this example, we'll use Sass's [SCSS](https://sass-lang.com/guide) to pre-compile a mod's CSS.

### 1. Set your mod to SCSS mode

Select SCSS from the CSS panel dropdown:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534859338/scss-01_bso3fg.png">

### 2. Add some HTML

Add some HTML to the mod that you want to style. In this example, we'll add a button and some text:

```html
<h2>Hello, World!</h2>
<div class="button">Submit</div>
```

This gives a mod with some plain, unstyled text:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534860297/scss-02_mcga5h.png">

### 3. Add SCSS

Add the SCSS below to your mod.  A few features of SCSS highlighted here are:

- Line 1: Defines a variable called `$buttonColor` that we reuse on lines 6, 7, and 15.
- Line 7: Uses SCSS's built-in `darken` method to generate a color that is 10% darker than `$buttonColor`.
- Line 14-16: Nested rule. This is equivalent to writing `.button:hover` in plain CSS.
- Line 15: Uses SCSS's built-in `lighten` method to generate a lighter color.

```css{1,7,14-16}
$buttonColor: #55acee; 

font-family: sans-serif;

.button {
  background-color: $buttonColor;
  box-shadow: 0px 5px 0px 0px darken($buttonColor, 10%);
  color: white;
  display: inline-block;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 10px 0;
  &:hover {
    background-color: lighten($buttonColor, 5%);
  }
  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
}
```

This gives us a styled `h2` and button:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534860950/scss-03_aihdtb.png">

::: tip
Any CSS rules that aren't applied inside of a selector (like line 3 above, `font-family: sans-serif;`), are automatically applied to the top-level of the mod.
:::

### 4. Understanding scoping

The mod's final HTML markup in this example looks like the following:

```html
<div id="anymod-kbbdr" kbbdr ...>
  <h2>Hello, World!</h2>
  <div class="button">Submit</div>
</div>
```

The SCSS in this example is pre-compiled to the following CSS when the mod is displayed:

```css
[kbbdr] {
  font-family: sans-serif;
}
[kbbdr] .button {
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #2795e9;
  color: white;
  display: inline-block;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 10px 0;
}
[kbbdr] .button:hover {
  background-color: #6cb7f0;
}
[kbbdr] .button:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}
```

By scoping all of the rules to `[kbbdr]`, any rules added within the mod are scoped so that they only apply to the mod itself, and not to the rest of the page.

::: tip
For more information on scoping and how mods work, see [How mods work](/guide/how-mods-work.html).
:::

::: tip
For more SCSS syntax & features, see the [official docs](https://sass-lang.com/guide)
:::