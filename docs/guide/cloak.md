---
title: Hide non-mod elements
lang: en-US
---

# Hide non-mod elements

Sometimes you may have elements on the page that you want to hide until all mods have been loaded. To do this, you can use the `data-cloak-anymod` attribute.

First, add a rule to your CSS that hides anything with the `data-cloak-anymod` attribute:

```html
<style>
  [data-cloak-anymod] {
    display: none;
  }
</style>
```

Now you can add this attribute to any element you want to hide, and it will be shown automatically when mods are loaded:

```html
<div data-cloak-anymod>
  Hide me until mods load.
</div>
```
