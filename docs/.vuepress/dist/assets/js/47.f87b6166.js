(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{266:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-editor","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML editor")]),t._v(" "),e("p",[t._v("When the AnyMod script runs, it first replaces a mod's tag ("),e("code",[t._v('<div id="anymod-abcde"></div>')]),t._v(") with the mod's HTML. This means anything in a mod's HTML will be placed directly onto the page.")]),t._v(" "),e("p",[t._v("In addition to plain HTML, you can insert fields/variables directly into a mod's HTML with Handlebars.")]),t._v(" "),e("h2",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),e("p",[t._v("Fields let you insert editable information into your mod. For example, you can add a "),e("code",[t._v("title")]),t._v(" field, and it will be available in your mod in 3 different ways:")]),t._v(" "),e("ol",[e("li",[t._v("In the HTML via Handlebars, by using "),e("code",{pre:!0},[t._v("{{ title }}")])]),t._v(" "),e("li",[t._v("In the CSS via SCSS, by using "),e("code",[t._v("$title")])]),t._v(" "),e("li",[t._v("In the JS, by using "),e("code",[t._v("mod.data.title")])])]),t._v(" "),e("h2",{attrs:{id:"using-handlebars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-handlebars","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Handlebars")]),t._v(" "),e("p",[t._v("Handlebars lets you insert fields into your HTML without needing to write JavaScript. Full documentation on Handlebars can be found "),e("a",{attrs:{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"text-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Text field")]),t._v(" "),e("p",[t._v("For a regular field like "),e("code",[t._v("title")]),t._v(" set to "),e("code",[t._v("'Hello, Mod!'")]),t._v(", insert with 2 curly braces:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ title }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Result:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, Mod!"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"rich-text-html-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rich-text-html-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Rich text (HTML) field")]),t._v(" "),e("p",[t._v("To insert a Rich text (HTML) field like "),e("code",[t._v("body")]),t._v(", use 3 curly braces instead of 2:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("{{{ body }}}\n")])])]),e("p",[t._v("Result:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is the body"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("which is HTML"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"repeat-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeat-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Repeat fields")]),t._v(" "),e("p",[t._v("For a repeat field, you can loop over the mod's "),e("code",[t._v("items")]),t._v(" using Handlebars. For example, with a repeat color and text fields called "),e("code",[t._v("textColor")]),t._v(" and "),e("code",[t._v("text")]),t._v(", we might have 3 items defined:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Item")]),t._v(" "),e("th",[e("code",[t._v("textColor")])]),t._v(" "),e("th",[e("code",[t._v("text")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("#409cdc")]),t._v(" "),e("td",[t._v("This is blue")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("#2aa198")]),t._v(" "),e("td",[t._v("I'm green")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("#7358d6")]),t._v(" "),e("td",[t._v("Lastly, purple")])])])]),t._v(" "),e("p",[t._v("To insert these:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("{{#each items}}\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("color:")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" textColor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ text }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{{/each}}\n")])])]),e("p",[t._v("Result:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#409cdc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is blue"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#2aa198")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm green"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#7358d6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Lastly, purple"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"boolean-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Boolean field")]),t._v(" "),e("p",[t._v("You can conditionally add things to your mod with fields and Handlebars. For example, with a boolean field called "),e("code",[t._v("showSection")]),t._v(", you could show or hide something:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("{{#if showSection}}\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The section is visible"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{{else}}\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("No dice"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{{/if}}\n")])])]),e("p",[t._v("With "),e("code",[t._v("showSection")]),t._v(" set to "),e("code",[t._v("true")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The section is visible"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("With "),e("code",[t._v("showSection")]),t._v(" set to "),e("code",[t._v("false")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("No dice"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://anymod.com/mod/boolean-example-alaool?h1=54&h2=78",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example mod"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"handlebars-helpers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-helpers","aria-hidden":"true"}},[t._v("#")]),t._v(" Handlebars helpers")]),t._v(" "),e("p",[t._v("In addition to the core Handlebars functionality, mods also include the following helpers from the "),e("a",{attrs:{href:"https://github.com/helpers/handlebars-helpers",target:"_blank",rel:"noopener noreferrer"}},[t._v("handlebars-helpers"),e("OutboundLink")],1),t._v(" library:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Category")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Docs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("comparison")]),t._v(" "),e("td",[t._v("Compare values")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-comparison.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("inflection")]),t._v(" "),e("td",[t._v("Plurals and number suffixes (ordinals)")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-inflections.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("markdown")]),t._v(" "),e("td",[t._v("Compile markdown to HTML")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("math")]),t._v(" "),e("td",[t._v("Add, divide, floor, ceiling, rounding, etc")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-math.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("number")]),t._v(" "),e("td",[t._v("Commas, decimals, scientific notation, etc")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-numbers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Capitalize, format, count, truncate, etc")]),t._v(" "),e("td",[e("a",{attrs:{href:"http://assemble.io/helpers/helpers-strings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"manipulating-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manipulating-images","aria-hidden":"true"}},[t._v("#")]),t._v(" Manipulating images")]),t._v(" "),e("p",[t._v("You can use "),e("router-link",{attrs:{to:"/guide/global-methods.html#anymod-buildimage"}},[t._v("buildImage")]),t._v(" to manipulate images. For example, with an image field called "),e("code",[t._v("image")]),t._v(", you can use Handlebars to crop and center on a face:")],1),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ buildImage image w=300 h=200 c='fill' g='face' }}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"vue-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue syntax")]),t._v(" "),e("p",[t._v("You may encounter mods that use Vue.js, in which case you will notice HTML syntax like the following:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Syntax")]),t._v(" "),e("th",[t._v("Purpose")]),t._v(" "),e("th",[t._v("Docs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("v-text")])]),t._v(" "),e("td",[t._v("Insert text")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-text",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-html")])]),t._v(" "),e("td",[t._v("Insert HTML")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-bind")])]),t._v(" "),e("td",[t._v("Bind to an attribute, e.g. "),e("code",[t._v("v-bind:class")]),t._v(", "),e("code",[t._v("v-bind:style")]),t._v(", "),e("code",[t._v(":class")]),t._v(", "),e("code",[t._v(":style")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-if")])]),t._v(" "),e("td",[t._v("Conditionally include an element")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-if",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-show")])]),t._v(" "),e("td",[t._v("Conditionally show an element")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-show",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-for")])]),t._v(" "),e("td",[t._v("Loop over an array")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-if",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-on")]),t._v(", "),e("code",[t._v("@")])]),t._v(" "),e("td",[t._v("Respond to events ("),e("code",[t._v("v-on:click")]),t._v(", "),e("code",[t._v("@click")]),t._v(", "),e("code",[t._v("@submit")]),t._v(", etc)")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("v-model")])]),t._v(" "),e("td",[t._v("Bind to an input")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://vuejs.org/v2/api/#v-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])])])])])},[],!1,null,null,null);a.default=n.exports}}]);