(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{264:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"announcing-anymod-v2-🎉🎉🎉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#announcing-anymod-v2-🎉🎉🎉","aria-hidden":"true"}},[t._v("#")]),t._v(" Announcing Anymod v2 🎉🎉🎉")]),t._v(" "),s("p",[t._v("We've updated Anymod to improve speed & flexibility.")]),t._v(" "),s("p",[t._v("Our primary goals for "),s("strong",[t._v("v2")]),t._v(" were:")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("Improve speed")]),t._v(" - pages with Anymod now load 5-10 times faster")]),t._v(" "),s("li",[s("strong",[t._v("Make mod development more flexible")]),t._v(" - now you can build mods with any web tools you want")])]),t._v(" "),s("p",[t._v("We're really happy with the end result, and we think you'll enjoy using Anymod even more with "),s("strong",[t._v("v2")]),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("To start using "),s("strong",[t._v("v2")]),t._v(", replace the v1 script with the "),s("a",{attrs:{href:"#adding-v2-to-your-page"}},[t._v("v2 script")]),t._v(" on your page.")])]),t._v(" "),s("h2",{attrs:{id:"mods-load-5-10x-faster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mods-load-5-10x-faster","aria-hidden":"true"}},[t._v("#")]),t._v(" Mods load 5-10x faster")]),t._v(" "),s("p",[t._v("We've completely reworked how mods are delivered for "),s("strong",[t._v("v2")]),t._v(", and the end result is a significantly faster load time.")]),t._v(" "),s("p",[t._v("For a typical page:")]),t._v(" "),s("ul",[s("li",[s("span",{staticStyle:{padding:"3px 5px"}},[t._v("v1: mod data loads in 100-200ms")])]),t._v(" "),s("li",[s("strong",{staticStyle:{background:"#fff497",padding:"3px 5px"}},[t._v("v2: mod data loads in 10-20ms")])])]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("v2")]),t._v(" script makes heavy use of caching, and the script sends a request for cached data immediately, before the DOM is fully loaded. Mods are then rendered as soon as the data is received and the DOM is ready. Mods are also delivered as a JS file instead of through an AJAX request, which eliminates multiple round trip DNS and OPTIONS requests, saving even more time.")]),t._v(" "),s("h2",{attrs:{id:"use-any-js-framework-or-none"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-any-js-framework-or-none","aria-hidden":"true"}},[t._v("#")]),t._v(" Use any JS framework (or none)")]),t._v(" "),s("h3",{attrs:{id:"removed-dependency-on-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removed-dependency-on-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" Removed dependency on Vue")]),t._v(" "),s("p",[t._v("For "),s("strong",[t._v("v2")]),t._v(", we've removed the dependency on Vue.js. Now you can use plain JavaScript or any framework you want when building mods (including Vue!).")]),t._v(" "),s("p",[t._v("This also means the underlying Anymod script is smaller & faster to load (was 41kB, now 11kB), and you can still add frameworks like Vue, React, Angular, jQuery, and more when you need them.")]),t._v(" "),s("h3",{attrs:{id:"html-pre-compilation-with-handlebars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-pre-compilation-with-handlebars","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML pre-compilation with Handlebars")]),t._v(" "),s("p",[t._v("Now you can add content directly to your mod HTML by using "),s("a",{attrs:{href:"https://handlebarsjs.com/expressions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Handlebars"),s("OutboundLink")],1),t._v(" syntax, so you don't need to rely on a framework to get editable content in your HTML.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Old syntax (based on Vue.js) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- New syntax (handlebars) --\x3e")]),t._v("\n{{ message }}\n")])])]),t._v(" "),s("h2",{attrs:{id:"adding-v2-to-your-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-v2-to-your-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding v2 to your page")]),t._v(" "),s("p",[t._v("To upgrade a web page from "),s("strong",[t._v("v1")]),t._v(" to "),s("strong",[t._v("v2")]),t._v(", remove the v1 script tag from the "),s("code",[t._v("<body>")]),t._v(", and add the "),s("strong",[t._v("v2")]),t._v(" script in the "),s("code",[t._v("<head>")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"remove-old-script-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-old-script-tag","aria-hidden":"true"}},[t._v("#")]),t._v(" Remove old script tag")]),t._v(" "),s("p",[t._v("Remove the "),s("strong",[t._v("v1")]),t._v(" tag from the bottom of the page:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Placed before closing </body> tag --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ABCDEF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.anymod.com/v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"add-v2-script-snippet-to-the-head-of-the-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-v2-script-snippet-to-the-head-of-the-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Add v2 script snippet to the "),s("code",[t._v("<head>")]),t._v(" of the page")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Place inside <head> tag --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Anymod --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Anymod-script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("rq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/page/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?t='")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("w")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Anymod'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABCDEF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.anymod.com/v2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- /Anymod --\x3e")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("Be sure to replace "),s("code",[t._v("ABCDEF")]),t._v(" with your project ID.")])]),t._v(" "),s("p",[t._v("This new approach allows for significant speed increases because it doesn't wait for the DOM to load before requesting mod data.")]),t._v(" "),s("p",[t._v("As a nice bonus, the script loaded for "),s("strong",[t._v("v2")]),t._v(" weighs in at 11kB, roughly 1/4 the size of the "),s("strong",[t._v("v1")]),t._v(" script (41kB).")]),t._v(" "),s("h2",{attrs:{id:"updated-functionality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated-functionality","aria-hidden":"true"}},[t._v("#")]),t._v(" Updated functionality")]),t._v(" "),s("h3",{attrs:{id:"anymod-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anymod-event","aria-hidden":"true"}},[t._v("#")]),t._v(" Anymod.Event")]),t._v(" "),s("p",[s("code",[t._v("Anymod.Event")]),t._v(" has been reimplemented using "),s("a",{attrs:{href:"https://github.com/chrisdavies/eev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eev"),s("OutboundLink")],1),t._v(", a tiny (500 byte) library for events. You can use "),s("code",[t._v("Anymod.Event")]),t._v(" to send data to or from mods in your project.")]),t._v(" "),s("ul",[s("li",[t._v("Old syntax (deprecated): "),s("code",[t._v("Anymod.Event.$on")]),t._v(", "),s("code",[t._v("Anymod.Event.$emit")]),t._v(", "),s("code",[t._v("Anymod.Event.$off")])]),t._v(" "),s("li",[t._v("New syntax (removes $): "),s("code",[t._v("Anymod.Event.on")]),t._v(", "),s("code",[t._v("Anymod.Event.emit")]),t._v(", "),s("code",[t._v("Anymod.Event.off")])])]),t._v(" "),s("h3",{attrs:{id:"anymod-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anymod-key","aria-hidden":"true"}},[t._v("#")]),t._v(" Anymod( key )")]),t._v(" "),s("p",[t._v("In "),s("strong",[t._v("v1")]),t._v(", calling "),s("code",[t._v("Anymod('abcde')")]),t._v(" returns the Vue instance for mod "),s("code",[t._v("abcde")]),t._v(".")]),t._v(" "),s("p",[t._v("In "),s("strong",[t._v("v2")]),t._v(", calling "),s("code",[t._v("Anymod('abcde')")]),t._v(" returns an object containing data for mod "),s("code",[t._v("abcde")]),t._v(".")]),t._v(" "),s("p",[t._v("Unlike v1, v2 is no longer reactive by default.  For example, calling "),s("code",[t._v("Anymod('abcde').myField = 'foo'")]),t._v(" no longer updates the "),s("code",[t._v("myField")]),t._v(" value for the mod.  This was a feature of Vue.js, and you can re-enable this type of reactivity if needed by using a framework like Vue, React, or Angular.")]),t._v(" "),s("h2",{attrs:{id:"legacy-functionality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-functionality","aria-hidden":"true"}},[t._v("#")]),t._v(" Legacy functionality")]),t._v(" "),s("p",[t._v("Vue.js and Axios have been factored out of "),s("strong",[t._v("v2")]),t._v(" and are no longer included by default.")]),t._v(" "),s("h3",{attrs:{id:"anymod-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anymod-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" Anymod.Vue")]),t._v(" "),s("p",[t._v("In "),s("strong",[t._v("v1")]),t._v(", "),s("code",[t._v("Anymod.Vue")]),t._v(" contained the "),s("code",[t._v("Vue")]),t._v(" constructor for "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" 2.1.4. This is no longer defined in "),s("strong",[t._v("v2")]),t._v(", as the dependency on Vue.js has been removed.")]),t._v(" "),s("p",[t._v("To include Vue in a mod with "),s("strong",[t._v("v2")]),t._v(", add the JS file URL to the mod's JS sources, or choose a Vue version from the dropdown list provided for the mod's JS sources.")]),t._v(" "),s("h3",{attrs:{id:"anymod-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anymod-axios","aria-hidden":"true"}},[t._v("#")]),t._v(" Anymod.axios")]),t._v(" "),s("p",[t._v("In "),s("strong",[t._v("v1")]),t._v(", "),s("code",[t._v("Anymod.axios")]),t._v(" contained the "),s("code",[t._v("axios")]),t._v(" constructor for "),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Axios"),s("OutboundLink")],1),t._v(" 0.15.3. This is no longer defined in "),s("strong",[t._v("v2")]),t._v(", as the dependency on Axios has been removed.")]),t._v(" "),s("p",[t._v("To include Axios in a mod with "),s("strong",[t._v("v2")]),t._v(", add the JS file URL to the mod's JS sources, or choose an Axios version from the dropdown list provided for the mod's JS sources.")]),t._v(" "),s("h3",{attrs:{id:"re-adding-legacy-functionality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-adding-legacy-functionality","aria-hidden":"true"}},[t._v("#")]),t._v(" Re-adding legacy functionality")]),t._v(" "),s("p",[t._v("As described above, new mods do not have access to "),s("code",[t._v("Anymod.Vue")]),t._v(" or "),s("code",[t._v("Anymod.axios")]),t._v(" by default.  If you require these, consider including the latest versions "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Axios"),s("OutboundLink")],1),t._v(" separately.")]),t._v(" "),s("p",[t._v("Alternatively, you can add the following URL to a mod's JS sources to get the legacy versions:")]),t._v(" "),s("p",[s("code",[t._v("https://cdn.anymod.com/anymod.legacy.vue-axios.js")])]),t._v(" "),s("h3",{attrs:{id:"component-namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-namespace","aria-hidden":"true"}},[t._v("#")]),t._v(" Component namespace")]),t._v(" "),s("p",[t._v("Previously, the "),s("code",[t._v("Anymod")]),t._v(" object was also namespaced to "),s("code",[t._v("Component")]),t._v(".  For example, calling "),s("code",[t._v("Anymod.render()")]),t._v(" was equivalent to "),s("code",[t._v("Component.render()")]),t._v(".  This "),s("code",[t._v("Component")]),t._v(" namespace has been removed in "),s("strong",[t._v("v2")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("You can use Handlebars syntax to insert content into mod HTML without needing a JS framework.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Simple text --\x3e")]),t._v("\n{{ message }}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Rich text (HTML) --\x3e")]),t._v("\n{{{ myHtml }}}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Image --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ imgSrc }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Link --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ myLink }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My link"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Color --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("background:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" myColor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My color"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Repeat fields --\x3e")]),t._v("\n{{#each items}}\n  {{ repeatText }}\n{{/each}}\n")])])]),s("p",[t._v("You can also access colors, images, and numbers as SCSS variables:")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$myColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Image")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$imgSrc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Number")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And can access any mod field in JavaScript through "),s("code",[t._v("mod.data")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Non-repeat fields")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imgSrc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Repeat fields available as mod.data.items")]),t._v("\nmod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("See more examples for building mods with:")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/examples/react.html"}},[t._v("React")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/vue.html"}},[t._v("Vue")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/es6.html"}},[t._v("ES6")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/scss.html"}},[t._v("SCSS")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/handlebars.html"}},[t._v("Handlebars")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/jsx.html"}},[t._v("JSX")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/examples/typescript.html"}},[t._v("TypeScript")])],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);