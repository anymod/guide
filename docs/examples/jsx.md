---
title: Use JSX
lang: en-US
---

In this example, we'll use React JSX syntax in a mod.

### 1. Set your mod to React JSX mode

Select React JSX from the JS panel dropdown:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/jsx-1-compile-method.png">

::: tip
It's a good idea to also set the HTML panel to **Plain** instead of **Handlebars** whenever using JSX or HTML that has curly braces (`{}`).
:::

### 2. Add React and ReactDOM scripts

Click the JS Assets tab. From the dropdown menu, click **React** to add it first, followed by **React DOM** second.

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/jsx-2-add-react.png">

::: tip
If you're using a bundle build of React, you can add the URL to your bundle instead of the React & ReactDOM scripts used here.
:::

### 3. Add some JSX

Add the JSX below to your mod.  A few features of React JSX highlighted here are:

- Lines 12 & 14: Return HTML elements directly. In line 12, call a function inside of curly braces (`{formatName(user)}`) and insert the result into the element.
- Line 17: Define an element by calling a function with different inputs.
- Line 24: Render the `element` variable into the DOM, located at the mod element (`mod.el`).

```jsx{12,14,17-22,24}
const user = {
  firstName: 'Juliet',
  lastName: 'Capulet'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
  if (user) {
    return <p>Hello, {formatName(user)}!</p>
  }
  return <p>Hello, Stranger.</p>
}

const element = (
  <div>
    {getGreeting(user)}
    {getGreeting()}
  </div>
)

ReactDOM.render(element, mod.el)
```

### 4. Result

Saving the mod will reload its preview, which should look like:

<div>
  <p>Hello, Juliet Capulet!</p>
  <p>Hello, Stranger.</p>
</div>

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/jsx-4-result.png">

The above JSX is pre-compiled into "regular" ES5 JavaScript as shown below, and this JavaScript is what ultimately runs in the browser when the mod is loaded:

```js
"use strict";
var user = {
  firstName: "Juliet",
  lastName: "Capulet"
};

function formatName(user) {
  return user.firstName + " " + user.lastName
}

function getGreeting(user) {
  if (user) {
    return React.createElement("p", null, "Hello, ", formatName(user), "!")
  }
  return React.createElement("p", null, "Hello, Stranger.")
}

var element = React.createElement("div", null, getGreeting(user), getGreeting());

ReactDOM.render(element, mod.el);
```

In this way, you can use React JSX in mods while still maintaining backwards compatibility with older browsers.