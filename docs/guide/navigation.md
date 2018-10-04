---
title: Navigation
lang: en-US
---

# Navigation

## How it works

Mods are self-contained, reusable features, which makes them great for placing the same navigation element on multiple pages.

## Reusable navs

To add a navbar mod to a page, paste the mod into your HTML:

```html
<!-- Bootstrap navbar -->
<div id="anymod-oorba"></div>
```

<!-- Bootstrap navbar Nav-01 -->
<mod mod-key="oorba"/>

To add the navbar to multiple pages, paste the mod HTML onto each page.

::: tip
Be sure to also paste the Anymod script on pages where you want mods to show. See [installing a mod](/guide/usage.html#installing-a-mod) for more info.
:::

## Types of navs

The Anymod [library](https://anymod.com/library) has dozens of navigation elements with different styles and layouts:

```html
<!-- Material Design sidenav -->
<div id="anymod-aklor"></div>
```

<!-- Side navigation Nav-02 -->
<mod mod-key="aklor"/>

```html
<!-- Tabbed navigation -->
<div id="anymod-dmkon"></div>
```
<!-- Tabbed content Nav-03 -->
<mod mod-key="dmkon"/>

```html
<!-- Dropdown menu -->
<div id="anymod-mkldd"></div>
```
<!-- Dropdown menu Nav-04 -->
<mod mod-key="mkldd"/>

::: tip
The mods above are live: click them to interact.

You can clone the above mods into your project if desired: 
- [Bootstrap navbar](https://anymod.com/mod/oorba?v=20)
- [Material Design sidenav](https://anymod.com/mod/aklor?v=20)
- [Tabbed navigation](https://anymod.com/mod/dmkon?v=20)
- [Dropdown menu](https://anymod.com/mod/mkldd?v=20)
:::

## Custom navigation

You can customize both the content of a mod as well as its code. That means you have complete control over the look and behavior of a mod.

And you only need to make a change once for it to show up across all of your pages.

Say we want to customize the `Bootstrap navbar` mod above. We can do so by adding some CSS rules and a brand image:

```html
<!-- Bootstrap navbar (edited) -->
<div id="anymod-kodmb"></div>
```
<!-- Bootstrap navbar (edited) Nav-05 -->
<mod mod-key="kodmb"/>

::: tip
Compare the changes: [before](https://anymod.com/mod/oorba?v=20) and [after](https://anymod.com/mod/kodmb?v=20).
:::

