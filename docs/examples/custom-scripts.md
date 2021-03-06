---
title: Add custom scripts
lang: en-US
---

In this example, we'll add an external script to a mod.

### 1. Start with a blank mod

Create or clone a [blank mod](https://anymod.com/mod/llaba) to get started.

### 2. Add some JavaScript that relies on an external library

Let's add a Google Charts [Pie Chart](https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart) to our mod -- doing so will require that we add the script for this library. Add the following to your mod's JavaScript:

```js
google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ])

  const options = { title: 'My Daily Activities' }
  const chart = new google.visualization.PieChart(mod.el)
  chart.draw(data, options)
}
```

Without the external library, the console will throw an error and nothing shows because `google` is not defined.

### 3. Add an external script

Click the JS Assets tab.  From there, you can either choose a script from the dropdown menu or paste a URL to other scripts.

Paste the URL for the Google Charts script: `https://www.gstatic.com/charts/loader.js`

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/custom-scripts-3a-add-script.png">

Now when our mod runs, the JavaScript will function properly, and we get a nice Pie Chart:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/custom-scripts-3b-add-script.png">

::: tip
See the mod from this example [here](https://anymod.com/mod/oorna)
:::

### 4. Add script tags to your page (optional)

Your mod will automatically load any external scripts when you've added the mod tag to your page.

However, for improved performance, it is best to also add any external script tags to your page as described in [Optimizing CSS & JS assets](/examples/optimize-assets.html).
