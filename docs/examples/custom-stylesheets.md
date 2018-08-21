---
title: Add custom stylesheets
lang: en-US
---
In this example, we'll add a custom stylesheet to a mod.

### 1. Start with a blank mod

Create or fork a [blank mod](https://anymod.com/mod/llaba) to get started.

### 2. Add some HTML markup

Add the following markup to your mod's HTML:

```html
<div class="btn btn-primary">Submit</div>
```

Without any CSS, the result looks very basic:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534811821/stylesheet-01_vb1enh.png">

### 3. Add a stylesheet

Click the gear (cog) in the header of the CSS panel to open the CSS settings.  From there, you can either choose a stylesheet from the dropdown menu or paste a URL to other stylesheets.

::: tip
In the dropdown shown below, the first few stylesheet options are "Namespaced". Using these stylesheets will only affect your mods, while styles you add from other external stylesheets will be applied to your entire page. See [Namespaced CSS](/guide/namespaced-css.html) for more details.
:::

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534811821/stylesheet-02_f2f8y3.png">

Bootstrap 4 is listed in the dropdown, but let's say we want to use Bootstrap 3 instead. In that case, we can find a CDN that has Bootstrap 3 (or host our own).  In this case, we can use the following URL from [Bootstrap CDN](https://www.bootstrapcdn.com/legacy/bootstrap/):

`https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css`

Copy and paste this URL into the mod input that says **Add external stylesheet**, then click **Add**.

Now our mod has Bootstrap 3 styling applied to it:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534812261/stylesheet-03_mgxirt.png">

### 4. Add stylesheet tags to your page (optional)

Your mod will automatically load any external stylesheets when you've added the mod tag to your page.

However, for improved performance, it is best to also add any external stylesheet tags to your page as described in [Optimizing CSS & JS assets](/examples/optimize-assets.html).
