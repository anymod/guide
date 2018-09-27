---
title: Content management (CMS) [TODO]
lang: en-US
---
<sandbox/>

# Content management (CMS)

## How it works

Anymod lets you make any part of any website editable.

You can make your pages editable by moving static HTML content into a mod, which is editable through the Anymod dashboard or with a live, on-page editor.

When you add a mod with content to your page, it will look normal to visitors. For users on your team however, a pencil icon will appear on the right side of the page:

<!-- [Sandbox] Image CMS-01 -->
<mod :mod-key="'bbdbd'"/>

Clicking this pencil icon allows you or your team to select mods to edit:

<!-- [Sandbox] Image CMS-02 -->
<mod :mod-key="'rbnba'"/>

Selecting a mod opens its content editor, which can be used to make live, realtime edits to content:

<!-- [Sandbox] Image CMS-03 -->
<mod :mod-key="'ooloa'"/>

::: tip
The three images above are actually mods: click the pencil <sandbox-inline/> on the right, then click an image to edit it.
:::

## Basic content

If you have text on your page that you want another user to be able to edit easily:

<blockquote style="color:#333">
  <h3>Lorem ipsum dolor</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ex tellus, eu elementum lorem euismod quis.
  </p>
</blockquote>

You can create or clone a [basic mod with content](https://anymod.com/mod/nbdal/content) and paste your content into the mod's content area.

Then replace the HTML on your page with the mod HTML:

```html
<!-- REMOVE: Static content -->
<h2>Lorem ipsum dolor</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ex tellus, eu elementum lorem euismod quis.</p>
<!-- /REMOVE -->

<!-- ADD: Lorem ipsum text -->
<div id="anymod-nbdal"></div>
<!-- /ADD -->
```

Now when your page loads, content will be displayed as before but will be editable.  Compare the [before](/live-demos/cms-before.html) and [after](/live-demos/cms-after.html) live demo to see the differences in content and code.

::: tip
For more examples of how to make the content on your page editable, see [Content management examples](/examples/#content-management).
:::

## Complex content

Anymod can do much more than make basic text editable. You can build (or clone) mods to edit cards, images, events, colors, links, pricing, navigation and more.

Essentially any content or feature on a website can be made editable with Anymod.

The following example is a [team page mod](https://anymod.com/mod/kokla), with the live mod added to this page:

```html
<!-- Team member cards -->
<div id="anymod-kokla"></div>
```

<mod :mod-key="'kokla'"/>

This mod is editable just like the basic content, with the on-page editor or via the Anymod dashboard:

<img src="https://res.cloudinary.com/component/image/upload/v1537498106/cms-06_q3oyyo.png">

Team members can be added and removed easily, or users can update their photos, bios, links, and more.

[TODO] Can also edit the code

<img src="https://res.cloudinary.com/component/image/upload/v1537498566/cms-07_qgxqlu.png">

## Drafts

## Links