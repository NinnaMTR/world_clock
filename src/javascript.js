function updateTime() {
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");

  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");

    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");

  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //New York
  let newYorkElement = document.querySelector("#new-york");

  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");

    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone == "current") {
    cityTimezone = moment.tz.guess();
  }
  if (cityTimezone == "Europe/Lisbon") {
    cityEmoji = "🇵🇹";
  }
  if (cityTimezone == "Europe/Paris") {
    cityEmoji = "🇫🇷";
  }
  if (cityTimezone == "America/New_York") {
    cityEmoji = "🇺🇸";
  }
  if (cityTimezone == "Africa/Cairo") {
    cityEmoji = "🇪🇬";
  }
  if (cityTimezone == "Australia/Sydney") {
    cityEmoji = "🇦🇺";
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityEmoji} ${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">Back to all Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
