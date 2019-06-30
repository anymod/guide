(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{300:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("In this example, we'll add an external script to a mod.")]),t._v(" "),s("h3",{attrs:{id:"_1-start-with-a-blank-mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-with-a-blank-mod","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Start with a blank mod")]),t._v(" "),s("p",[t._v("Create or clone a "),s("a",{attrs:{href:"https://anymod.com/mod/llaba",target:"_blank",rel:"noopener noreferrer"}},[t._v("blank mod"),s("OutboundLink")],1),t._v(" to get started.")]),t._v(" "),s("h3",{attrs:{id:"_2-add-some-javascript-that-relies-on-an-external-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-some-javascript-that-relies-on-an-external-library","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Add some JavaScript that relies on an external library")]),t._v(" "),s("p",[t._v("Let's add a Google Charts "),s("a",{attrs:{href:"https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pie Chart"),s("OutboundLink")],1),t._v(" to our mod -- doing so will require that we add the script for this library. Add the following to your mod's JavaScript:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'packages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'corechart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngoogle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnLoadCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("drawChart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawChart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visualization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("arrayToDataTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hours per Day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Work'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Eat'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Commute'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Watch TV'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sleep'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Daily Activities'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("google"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visualization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PieChart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Without the external library, the console will throw an error and nothing shows because "),s("code",[t._v("google")]),t._v(" is not defined.")]),t._v(" "),s("h3",{attrs:{id:"_3-add-an-external-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-an-external-script","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Add an external script")]),t._v(" "),s("p",[t._v("Click the gear (cog) in the header of the JS panel to open the mod's JavaScript settings.  From there, you can either choose a script from the dropdown menu or paste a URL to other scripts.")]),t._v(" "),s("p",[t._v("Paste the URL for the Google Charts script: "),s("code",[t._v("https://www.gstatic.com/charts/loader.js")])]),t._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534813793/script-01_ear7dg.png"}}),t._v(" "),s("p",[t._v("Now when our mod runs, the JavaScript will function properly, and we get a nice Pie Chart:")]),t._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534814117/script-02_wi7svt.png"}}),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("See the mod from this example "),s("a",{attrs:{href:"https://anymod.com/mod/oorna",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_4-add-script-tags-to-your-page-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-add-script-tags-to-your-page-optional","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Add script tags to your page (optional)")]),t._v(" "),s("p",[t._v("Your mod will automatically load any external scripts when you've added the mod tag to your page.")]),t._v(" "),s("p",[t._v("However, for improved performance, it is best to also add any external script tags to your page as described in "),s("router-link",{attrs:{to:"/examples/optimize-assets.html"}},[t._v("Optimizing CSS & JS assets")]),t._v(".")],1)])},[],!1,null,null,null);a.default=e.exports}}]);