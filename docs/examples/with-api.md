---
title: Use with an API
lang: en-US
---

In this example, we'll use a mod to get and display data from an API endpoint.

### 1. Sample endpoint

Let's say you have an endpoint that returns data about some photos:

`GET https://jsonplaceholder.typicode.com/albums/1/photos?albumId=1`

```js
[
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    ...
  }
]
```

### 2. Making an API call from a mod

We can use [Axios](https://github.com/axios/axios) to make an API call from a mod.

Starting with a blank mod, add Axios to the JS assets so that it's available for use:

![Axios](https://res.cloudinary.com/component/image/upload/v1571105642/guide/api-1.png)

Now in the mod's JS panel, we can make an API call and log the data:

```js
axios
  .get("https://jsonplaceholder.typicode.com/albums/1/photos?albumId=1")
  .then(function(res) {
    console.log(res.data);
  });
```

### 3. Adding the data to the mod's HTML

We can use plain JS or a framework like [React](/examples/react.html) or [Vue](/examples/vue.html) to display the data we receive.

In this example we'll create an `addImage` function to add a basic image element for each entry:

```js
// Add an image element to the mod
function addImage(url) {
  const img = document.createElement("img");
  img.src = url;
  mod.el.appendChild(img);
}

// Fetch the data from the API
axios
  .get("https://jsonplaceholder.typicode.com/albums/1/photos?albumId=1")
  .then(function(res) {
    // Run the addImage function for every data point returned
    res.data.map(function(album) {
      addImage(album.thumbnailUrl);
    });
  });
```

### 4. Live example

Here is a live example with the above code: [API example](https://anymod.com/mod/mod-orklbn?preview=true).

And the live example added to this page:

<!-- API example -->
<div id="anymod-orklbn"></div>
