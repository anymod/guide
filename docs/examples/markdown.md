---
title: Blogging Like a Hacker
lang: en-US
---

Markdown

[Home](/) <!-- Sends the user to the root README.md -->
[guide](/guide/) <!-- Sends the user to index.html of directory foo -->
[guide heading anchor](/guide/#heading) <!-- Anchors user to a heading in the foo README file -->
[examples - one](/examples/markdown.html) <!-- You can append .html -->
[examples - two](/examples/markdown.md) <!-- Or you can append .md -->


Input

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```