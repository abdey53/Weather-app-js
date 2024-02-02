// const url = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=4585298850e45b04cdf619438b153579"

const apikey ="4585298850e45b04cdf619438b153579"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".wheather_icon")


async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${apikey}`)
    let data = await response.json()

 console.log(data)

 document.querySelector('.city').innerHTML = data.name;
 document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + '°C';
 document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
 document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' Km/h'

 if(data.weather[0].main == "Clouds"){
weatherIcon.src = 'clouds.png'
 }
 else if(data.weather[0].main == "Clear"){
    weatherIcon.src = 'clear.png'
 }
 else if(data.weather[0].main == "Rain"){
    weatherIcon.src = 'rain.png'
 }
 else if(data.weather[0].main == "Drizzel"){
    weatherIcon.src = 'drizzel.png'
 }
 else if(data.weather[0].main == "Mist"){
    weatherIcon.src = 'mist.png'
 }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)

} )

