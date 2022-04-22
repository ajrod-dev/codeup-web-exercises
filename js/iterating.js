(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let fourNames = ['Alex', 'Michelle', 'Bill', 'Gabriela'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(fourNames.length);
    console.log("\n")
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(fourNames[0])
    console.log(fourNames[1])
    console.log(fourNames[2])
    console.log(fourNames[3])
    console.log("\n")
    /*
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < fourNames.length; i++){
        console.log(fourNames[i])
    }
    console.log("\n")

    /*
       TODO:
       Use a for..of loop
     */
    for(let name of fourNames){
        console.log(name)
    }
    console.log("\n")



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    fourNames.forEach(function (name){
        console.log(name);
    })

    console.log("\n")
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(param){
        return param[0];
    }

    function second(param){
        return param[1];
    }

    function third(param){
        return param[param.length - 1];
    }

    console.log(first(fourNames));
    console.log(second(fourNames));
    console.log(third(fourNames));
    console.log("\n")


})();
