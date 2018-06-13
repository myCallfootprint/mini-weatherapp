// setting the target item - form search
const button = document.querySelector("#search");
const photo = document.querySelector("#photo");
const thumbs = document.querySelector("#thumbs");

thumbs.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.matches("a.thumbs__link")) {
    photo.innerHTML = `<img src="${e.target.href}">`;
  }
});

// adding submit event listener to our target
button.addEventListener("submit", function(e) {
  //preventing default so that when submitting page doesn't refresh
  e.preventDefault();

  // creating a function that brings in the search query into our weather map api URL.
  function createURL() {
    const buttonInput = document.querySelector("#search-tf").value;

    return `http://api.openweathermap.org/data/2.5/weather?q=${buttonInput}&appid=9b04ce09d80b04cd7878e22af6dee14c`;
  }

  // fetch weather description from api
  function getWeatherDes() {
    return fetch(createURL())
      .then(function(response) {
        return response.json();
      })
      .then(function(myJSON) {
        return myJSON.weather[0].description;
      })
      .catch(function(error) {
        console.log("Oops error");
      });
  }
  //   creat another function to create URL for unsplash
  function unsplashURL() {
    thumbs.innerHTML = "";

    return getWeatherDes().then(function(weatherDes) {
      const picURL = `https://api.unsplash.com/search/photos?query=${weatherDes}&client_id=a6f56ab9923955bf32f1a926a91b817078e4d6ec9e5b6fa61b173e8ef799afde`;
      const makeThumb = item => {
        return `
          <a class="thumbs__link" href="${item.urls.regular}">
            <img class="thumbs__link__img" src=${item.urls.thumb}>
          </a>
      `;
      };

      fetch(picURL)
        .then(function(response) {
          return response.json();
        })
        .then(function({ results }) {
          // access JSONimg to capture the thumbnail URL source for each object
          thumbs.innerHTML = results.map(makeThumb).join("");
        });
    });
  }
  unsplashURL();
});
