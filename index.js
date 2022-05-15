// https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=cf44a14e239216b0200052622225ded4

const Weather = {

    apiKey: 'cf44a14e239216b0200052622225ded4',
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.displayWeather(data)
        })
    },
    displayWeather: function (data) {
        const {name} = data;
        const {temp, humidity} = data.main;
        const {icon} = data.weather[0];
        const {speed} = data.wind;

        document.getElementById('temp').innerText = `Temp:${temp}°`;
        document.getElementById('weather-header').innerText = `The weather for ${name}`;
        document.getElementById('humidity').innerText = ` Humidity:${humidity}%`;
        document.getElementById('wind').innerText = `The wind speed is: ${speed}mph`;
        document.getElementById('img').src = "http://openweathermap.org/img/wn/" + icon + "10d@2x.png";
        document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + name +"')";

    },
        userInput: function() {
            this.fetchWeather(document.querySelector(".search-input").value);
        }

}

    

document.getElementById('search-button').addEventListener('click', function () {
    Weather.userInput();
})

