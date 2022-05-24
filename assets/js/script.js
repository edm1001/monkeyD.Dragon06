//target each daily cards with today using moment.js
const pastCities = document.querySelector(".past-cities");
const currentDayCard= document.querySelector(".current-day");
const day2Date = moment().add(1, 'days').format("M/D/YYYY");
const day3Date = moment().add(2, 'days').format("M/D/YYYY");
const day4Date = moment().add(3, 'days').format("M/D/YYYY");
const day5Date = moment().add(4, 'days').format("M/D/YYYY");
const day6Date = moment().add(5, 'days').format("M/D/YYYY");
//fetch the weather api
    const apiKey= "dce5d28ccff68490b18409707d7485f1";

//get past cities that were searched in storage
const citiesList = localStorage.getItem('searchedCity');

//search button function
$('#search-btn').click(function(){
    var searchCity = $("search-city").val("");

    citiesList.push(searchCity)
    sessionStorage.setItem('searchedCity', citiesList)

//save past cities that were searched
    var savePastCity = document.querySelector('.past-weather-cards')
    for (var i = 0; i < citiesList.length; i++) {
        pastCities.textContent = citiesList[i]
    pastCities.appendChild(savePastCity);
    };

    var searchedCity = sessionStorage.getItem('searchedCity')


    var currentWeather = function(cityName) {
        // get and use data from open weather current weather api end point
        fetch(`https://api.openweathermap.org/data/3.0/weather?q=${cityName}&appid=${apiKey}`)
            // get response and turn it into objects
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                const cityLon = response.coord.lon;
                const cityLat = response.coord.lat;
            })
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`)
                    // get response from one call api and turn it into objects
            .then(function(response) {
                 return response.json();
            })
                // get data from response and apply them to the current weather section
                .then(function(response){
                searchedCity(cityName);
                    })
                };
                var currentTitle = $("#current-title");
                const currentDate = moment().format("M/D/YYYY");
                currentTitle.text(`${cityName} (${currentDate})`);
                var weatherIconCode = response.current.weather[0].icon;
                currentIcon.attr("src", `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`);

                // add current temperature to page
                var currentTemperature = $("#current-temperature");
                currentTemperature.text("Temperature: " + response.current.temp + " \u00B0F");    
                
        //append Current day stats for the location
        var cityNameSection = document.querySelector('.weather-card');
        cityNameSection.textContent = searchCity + "("+ currentDate +")";
        currentDayCard.appendChild(cityNameSection);
        //append the temperature using api
        var currentCityTemp = document.querySelector('#temp');
        currentCityTemp.innerHTML = "Temp:" +data.current.temp;
        //append wind
        var currentCityWind = document.querySelector('#wind');
        currentCityWind.innerHTML = "Wind:" + data.current.wind_speed + "MPH";
        //append humidity
        var currentCityHumidity = document.querySelector('#humidity')
        currentCityHumidity.innerHTML = "Humidity:" + data.current.humidity + "%";
  //append the 5 day forecast
  //target the cards using document query
//day 2 card
var day2Card = document.querySelector("day2")
day2Card.innerHTML = day2Date;
day2Date.appendChild(day2Card);
//add an icon from weather api
var day2Icon = document.querySelector("day2")
var day2IconAPI = data.daily[1].weather[0].icon
day2IconAPI.src = "http://openweathermap.org/img/w/" + day2Icon + ".png";
day2Icon.document.createElement("p");
day2Date.appendChild(day2Icon);
//add a temp
var day2Temp = document.querySelector("day2")
 day2Temp.document.createElement('p');
day2Temp.innerHTML = "Temp: " + data.daily[1].temp.day;
day2Date.appendChild(day2Temp);
//add wind
var day2Wind =document.querySelector("day2")
day2Wind.document.createElement('p');
day2Wind.innerHTML = "Wind: " + data.daily[1].wind_speed + " MPH";
day2Date.appendChild(day2Wind);
//add humidity
var day2Humidity = document.querySelector("day2")
var day2Humidity = document.createElement('p');
day2Humidity.innerHTML = "Humidity: " + data.daily[1].humidity + "%";
day2Date.appendChild(day2Humidity);


//day 3 card
var day3Card = document.querySelector("day3")
day3Card.innerHTML = day3Date;
day3Date.appendChild(day3Card);
//add an icon from weather api
var day3Icon = document.querySelector("day3")
var day3IconAPI = data.daily[2].weather[0].icon
day3IconAPI.src = "http://openweathermap.org/img/w/" + day3Icon + ".png";
day3Icon.document.createElement("p");
day3Date.appendChild(day2Icon);
//add a temp
var day3Temp = document.querySelector("day3")
 day3Temp.document.createElement('p');
day3Temp.innerHTML = "Temp: " + data.daily[2].temp.day;
day3Date.appendChild(day3Temp);
//add wind
var day3Wind =document.querySelector("day3")
day3Wind.document.createElement('p');
day3Wind.innerHTML = "Wind: " + data.daily[2].wind_speed + " MPH";
day3Date.appendChild(day3Wind);
//add humidity
var day3Humidity = document.querySelector("day3")
var day3Humidity = document.createElement('p');
day3Humidity.innerHTML = "Humidity: " + data.daily[2].humidity + "%";
day3Date.appendChild(day3Humidity);

//day4
var day4Card = document.querySelector("day4")
day4Card.innerHTML = day4Date;
day4Date.appendChild(day4Card);
//add an icon from weather api
var day4Icon = document.querySelector("day4")
var day4IconAPI = data.daily[3].weather[0].icon
day4IconAPI.src = "http://openweathermap.org/img/w/" + day4Icon + ".png";
day4Icon.document.createElement("p");
day4Date.appendChild(day2Icon);
//add a temp
var day4Temp = document.querySelector("day4")
 day4Temp.document.createElement('p');
day4Temp.innerHTML = "Temp: " + data.daily[3].temp.day;
day4Date.appendChild(day4Temp);
//add wind
var day4Wind =document.querySelector("day4")
day4Wind.document.createElement('p');
day4Wind.innerHTML = "Wind: " + data.daily[3].wind_speed + " MPH";
day4Date.appendChild(day4Wind);
//add humidity
var day3Humidity = document.querySelector("day4")
var day4Humidity = document.createElement('p');
day4Humidity.innerHTML = "Humidity: " + data.daily[3].humidity + "%";
day4Date.appendChild(day4Humidity);

//day5
var day5Card = document.querySelector("day5")
day5Card.innerHTML = day5Date;
day5Date.appendChild(day5Card);
//add an icon from weather api
var day5Icon = document.querySelector("day5")
var day5IconAPI = data.daily[4].weather[0].icon
day5IconAPI.src = "http://openweathermap.org/img/w/" + day5Icon + ".png";
day5Icon.document.createElement("p");
day5Date.appendChild(day5Icon);
//add a temp
var day5Temp = document.querySelector("day5")
 day5Temp.document.createElement('p');
day5Temp.innerHTML = "Temp: " + data.daily[4].temp.day;
day5Date.appendChild(day5Temp);
//add wind
var day5Wind =document.querySelector("day5")
day5Wind.document.createElement('p');
day5Wind.innerHTML = "Wind: " + data.daily[4].wind_speed + " MPH";
day5Date.appendChild(day5Wind);
//add humidity
var day5Humidity = document.querySelector("day5")
var day5Humidity = document.createElement('p');
day5Humidity.innerHTML = "Humidity: " + data.daily[4].humidity + "%";
day5Date.appendChild(day5Humidity);


//day6
var day6Card = document.querySelector("day6")
day6Card.innerHTML = day6Date;
day6Date.appendChild(day6Card);
//add an icon from weather api
var day6Icon = document.querySelector("day6")
var day6IconAPI = data.daily[5].weather[0].icon
day6IconAPI.src = "http://openweathermap.org/img/w/" + day6Icon + ".png";
day6Icon.document.createElement("p");
day6Date.appendChild(day6Icon);
//add a temp
var day6Temp = document.querySelector("day6")
 day6Temp.document.createElement('p');
day6Temp.innerHTML = "Temp: " + data.daily[5].temp.day;
day6Date.appendChild(day6Temp);
//add wind
var day6Wind =document.querySelector("day6")
day6Wind.document.createElement('p');
day6Wind.innerHTML = "Wind: " + data.daily[5].wind_speed + " MPH";
day6Date.appendChild(day6Wind);
//add humidity
var day6Humidity = document.querySelector("day6")
var day6Humidity = document.createElement('p');
day6Humidity.innerHTML = "Humidity: " + data.daily[5].humidity + "%";
day6Date.appendChild(day6Humidity);

  
});


//use openweather app to use the date info
//apikey:  dce5d28ccff68490b18409707d7485f1
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={Dallas}&appid={dce5d28ccff68490b18409707d7485f1}



