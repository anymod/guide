---
title: Make your page editable
lang: en-US
---

In this example, we'll make an existing piece of content on a website editable through AnyMod.

### 1. Find the content that you want to make editable

If you have a block of content in mind, find the file for it in your code base and also open the page with your browser.

For this example, we'll use a block of content on a simple web page:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534436338/editable-01_uhihft.png">

### 2. Add a mod to your project

In the AnyMod dashboard, click **New Mod** and then choose the "Content block" mod. Or you can clone the content block mod [here](https://anymod.com/mod/errba).

::: tip
We're using a simple "Content block" mod for this example, but you can use & customize any other mod to have editable content too. [Browse mods](https://anymod.com/mods) for more options.
:::

### 3. Click the pencil icon

This will let you edit the content in your new mod.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/make-editable-3-edit.png">

### 4. Paste your content into the text editor

Delete the existing content and replace it with your own. Click the **Save & Publish** button to publish your new content.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/make-editable-4a-paste-content.png">

Now your content should be showing in the preview:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/make-editable-4b-preview.png">

### 5. Replace the HTML on your page

Find the content in your page's HTML, and replace it with your mod tag.

Replace:

```html
<h2>
  Example content
</h2>
<p>
  Marketing deployment innovator incubator early adopters...
</p>
<p>
  Alpha bandwidth infrastructure niche market partnership...
</p>
```

with

```html
<!-- Example content -->
<div id="anymod-lrarn"></div>
```

::: tip
Be sure you have added the AnyMod script to the top of your page as well. Learn more about setup [here](/examples/add-a-mod.html).
:::

### 6. Reload your page - now it's editable

Your page should look the same as before, but now you can see a pencil on the right side of the page whenever you're logged into AnyMod.

Click the pencil and then select your mod to make live edits directly from your page.

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534437796/editable-05_xtsof6.png">

::: tip
The editor pencil will show on your web page whenever you're logged in to AnyMod. It won't show for your site visitors.

<!-- To allow others to make edits, you can either add them to the project on AnyMod, or you can [create a draft](/examples/create-a-draft.html) and send them the link to make edits. -->

:::
