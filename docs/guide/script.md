---
title: Anymod script
lang: en-US
---

# Script options

You can customize Anymod's behavior on each page:
- To show or hide console tips
- To show or hide the on-page content editor ("toolkit")
- To load certain mods before others

To do this, edit the options parameter `{}`, which is the final argument of the Anymod script:

```html{6}
<!-- Anymod -->
<script id="Anymod-script">
  (function (m,o,d,u,l,a,r,i,z,e) {
    u[m]={Project:o,rq:[],Opts:r,ready:function(j){u[m].rq.push(j)}};function j(s){return encodeURIComponent(btoa(s))};z=l.getElementById(m+'-'+a);r=u.location;
    e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});
  })('Anymod','XXXXXX','https://cdn.anymod.com/v2',window,document,'script',{});
</script>
<!-- /Anymod -->
```

The following parameters can be added inside the last `{}` argument of line 6 above:

| Attribute  | Possible values | Default | Description  |
|:-----------|:---------------|:--------------| :------------|
| `tips`     | `true`,`false` | true | Show perfomance suggestions in the browser console. |
| `toolkit`  | `true`,`false` | true | Show the toolkit pencil (on-page content editor) for logged in users. |
| `priority` | `0`,`1`,`2`,`3`,`4`,etc.<br>**or**<br>array of mod keys: `['abcde','fghij']` | 3 | Number of mods to load before loading remaining mods, or array with mod keys to load before loading remaining mods. |

By default, Anymod loads the first 3 mods on a page first, then loads any remaining mods.

### Example 1: hide on-page editor and prioritize first 2 mods

```js
{ toolkit: false, priority: 2 }
```

- Prevents the on-page editor pencil from showing when you or your team view the page.
- Loads first 2 mods found on the page before all others. Given the following mods

```html{1,2}
<div id="anymod-mod01"></div>
<div id="anymod-mod02"></div>
<div id="anymod-mod03"></div>
<div id="anymod-mod04"></div>
<div id="anymod-mod05"></div>
```

this configuration (`priority: 2`) will load `mod01` and `mod02` before the other mods.

### Example 2: prioritize specific mods

```js
{ priority: ['mod02','mod04'] }
```

- Loads the mods `mod02` and `mod04` before all others. Given the following mods

```html{2,4}
<div id="anymod-mod01"></div>
<div id="anymod-mod02"></div>
<div id="anymod-mod03"></div>
<div id="anymod-mod04"></div>
<div id="anymod-mod05"></div>
```

this configuration (`priority: ['mod02','mod04']`) will load `mod02` and `mod04` first, before the other mods.

::: tip
When using `priority` with specific mod keys, be sure to add surrounding quotation marks for each key: `['mod02','mod04']`, **NOT** `[mod02,mod04]`
:::