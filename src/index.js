function displayTemperature (response) {
    console.log(response.data)
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].main;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = response.data.wind;

}

let apiKey = "005492bbca20a72f226defd2b2fda6d2"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=London&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);