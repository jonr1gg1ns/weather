console.log("JS IS WORKING")
const apikey = "AZ5P5AQMWTBHZN7WYPYJMRNWZ";
const apiUrl= 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=metric&key=AZ5P5AQMWTBHZN7WYPYJMRNWZ&contentType=json'

function fetchWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apikey}&contentType=json`;
    fetch(url) 
    .then(response => response.json())
    .then(data => {
        const weatherInfo = {
            temp: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
            description: data.currentConditions.description,
            condition: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
            date: data.currentConditions.datetime,
            

        };
        const domTemp = document.getElementById("temperature");
        const domHumidity = document.getElementById("humidity");    
        const domWindSpeed = document.getElementById("wind-speed");
        const domCondition = document.getElementById("condition");
        const domIcon = document.getElementById("weather-icon");
        const domDate = document.getElementById("date");

        domTemp.textContent = `Temperature: ${weatherInfo.temp} °C`;
        domHumidity.textContent = `Humidity: ${weatherInfo.humidity} %`;    
        domWindSpeed.textContent = `Wind Speed: ${weatherInfo.windSpeed} km/h`;
        domCondition.textContent = `Condition: ${weatherInfo.condition}`;
        domDate.textContent = `Date: ${weatherInfo.date}`;


    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });   
}

const weatherButton = document.getElementById("get-weather-btn");
weatherButton.addEventListener("click", () => {
    const locationInput = document.getElementById("city-input").value;
    fetchWeatherData(locationInput);
});