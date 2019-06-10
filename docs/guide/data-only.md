---
title: Data-only API
lang: en-US
---

# Data-only API

You can forego the AnyMod script and rendering framework entirely and use AnyMod as a data source instead. To do so, send a `GET` request with the appropriate parameters to the **/data** endpoint.

There are 2 types of requests:

- **Single mod request** for one mod returned as an `Object`
- **Multiple mod request** for one or more mods returned as an `Array`

::: tip
All requests should be made to the endpoint via **https://**
:::

## Single mod request

Request data for a single mod from your project.

- **Route**

  `GET` https://<span></span>api.anymod.com/v0/data/{ **projectId** }/mod/{ **key** }

- **Returns**

  `Object` (JSON)

- **Example**

  For mod `aklnr` in project `8PP6M2`

  `GET` [https://api.anymod.com/v0/data/8PP6M2/mod/aklnr](https://api.anymod.com/v0/data/8PP6M2/mod/aklnr)

  ```json
  {
    "key": "aklnr",
    "project": "8PP6M2",
    "data": {
      "image": "https://res.cloudinary.com/component/image/upload/v1493774012/gtoavu5nl7r8ucyew9aq.jpg",
      "title": "Simple card",
      "content": "<p>Curabitur gravida eget mi vel faucibus. Nulla euismod non mauris id molestie. Suspendisse potenti.</p>",
      "buttonText": "Call to action",
      "buttonLink": "#",
      "maxWidth": 318,
      "buttonType": "primary",
      "items": []
    }
  }
  ```

## Multiple mod request

Request data for one or more mods from your project.

- **Route**

  `GET` https://<span></span>api.anymod.com/v0/data/{ **projectId** }/mods/{ **key1,key2,key3** }

  **Note the "s" in /mods/**

  Here, the ids for each mod are separated by a comma (no space).

- **Returns**

  `Array` (JSON)

   Mod order is preserved in the response, even if there are duplicates or some mods keys are incorrect.

- **Example**

  For mods `aklnr` & `oorka` in project `8PP6M2`.

  `GET` [https://api.anymod.com/v0/data/8PP6M2/mods/aklnr,oorka](https://api.anymod.com/v0/data/8PP6M2/mods/aklnr,oorka)

  ```json
  [
    {
      "key": "aklnr",
      "project": "8PP6M2",
      "data": {
        "image": "https://res.cloudinary.com/component/image/upload/v1493774012/gtoavu5nl7r8ucyew9aq.jpg",
        "title": "Simple card",
        "content": "<p>Curabitur gravida eget mi vel faucibus. Nulla euismod non mauris id molestie. Suspendisse potenti.</p>",
        "buttonText": "Call to action",
        "buttonLink": "#",
        "maxWidth": 318,
        "buttonType": "primary",
        "items": [],
      },
    },{
      "key": "oorka",
      "project": "8PP6M2",
      "data": {
        "items": [],
        "username": "anymod",
        "repo": "guide",
        "type": "star",
        "showCount": true,
        "large": true
      }
    }
  ]
  ```

- **Example with duplicates and missing mods**

  If a mod key is duplicated in the request, it will be returned in the response in the same index locations. 
  
  If a mod is missing, it will be returned in the same index location with an empty `data` object and a property `notFound` set to `true`.

  In this example, we have duplicated the `oorka` mod, and the `foobar` mod does not exist:

  `GET` [https://api.anymod.com/v0/data/8PP6M2/mods/oorka,foobar,oorka](https://api.anymod.com/v0/data/8PP6M2/mods/oorka,abcde,oorka)

  ```json
  [
    {
      "key": "oorka",
      "project": "8PP6M2",
      "data": {
        "items": [],
        "username": "anymod",
        "repo": "guide",
        "type": "star",
        "showCount": true,
        "large": true
      },
    },{
      "key": "foobar",
      "project": "8PP6M2",
      "data": {},
      "notFound": true
    },{
      "key": "oorka",
      "project": "8PP6M2",
      "data": {
        "items": [],
        "username": "anymod",
        "repo": "guide",
        "type": "star",
        "showCount": true,
        "large": true
      }
    }
  ]
  ```