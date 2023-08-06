import citycall from "./city";

const myapi = "5d832dff490f41f88a9195303230208";
const weatherinformation = document.querySelector(".weatherinformation");
const namespan = document.querySelector("h1.cityname span.ocity");
const tempSpan = document.querySelector('h2.Temp span.otemp');
const feelsLikeSpan = document.querySelector('h3.Feelslike span.ofeel');
const humiditySpan = document.querySelector('h3.Humidity span.ohumi');
const windSpan = document.querySelector('h3.wind span.owind');

citycall();

async function apicall(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${myapi}&q=${city}&aqi=no`);
        const weather_data = await response.json();

        if (response.status === 400) {
            // Handle 400 error (Bad Request)
            alert("Bad Request: Invalid city or parameters.");
        } else {
            const name = weather_data.location["name"];
            const temp = weather_data.current["temp_c"];
            const feellike = weather_data.current["feelslike_c"];
            const humi = weather_data.current["humidity"];
            const windspeed = weather_data.current["wind_kph"];

            resetPreviousValues();
            namespan.textContent = `${name}`;
            tempSpan.textContent = `${temp}°C`;
            feelsLikeSpan.textContent = `${feellike}°C`;
            humiditySpan.textContent = `${humi} HA`;
            windSpan.textContent = `${windspeed} kmph`;
            weatherinformation.style.display = "block";
        }
    } catch (error) {
        alert("There's an error");
    }
}

const resetPreviousValues = () => {
    tempSpan.textContent = "";
    feelsLikeSpan.textContent = "";
    humiditySpan.textContent = "";
    windSpan.textContent = "";
};

export { apicall };
