'use strict';

const Apikey = '8d24b5a2eaff095fc6c39e67c6a48637';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox = document.getElementById('input');
const searchBtn = document.getElementById('btn');
const weatherIcon = document.getElementById('weatherIcon');

async function CheckWeather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${Apikey}`);
    if (response.status == 404) {
        document.getElementById('error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json();
        console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'clouds.png';
        }
        if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'clear.png';
        }
        if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'rain.png';
        }
        if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'drizzle.png';
        }
        if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'mist.png';
        }
        document.querySelector('.weather').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    CheckWeather(searchBox.value);
});
