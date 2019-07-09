---
title: Build a mod with Vue.js
lang: en-US
---

In this example, we'll build a simple mod with Vue.js.

::: tip
There is a [Vue mod](https://anymod.com/mod/rdrdd) that you can clone to start quickly. This example shows how to build up this Vue mod from scratch.
:::

### 1. Start with a blank mod

Create or clone a [blank mod](https://anymod.com/mod/llaba) to get started.

### 2. Add the Vue.js script

Click the code icon (`< >`) to edit the mod's code, then JS Assets. In the dropdown select **Vue.js** to add the Vue.js script.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/vue-2-add-script.png">

::: tip
If you're using a bundle build with Vue, you can add the URL to your bundle instead of the Vue script used here.
:::

### 3. Add a field called `message`

Click the **Fields** tab and add a field called `message` with type set to **Simple text**

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/vue-3a-message-field.png">

Click **Add field** and then click on the link for the `message` field. Add some text and click **Save & Publish**.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/vue-3b-message-field-content.png">

### 4. Write your Vue mod

Now you're ready to build the mod. Add the following code to the mod's JS panel:

```js
let app = new Vue({
  el: mod.el,
  data() {
    return {
      message: mod.data.message
    }
  }
})
```

::: tip
The mod's DOM element is available in the JS panel as `mod.el` (line 2).

Our `message` field is available in the JS panel as `mod.data.message` (line 5).
:::

Now in the HTML panel, add some code to insert the data:

```html
<h2>{{ message }}</h2>
```

::: warning
When using Vue's curly brace syntax (`{{` `}}`), be sure the mod HTML panel is set to "HTML (Plain)" and not to "Handlebars".
:::

### 5. Style your mod

You can still style your mod as usual.  Add the following to the CSS panel:

```css
h2 {
  color: blue;
}
```

### 6. Save your mod

When you click **Save & Publish**, your mod is automatically pre-compiled and displayed. It should look like the example below:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/vue-6-save.png">

Now you're ready to build any kind of mod you want using Vue.js.
