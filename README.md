# Mini-weather

![Screenshot](assets/meteoropolis.png)

[Click here for live demo](https://codebar.oliverturner.cloud/#HmieZw0YOC0)

This app blends data from [openweathermap.org](https://openweathermap.org/) and
[Unsplash](https://unsplash.com/developers) to create a visual depiction of the current weather in your area.

## Set-up

- Fork and clone the repo

- You will need to sign up for both services to get an API key to use each service.

  - **Open Weather** - sign up for API key at [https://openweathermap.org/appid](https://openweathermap.org/appid) and append it to URL as `APPID` URL url parameter. For example, `http://api.openweathermap.org/data/2.5/weather?q=london&APPID=ABC` where `ABC` is the API key you were provided.
  - **Unsplash** - sign up for Unsplash at [https://unsplash.com/join](https://unsplash.com/join) and register your app. You will receive an Access Key which you should append it to the URL as `client_id` URL param. For example, `https://api.unsplash.com/search/photos?query=snow&client_id=XYZ` where `XYZ` is your Access Key.

- The HTML and CSS have been supplied if you wish to focus on the programming and not the UI, but you should feel free to customise your application as you see fit. You can insert the main photo into the element with the id `photos` and thumbnails into the element with id `thumbs`.

## Objectives

- [ ] Use `fetch` to retrieve the weather for a single day. You can see the documentation at [https://openweathermap.org/current](https://openweathermap.org/current). For now, we'll set London or another location of your choice as the default.

- [ ] Once you've retrieved the weather data, use its `description` property to get matching images from Unsplash. You can see the documentation for image search at [https://unsplash.com/documentation#search-photos](https://unsplash.com/documentation#search-photos).

- [ ] Display the images as a gallery of clickable thumbnails (clicking loads the main image)

- [ ] Commit code regularly, push and create a pull request so we can see how you got on

## Stretch goals

- [ ] Add a feature of your choice

- [ ] Create an input field that lets us see what the weather is like in other cities

## Support

- If you are stuck for more than 20 minutes, ask us for help

- You may want to install the `JSONView` browser extension, which will format JSON data in the browser for you and make it easier to inspect the returned data.
