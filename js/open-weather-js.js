"use strict";

const URL = 'https://api.openweathermap.org/data/2.5/onecall'



geocode("San Antonio, US", MAPBOX_API_KEY).then(function (results) {
    $.get(URL, {
        APPID: OPEN_WEATHER_API_KEY,
        lat: results[1],
        lon: results[0],
        units: 'imperial'
    }).done(function (results){
        console.log(results)
    })
})

