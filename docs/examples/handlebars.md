---
title: Use Handlebars
lang: en-US
---

In this example, we'll use [Handlebars](https://handlebarsjs.com/) to pre-compile a mod's HTML.

### 1. Set your mod to Handlebars mode

Select Handlebars from the HTML compile method dropdown:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/handlebars-1-compile-method.png">

### 2. Add some custom fields

Click the code icon (`< >`) to edit the mod's code, then visit the **Fields** tab.

Add 2 fields to your mod:

1. `message`: Simple text
2. `content`: Rich text (HTML) with Repeat

Your mod fields should look like this:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/handlebars-2-add-fields.png">

Your mod's HTML panel should now read

```html
{{ message }}

{{#each items}}
  {{{ content }}}
{{/each}}
```

::: tip
Notice that we've used two curly braces to insert simple text (`{{` `}}`), while we've used three curly braces (`{{{` `}}}`) for HTML.
:::

### 3. Add content to your fields

Click the pencil icon and go to the **Content** tab, then add some content for your `message` field. Also add some repeat items with the `content` field set:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/handlebars-3a-add-content.png">

Click **Save & Publish** to save your content, then view your mod:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/handlebars-3b-save.png">

The mod's fields are being filled in with Handlebars.

### 4. Customize your HTML

You can insert text anywhere in your HTML using Handlebars. Try updating your HTML to the following:

```html
<div style="background: {{ message }}">
  {{ message }}
</div>

{{#each items}}
  <div style="border: 1px solid blue;">
    {{{ content }}}
  </div>
{{/each}}
```

Now change the value of `message` from "Hello, World!" to "green". As written, this will be inserted into the `style` attribute of the `div` on line 1 as well as inside the div itself (line 2).  The result will be:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/handlebars-4-customize.png">

Using this approach, you can add content, styles, and more to your mod's HTML using Handlebars.

::: tip
For more Handlebars syntax, see the [official docs](https://handlebarsjs.com/expressions.html)
:::