"use strict";

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

const URL = 'https://api.openweathermap.org/data/2.5/onecall'



geocode("San Antonio, US", MAPBOX_API_KEY).then(function (results) {
    $.get(URL, {
        APPID: OPEN_WEATHER_API_KEY,
        lat: results[1],
        lon: results[0],
        units: 'imperial'
    }).done(function (results){
        $('#temp').html("Current Temperature: " + results.current.temp + "&#8457;")
        $('#description').html(capitalize(results.current.weather[0].description))
        $('#icon').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
        console.log(results)
    })
})

