---
title: Forms
lang: en-US
---

# Forms

## How it works

AnyMod has everything you need to add forms without your own server-side code.

You can collect form responses in the AnyMod dashboard or send the responses anywhere you choose, like MailChimp or another external service.

## From the library

AnyMod has dozens of forms to choose from ([see forms](https://anymod.com/mods?tag=forms)). These forms will work automatically, unless they specifically mention using with an external service like MailChimp.

To add a form, choose from the library and click the "Clone" button in the top corner:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/forms-from-library.png">

Next follow the instructions on the bottom of the page:

<img src="https://res.cloudinary.com/component/image/upload/v1562704535/guide/forms-from-library-add.png">

Adding the AnyMod script and the mod tag to your page will cause the form to appear:

```html
<!-- Contact form -->
<div id="anymod-mkbar"></div>
```

<!-- Elegant contact form Form-01 -->
<mod mod-key="dmamn"/>

::: tip
This is a live contact form. Responses go to a project dashboard as described below.
:::

## Built-in responses

When a visitor submits one of your forms, their response shows in your dashboard automatically, and by default you also receive an email notifying you of the form response. You also have the option to download a CSV or Excel document containing your responses.

<img src="https://res.cloudinary.com/component/image/upload/v1538094951/form-03_qnjbou.png">

## External services

You can connect your mod forms with any external service you want, so that your form data is submitted to that service.

For MailChimp subscription forms, you can use one of the ready-to-use mods like [this one](https://anymod.com/mod/rdddb)

```html
<!-- MailChimp signup section -->
<div id="anymod-rdddb"></div>
```

<mod mod-key="mkbkd"/>

::: warning
This form does not work out of the box because it requires a MailChimp API key.
:::

To learn more about building custom forms to interact with external services, see the [Axios](/examples/axios.html), [MailChimp](/examples/mailchimp.html), and [reCAPTCHA](/examples/recaptcha.html) examples.
