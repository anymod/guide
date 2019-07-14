---
title: Image manipulation
lang: en-US
---

In this example, we'll use AnyMod's built in `buildImage` method to manipulate an uploaded image.

### 1. Add an image to your mod

Click the pencil icon at the top of the page, then visit the **Fields** tab.

Add a field called `myImage` to your mod with type **Image**:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/image-1a-add-field.png">

Now click on the `myImage` link and upload an image:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/image-1b-add-image.png">

### 2. Manipulating the image

In the mod's JS panel, we can access our image with `mod.data.myImage`.

Similarly, we can use AnyMod's built in `buildImage` method to manipulate the image in different ways:

```js{2-5}
var imageVersions = [
  AnyMod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'scale' }),
  AnyMod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'fill' }),
  AnyMod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'crop' }),
  AnyMod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'crop', g: 'face' })
]

imageVersions.map(function(image) {
  var img = document.createElement('img')
  img.setAttribute('src', image)
  mod.el.append(img)
})
```

Here we have manipulated the image 4 different ways:

1. **Scale** the image to 180&times;300px (line 2 above)
2. Adjust the image to **Fill** 180&times;300px (line 3)
3. **Crop** the image to 180&times;300px based on the center of the image (line 4)
4. **Crop** the image to 180&times;300px based on face detection (line 5)

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/examples/image-2-result.png">

::: tip
Refer to the guide section on [buildImage](/guide/global-methods.html#anymod-buildimage) for more options.
:::