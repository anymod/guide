---
title: Merging mods
lang: en-US
---

In this example, we'll merge two mods into one. We'll be working with the [Portfolio Gallery](https://anymod.com/mod/portfolio-gallery-allaml) mod. To follow along, clone this mod into your own project now.

## Scenario

Say we're a freelance developer and have an image gallery mod on one of our client's websites. Our client has asked us to make the following changes:

- Upon clicking an image, have the preview slide up from the bottom instead of down from the top.
- Rewrite the JavaScript in vanilla JS rather than jQuery.
- Add a Readme to the mod to give others an idea of what it does.

### 1. Clone one of your mods

First we'll clone a mod from one of our projects. Click the "Clone" button at the top right corner:

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/0-clone-mod.png">

### 2. Select the target project

Select the project we want the mod to be cloned to. We may select any of our projects as merging is not restricted to any one project; we may merge any mod into another as long as we're the creator or collaborator of it.

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/1-clone-mod.png">

### 3. Make mod changes

Edit the mod's HTML, CSS, JS, Content, or Readme. Try making a change to the mod's

### 4. Start merge process

To begin the merge, click the arrow next to the "Clone" button then click "Merge mod".

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/2-merge-mod.png">

### 5. Select the mod to merge our changes into

We'll be taken to a screen where we have the option to either enter a mod's ID or select a related mod. In this case, we'll select the mod we cloned from (the parent).

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/3-select-mod.png">

### 6. Review changes & merge

We'll be able to view the mod's existing properties along with the changes. A checked property denotes keeping the changes, which will be merged into the mod to the right of the arrow. In our case, we want to keep all of the properties that were changed (CSS, JS, Readme) in mod `alddbm` into our original mod `ormmlb`.

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/4-merge-overview.png">

::: danger
The properties you select will overwrite the mod you're merging into. For example, if you select "JavaScript", the JavaScript from your mod will replace the JavaScript of the mod you're merging into.
:::

After we're satisfied with our changes, we can execute the merge. Click the "Merge" button at the top right corner to commit to the selected changes.

### 7. Success

Upon a successful merge, we will be taken to the mod with the applied changes with a success message. Now that the mod has been updated, we can let our client know the image gallery changes are live.

<img src="https://res.cloudinary.com/component/image/upload/v1568322002/guide/5-merge-success.png">
