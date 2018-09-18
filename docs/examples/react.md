---
title: Build a mod with React
lang: en-US
---

In this example, we'll build a simple mod with React.

::: tip
There is a [React mod](https://anymod.com/mod/bknkn) that you can clone to start quickly. This example shows how to build up this React mod from scratch.
:::

### 1. Start with a blank mod

Create or clone a [blank mod](https://anymod.com/mod/llaba) to get started.

### 2. Set the mod's JavaScript to React JSX

In the dropdown for the JavaScript panel, select **React JSX**

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534862351/js-01_zggtos.png">

::: tip
It's a good idea to also set the HTML panel to **Plain** instead of **Handlebars** whenever using JSX or HTML that has curly braces (`{}`).
:::

### 3. Add React and ReactDOM scripts

Click the settings gear in the JavaScript panel. From the dropdown menu, click **React** to add it first, followed by **React DOM** second.

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534464273/react-02_s1aakp.png">

::: tip
If you're using a bundle build of React, you can add the URL to your bundle instead of the React & ReactDOM scripts used here.
:::

### 4. Add a field called `message`

Click the **Fields** tab in the settings window, and add a field called `message` with type set to **Simple text**

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534464879/react-03a_ojthj1.png">

Click **Add field** and then click on the link for the `message` field. Add some text and click **Publish**.

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534464878/react-03b_hszpkl.png">

### 5. Write your React mod with JSX

Now you're ready to build with JSX. Add the following code to the mod's JSX panel:

```jsx
const element = (
  <div>
    <h1>{mod.data.message}</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)

ReactDOM.render(element, mod.el)
```

::: tip
Our `message` field is available in the JSX panel as `mod.data.message` (line 3).

The mod's DOM element itself is available as `mod.el` (line 8). In this example, we are rendering our custom `element` in place of the mod's HTML.
:::

### 6. Style your mod

You can still style your mod as usual.  Add the following to the CSS panel:

```css
h1 {
  color: blue;
}
```

### 7. Save your mod

When you click **Save**, your mod is automatically pre-compiled and displayed. It should look like the example below:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534464273/react-03_vdgv2a.png">

Now you're ready to build any kind of mod you want using React.
