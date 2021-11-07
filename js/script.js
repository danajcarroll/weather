url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid={79a719416f7e8a2440cab69493382aa8}`;

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));