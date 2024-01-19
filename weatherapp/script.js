const apiKey = '4ce9faa17746796026dd2aafa4429dae'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weatherBgVideo = document.querySelector('.bg-video')
const weatherBgVideoSrc = document.querySelector('.bg-video source')

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + '<span style="font-size:16px;"> km/h</span>';
    
    weatherIcon.src = "images/" + (data.weather[0].main).toLowerCase()+'.png';
    var bg = "images/backgrounds/" + (data.weather[0].main).toLowerCase()+'.mp4';
    weatherBgVideoSrc.src = bg;

    weatherBgVideo.load()
    weatherBgVideo.play()
    
    document.querySelector('.weather').style.display = 'block'
    
}

searchBtn.addEventListener('click', ()=>{
    var cityInfo = searchBox.value;
    checkWeather(cityInfo);
});
