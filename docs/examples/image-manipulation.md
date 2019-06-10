---
title: Image manipulation
lang: en-US
---

In this example, we'll use AnyMod's built in `buildImage` method to manipulate an uploaded image.

### 1. Add an image to your mod

Click **Settings** at the top of the page, then visit the **Fields** tab.

Add a field called `myImage` to your mod with type **Image**:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534900634/image-manipulation-01_agnlns.png">

Now click on the `myImage` link and upload an image:

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534901106/image-manipulation-02_olaxx8.png">

### 2. Manipulating the image

In the mod's JS panel, we can access our image with `mod.data.myImage`.

Similarly, we can use AnyMod's built in `buildImage` method to manipulate the image in different ways:

```js{2-5}
var imageVersions = [
  Anymod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'scale' }),
  Anymod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'fill' }),
  Anymod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'crop' }),
  Anymod.buildImage(mod.data.myImage, { w: 180, h: 300, c: 'crop', g: 'face' })
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

<img src="https://res.cloudinary.com/component/image/upload/c_scale,w_1200/v1534901783/image-manipulation-03_vgrd8c.png">

::: tip
Refer to the guide section on [buildImage](/guide/global-methods.html#anymod-buildimage) for more options.
:::