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
    console.log('<br> Tags: ')

    // Joining elements in an array to make string with <br> in between words
    let newStr = planetsArray.join("<br> <br>")
    // Splitting the string with a whitespace separator, making into an array
    let newArr = newStr.split(" ")
    // Pushing and un-shifting a <br> to front and end of array
    newArr.push("<br>")
    newArr.unshift("<br>")
    // Final result
    let final = newArr.join("")
    console.log(final)
    console.log(' \n ')



    /*
    * BONUS:
    * Create another string that would display your planets in an unordered
    * list. You will need an opening AND closing <ul> tags around the entire
    * string, and <li> tags around each planet.
    */
    console.log('Unordered List: ')

    let oldStr = planetsArray.join("</li> <li>")
    let oldArr = oldStr.split(" ")
    oldArr.push('</li></ul>')
    oldArr.unshift('<ul><li>')
    let finalResult = oldArr.join("")
    console.log(finalResult)




})();
