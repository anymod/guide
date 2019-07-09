---
title: Image galleries
lang: en-US
---

# Image galleries

<sandbox/>

## How it works

AnyMod lets you easily add image galleries to any page.

Images can be replaced and rearranged by anyone on your team, with no coding knowledge needed.

When you add a gallery mod to your page, it will look normal to visitors. For users on your team however, a pencil icon will appear on the right side of the page:

<div class="mod-container">
  <!-- [Sandbox] Image Gallery-01 -->
  <mod mod-key="lmbmm"/>
</div>

Clicking this pencil icon allows you or your team to select the gallery to edit:

<div class="mod-container">
  <!-- [Sandbox] Image Gallery-02 -->
  <mod mod-key="oorla"/>
</div>

Clicking the gallery opens the content editor, which can be used to make live, realtime edits to the gallery:

<div class="mod-container">
  <!-- [Sandbox] Image Gallery-03 -->
  <mod mod-key="aklbr"/>
</div>

::: tip
The three images above are actually mods: click the pencil <sandbox-inline/> on the right, then click an image to edit it.
:::

## From the library

AnyMod has dozens of galleries to choose from in the [library](https://anymod.com/library?tag=galleries).

To add a gallery, choose from the library and click the "Clone" button in the top corner:

<img src="https://res.cloudinary.com/component/image/upload/v1538154150/gallery-04_wkvd2r.png">

Next follow the instructions on the bottom of the page:

<img src="https://res.cloudinary.com/component/image/upload/v1538094487/form-02_rjan9p.png">

Adding the AnyMod script and the mod tag to your page will cause the gallery to appear:

```html
<!-- Image gallery -->
<div id="anymod-onakb"></div>
```

<!-- [Sandbox] Image Gallery-04 -->
<mod mod-key="kokob"/>

::: tip
Click the pencil <sandbox-inline/> on the right, then click the gallery mod above to make edits.
:::

## Customizing a gallery

In addition to editing a gallery's content, you can also optionally edit its code. This gives you full flexibility to extend mods to fit your exact needs.

For example, we can modify the above gallery to add some CSS rules:

```css
max-width: 600px;
margin: 0 auto;
.box {
  max-width: 200px;
  max-height: 200px;
  margin: 0;
  padding: 0;
  img {
    padding: 10px;
  }
}
```

And we get the same gallery feature with a different look:

<!-- [Sandbox] Image Gallery-05 -->
<mod mod-key="mklbd"/>

In this way, you can choose a gallery that fits your needs or comes close, then make any edits you need to the content or styling to get exactly what you want.

::: tip
See the gallery [before](https://anymod.com/mod/onakb) and [after](https://anymod.com/mod/mklad) the edits, or read more about [customizing mods](/guide/custom-mods.html).
:::

<!-- ## Creating from scratch -->
