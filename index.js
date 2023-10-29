async function checkWeather(city){
  var response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=914cd4190a0cdd48e9112eb8afdbf306&units=metric&q=" + city);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
    if(data.weather[0].main == "Clouds"){
    document.querySelector(".weather-icon").src = "images/clouds.png";
    }
   else if(data.weather[0].main == "Clear"){
    document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
    document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
    document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
    document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
    document.querySelector(".weather-icon").src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  
}
document.querySelector(".search button").addEventListener("click", ()=>{
  checkWeather(document.querySelector(".search input").value);
})
checkWeather();