(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{208:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("With this approach, we can have high-resolution when needed but also have fast page loads on mobile devices.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("img",{attrs:{src:"https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534900634/image-manipulation-01_agnlns.png"}}),t._v(" "),t._m(4),t._v(" "),a("img",{attrs:{src:"https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534902407/right-size-02_bsc6ez.png"}}),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("First, let's add a rule to the mod's CSS panel so that our image will never exceed the width of the screen:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("Next, in the mod's JS panel, add the code below, which does the following:")]),t._v(" "),a("ul",[a("li",[t._v("Line 1: Use the built in "),a("code",[t._v("Anymod.buildImage")]),t._v(" method ("),a("router-link",{attrs:{to:"/guide/global-methods.html#anymod-buildimage"}},[t._v("docs")]),t._v(") to manipulate the image, which is available as "),a("code",[t._v("mod.data.myImage")])],1),t._v(" "),t._m(8),t._v(" "),a("li",[t._v("Lines 6-8: Insert the image into the mod")])]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("The final result is an image that is a different size based on the width of the browser window.")]),t._v(" "),a("p",[t._v("If the window is 1200px wide, the image will be 1300px wide. If the window is 420px wide, the image will be 500px wide, and so on.")]),t._v(" "),a("img",{attrs:{src:"https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534905485/right-size-03_ilqabw.png"}})])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In this example, we'll use Anymod's built in "),s("code",[this._v("buildImage")]),this._v(" method to always size an image to match the width of a visitor's browser window.  This means large screens will see a high-resolution image, while smaller screens will see a scaled-down version of the same image.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-add-an-image-to-your-mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-an-image-to-your-mod","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Add an image to your mod")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Click "),s("strong",[this._v("Settings")]),this._v(" at the top of the page, then visit the "),s("strong",[this._v("Fields")]),this._v(" tab.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Add a field called "),s("code",[this._v("myImage")]),this._v(" to your mod with type "),s("strong",[this._v("Image")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now click on the "),s("code",[this._v("myImage")]),this._v(" link and upload an image:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-scaling-the-image-based-on-screen-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-scaling-the-image-based-on-screen-size","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Scaling the image based on screen size")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Any rules defined in the mod's CSS panel will apply only to the mod and not to other elements on a web page. In this case, the only "),s("code",[this._v("img")]),this._v(" element affected will be the one in this mod.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Line 2: Set the width of the image to "),s("code",[this._v("window.innerWidth - (window.innerWidth % 100) + 100")]),this._v(", which is always just a little bit wider than the current window size")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" resizedImage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Anymod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("buildImage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myImage"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  w"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  c"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'limit'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'img'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'src'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resizedImage"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmod"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-result","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Result")])}],!1,null,null,null);n.options.__file="right-size-image.md";s.default=n.exports}}]);