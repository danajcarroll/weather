// Input Section
let button = document.querySelector('.button');
let cityInput = document.querySelector('.inputValue');
// Location Section
let cityDisplay = document.querySelector('.cityName');
let time = document.querySelector('.time');
let date = document.querySelector('.locationDate');
// Weather Section
let weatherIcon = document.querySelector('.icon');
let temperature = document.querySelector('.temperature');
let feelsLike = document.querySelector('.feelsLike');
// Other Section
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let tempMin = document.querySelector('.minTemp');
let tempMax = document.querySelector('.maxTemp');


// url = `api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=79a719416f7e8a2440cab69493382aa8`;

button.addEventListener('click', function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=79a719416f7e8a2440cab69493382aa8&units=metric`)
        .then(response => response.json())
        .then(data => {
            let city = data['name'];
            let temp = data['main']['temp'];
            let humidityValue = data['main']['humidity'];
            let pressureValue = data['main']['pressure'];
            let minTempValue = data['main']['temp_min'];
            let maxTempValue = data['main']['temp_max'];

            let iconCode = data['weather']['0']['icon'];
            let iconURL = `http://openweathermap.org/img/w/${iconCode}${'.png'}`;
            console.log(iconURL);

            cityDisplay.innerHTML = city;
            weatherIcon.src = iconURL;
            temperature.innerHTML = temp;
            humidity.innerHTML = humidityValue;
            pressure.innerHTML = pressureValue;
            tempMin.innerHTML = minTempValue;
            tempMax.innerHTML = maxTempValue;
        })
        // .catch(err => alert('Wrong city name!'))

})