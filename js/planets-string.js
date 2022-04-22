(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    let str = planetsArray.join("<br>")
    let arr = str.split("<br>")
    let newStr = arr.join("<br> <br>")
    let newArr = newStr.split(" ")
    newArr.push("<br>")
    newArr.unshift("<br>")
    let final = newArr.join("")
    console.log(final)


     /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */




    // let newStr = planetsArray;
    // newStr.push("<ul>")
    // newStr.unshift("<ul>")
    // let final = newStr.join("<li>")
    // console.log(final)


})();
