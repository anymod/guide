---
title: HTML editor
lang: en-US
---

# HTML editor

When the Anymod script runs, it first replaces a mod's tag (`<div id="anymod-abcde"></div>`) with the mod's HTML. This means anything in a mod's HTML will be placed directly onto the page.

In addition to plain HTML, you can insert fields/variables directly into a mod's HTML with Handlebars.

## Fields

Fields let you insert editable information into your mod. For example, you can add a `title` field, and it will be available in your mod in 3 different ways:

<ol>
  <li>In the HTML via Handlebars, by using <code v-pre>{{ title }}</code></li>
  <li>In the CSS via SCSS, by using <code>$title</code></li>
  <li>In the JS, by using <code>mod.data.title</code></li>
</ol>

## Using Handlebars

Handlebars lets you insert fields into your HTML without needing to write JavaScript. Full documentation on Handlebars can be found [here](https://handlebarsjs.com/).

### Text field

For a regular field like `title` set to `'Hello, Mod!'`, insert with 2 curly braces:

```html
<h1>{{ title }}</h1>
```

Result:

```html
<h1>Hello, Mod!</h1>
```

### Rich text (HTML) field

To insert a Rich text (HTML) field like `body`, use 3 curly braces instead of 2:

```html
{{{ body }}}
```

Result:

```html
<h3>This is the body</h3>
<p>which is HTML</p>
```

### Repeat fields

For a repeat field, you can loop over the mod's `items` using Handlebars. For example, with a repeat color and text fields called `textColor` and `text`, we might have 3 items defined:

| Item | `textColor` | `text`         |
| ---- | ----------- | -------------- |
| 0    | #409cdc     | This is blue   |
| 1    | #2aa198     | I'm green      |
| 2    | #7358d6     | Lastly, purple |

To insert these:

```html
{{#each items}}
<p style="color:{{ textColor }}">{{ text }}</p>
{{/each}}
```

Result:

```html
<p style="color:#409cdc">This is blue</p>
<p style="color:#2aa198">I'm green</p>
<p style="color:#7358d6">Lastly, purple</p>
```

### Boolean field

You can conditionally add things to your mod with fields and Handlebars. For example, with a boolean field called `showSection`, you could show or hide something:

```html
{{#if showSection}}
<div>The section is visible</div>
{{else}}
<div>No dice</div>
{{/if}}
```

With `showSection` set to `true`

```html
<div>The section is visible</div>
```

With `showSection` set to `false`

```html
<div>No dice</div>
```

[Example mod](https://anymod.com/mod/boolean-example-alaool?h1=54&h2=78)

### Handlebars helpers

In addition to the core Handlebars functionality, mods also include the following helpers from the [handlebars-helpers](https://github.com/helpers/handlebars-helpers) library:

| Category   | Description                                | Docs                                                        |
| ---------- | ------------------------------------------ | ----------------------------------------------------------- |
| comparison | Compare values                             | [link](http://assemble.io/helpers/helpers-comparison.html)  |
| inflection | Plurals and number suffixes (ordinals)     | [link](http://assemble.io/helpers/helpers-inflections.html) |
| markdown   | Compile markdown to HTML                   | [link](http://assemble.io/helpers/helpers-markdown.html)    |
| math       | Add, divide, floor, ceiling, rounding, etc | [link](http://assemble.io/helpers/helpers-math.html)        |
| number     | Commas, decimals, scientific notation, etc | [link](http://assemble.io/helpers/helpers-numbers.html)     |
| string     | Capitalize, format, count, truncate, etc   | [link](http://assemble.io/helpers/helpers-strings.html)     |

### Manipulating images

You can use [buildImage](/guide/global-methods.html#anymod-buildimage) to manipulate images. For example, with an image field called `image`, you can use Handlebars to crop and center on a face:

```html
<img src="{{ buildImage image w=300 h=200 c='fill' g='face' }}" />
```
