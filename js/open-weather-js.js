"use strict";

const URL = 'https://api.openweathermap.org/data/2.5/onecall'

let currentDay = new Date()
let currentCity = "San Antonio, US";


geocode(currentCity, MAPBOX_API_KEY).then(function (results) {
    $.get(URL, {
        APPID: OPEN_WEATHER_API_KEY,
        lat: results[1],
        lon: results[0],
        units: 'imperial'
    }).done(function (results){
        // Current Day Data - Day 1
        $('#date1').html(currentDay.toLocaleDateString())
        $('#temp1').html((results.current.temp + "&#8457;") + "/" + ((results.current.temp - 32) * 5/9).toFixed(2) + "&#8451;")
        $('#icon1').css("background-image", "url('http://openweathermap.org/img/w/" + results.current.weather[0].icon + ".png')")
        $('#description1').html("Description: " + results.current.weather[0].description + '<br>')
        $('#humidity1').html("Humidity: " + results.current.humidity + '<br>')
        $('#wind1').html('Wind: ' + results.current.wind_speed + '<br>')
        $('#pressure1').html('Pressure: ' + results.current.pressure)
        console.log(results)
        // Following Day Data - Day 2
        let day2 = new Date(currentDay.setDate(currentDay.getDate() + 1))
        $('#date2').html(day2.toLocaleDateString())
        $('#temp2').html((results.daily[0].temp.day + "&#8457;") + "/" + ((results.daily[0].temp.day - 32) * 5/9).toFixed(2) + "&#8451;")
        $('#icon2').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
        $('#description2').html("Description: " + results.daily[0].weather[0].description + '<br>')
        $('#humidity2').html("Humidity: " + results.daily[0].humidity + '<br>')
        $('#wind2').html('Wind: ' + results.daily[0].wind_speed + '<br>')
        $('#pressure2').html('Pressure: ' + results.daily[0].pressure)
        // Following Day Data - Day 3
        let day3 = new Date(currentDay.setDate(currentDay.getDate() + 1))
        $('#date3').html(day3.toLocaleDateString())
        $('#temp3').html((results.daily[1].temp.day + "&#8457;") + "/" + ((results.daily[1].temp.day - 32) * 5/9).toFixed(2) + "&#8451;")
        $('#icon3').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')")
        $('#description3').html("Description: " + results.daily[1].weather[0].description + '<br>')
        $('#humidity3').html("Humidity: " + results.daily[1].humidity + '<br>')
        $('#wind3').html('Wind: ' + results.daily[1].wind_speed + '<br>')
        $('#pressure3').html('Pressure: ' + results.daily[1].pressure)
        // Following Day Data - Day 4
        let day4 = new Date(currentDay.setDate(currentDay.getDate() + 1))
        $('#date4').html(day4.toLocaleDateString())
        $('#temp4').html((results.daily[2].temp.day + "&#8457;") + "/" + ((results.daily[2].temp.day - 32) * 5/9).toFixed(2) + "&#8451;")
        $('#icon4').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')")
        $('#description4').html("Description: " + results.daily[2].weather[0].description + '<br>')
        $('#humidity4').html("Humidity: " + results.daily[2].humidity + '<br>')
        $('#wind4').html('Wind: ' + results.daily[2].wind_speed + '<br>')
        $('#pressure4').html('Pressure: ' + results.daily[2].pressure)
        // Following Day Data - Day 5
        let day5 = new Date(currentDay.setDate(currentDay.getDate() + 1))
        $('#date5').html(day5.toLocaleDateString())
        $('#temp5').html((results.daily[3].temp.day + "&#8457;") + "/" + ((results.daily[3].temp.day - 32) * 5/9).toFixed(2) + "&#8451;")
        $('#icon5').css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')")
        $('#description5').html("Description: " + results.daily[3].weather[0].description + '<br>')
        $('#humidity5').html("Humidity: " + results.daily[3].humidity + '<br>')
        $('#wind5').html('Wind: ' + results.daily[3].wind_speed + '<br>')
        $('#pressure5').html('Pressure: ' + results.daily[3].pressure)

    })
})


