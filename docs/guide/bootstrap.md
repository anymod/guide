---
title: Bootstrap project
lang: en-US
---

# Use Anymod in a Bootstrap project


## Setup

To use mods with [Bootstrap 3](http://getbootstrap.com/) or [Bootstrap 4](https://v4-alpha.getbootstrap.com/), add Anymod where desired, and the Anymod script will load your mod(s) automatically:

```html
<div id="anymod-mklod"></div>
```

## Example

Form mods can be a nice addition to a Bootstrap modal:

<iframe width="100%" height="450" src="https://jsfiddle.net/component/Lhqv1s7f/embedded/html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## On-the-fly manipulation

In the event that you're manipulating HTML on the fly, you can use `Anymod.render()` to render any mods you've added since the initial page load. For example, if we want to render modal content dynamically when an event like `show.bs.modal` is triggered:

```js
$('#myModal').on('show.bs.modal', function (event) {
  var modal = $(this)
  modal
    .find('.modal-body')
    .html('<div id="anymod-mklod"</div>')
  Anymod.render()
})
```

## On-the-fly example

The example below works the same as the first example, but this example uses `Anymod.render` to render the mod after its HTML is added by the modal initialization:

<iframe width="100%" height="450" src="https://jsfiddle.net/component/8rw5jymk/embedded/html,js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your code. This method will not lead to an API call every time; if a mod has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

::: tip
See the section on [Anymod.render](/guide/global-methods.html#anymod-render) for more.
:::