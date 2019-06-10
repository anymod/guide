---
title: React project
lang: en-US
---

# Use AnyMod in a React project

## Setup

To use modules with [React](https://facebook.github.io/react/), add the mod tag via React's `render` and call `Anymod.render()` when the React component has mounted:

```js
class Demo extends React.Component {
  componentDidMount () {
    Anymod.render()
  }
  render () {
    // Card with top image
    return <div id="anymod-aklnr"></div>
  }
}
```
::: tip
React requires you to use quotation marks (`"`) for attributes.
:::

You can use `Anymod.render()` by itself or with a callback or promise. See the section on [Anymod.render](/guide/global-methods.html#anymod-render) for more.

## Example

<iframe width="100%" height="700" src="https://jsfiddle.net/component/v7z32a15/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod. However, React does require that its internal `render` function returns a single element. So to render multiple mods in a single React component, wrap them in a common element such as a `<div>`, like so:

```jsx
render () {
  return (
    <div>
      {/* Card with top image */}
      <div id="anymod-aklnr"></div>
      {/* GitHub button */}
      <div id="anymod-oorka"></div>
      {/* Team page */}
      <div id="anymod-dmkdn"></div>    
    </div>
  )
}
```

## Create React App

If you are using [Create React App](https://github.com/facebook/create-react-app) or another ESLint tool, you may encounter an error along the lines of `'Anymod' is not defined  no-undef`.  In this case, you should add the following to the top of any files using `Anymod.render()`:

`/* global Anymod */`

You can learn more about this solution [here](https://eslint.org/docs/rules/no-undef#rule-details).

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your React component (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

::: tip
See the section on [Anymod.render](/guide/global-methods.html#anymod-render) for more.
:::
