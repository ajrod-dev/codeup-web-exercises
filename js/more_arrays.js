"use strict";

(() => {

    /*
    Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
     */

    let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf(arr, val){
        let result = [];
        arr.forEach(function (el, index) {
            if(el === val){
                result.push(index)
            }
        })
        return result
    }

console.log(allIndexesOf(fruits, 'apple'));

    /*
    Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
     */
    let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

    function removeAll(arr, val){
        let search = (el) => el === val; // comparison operator if any elements match argument 2
        while(arr.findIndex(search) !== -1){ // If the index does not exist, it'll return -1
            arr.splice(arr.findIndex(search),1) // Splicing the element with each new iteration
        }
        return arr;
    }

    // Doesn't work, not sure why. It splices two elements of 'ant' , but not the third

    // function removeAll(arr, val) {
    //     arr.forEach(function (el) {
    //         if(el === val) {
    //             arr.splice(arr.indexOf(val), 1)
    //         }
    //     })
    //     return arr
    // }
    console.log(removeAll(bugs, "ant"));

    //  Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

    function randomIntBetween(min, max){
        return Math.floor(Math.random() * (max - min) + min);

    }
    console.log("Random integer generated: " + randomIntBetween(10,30))

    //  Make a function called coinFlip() that returns either 0 or 1, randomly

    function coinFlip(){
        return Math.round(Math.random());
    }
    console.log("Coin Flip: " + coinFlip())

    //  Make a function called twoDice() that returns the sum of rolling two six sided dice.
    function twoDice(){
        let dice1 = Math.floor(Math.random() * (7 - 1) + 1)
        let dice2 = Math.floor(Math.random() * (7 - 1) + 1)
        console.log("Die 1: " + dice1 + " | Die 2: " + dice2)
        return dice1 + dice2;

    }
    console.log("The sum of dice: " + twoDice());
    //  Make a function called rollDie() that returns an integer between 1 and 6.

    function rollDie(){
        return Math.floor(Math.random() * (7 - 1) + 1)
    }
    console.log("Die rolled: " + rollDie())

    //  Make a function called twentySidedDie() that returns a random integer between 1 and 20.

    function twentySidedDie(){
        return Math.floor(Math.random() * (21 - 1) + 1)
    }
    console.log("Twenty Sided Die: " + twentySidedDie())

    //  Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

    function twelveSidedDie(){
        return Math.floor(Math.random() * (13 - 1) + 1)
    }
    console.log("Twelve Sided Die: " + twelveSidedDie())

    //  Make a function called tetrahedron() that returns a random integer between 1 and 4.

    function tetrahedron(){
        return Math.floor(Math.random() * (5 - 1) + 1)
    }
    console.log("Tetrahedron: " + tetrahedron())


    //  Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.

    function listOfRolls(num){
        let arr = [];
        while(arr.length < num){
            arr.push(rollDie())
        }
        return arr;
    }
    console.log("Dice Rolled: ");
    console.log(listOfRolls(3))

    //  Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
    //
    // This function should take in two arguments:
    //
    // The first argument is the number of rolls you want to make.
    // The second argument is a function that contains the function definition for the type of die you want to roll.

    function listOfRollsFromDieFunc(numberOfRolls, diceFunction){
        let arr = []
        let result;
        for(let i = 0; i < numberOfRolls; i++){
            result = diceFunction()
            arr.push(result)
        }
        return arr;
    }
    console.log(listOfRollsFromDieFunc(5, twelveSidedDie))

    // Exercise 0. Write a function named first() that returns only the first element of an array

    let movies = ["Ready Player One", "BladeRunner", "Money Ball", "Interstellar", "The Batman"]

    function first(arr){
        return arr[0];
    }
    console.log(first(movies))
    // Exercise 1. Write a function named secondToLast() that returns the second to last element
    function secondToLast(arr){
        return arr[arr.length-2];
    }
    console.log(secondToLast(movies))

    // Exercise 2. Write a function named rest() that takes an array and returns an array containing everything except the first element.

    function rest(arr){
        return arr.splice(1);
    }
    let updatedMovies = rest(movies)
    console.log(updatedMovies)
    console.log(movies)


    // Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

    let games = ['Warzone', "CoD-M", "Apex Legends", "Fortnite","Minecraft"]
    console.log(games)
    function getLongestString(arr){
        let max = "";
        let min = "";
        for(let str of arr){
            min = str
            if(min.length > max.length){
                max = min;
            }
        }
        return max;

    }
    console.log(getLongestString(games));

    // Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

    function getShortestString(arr) {
        return arr.reduce(function (previous, current) {
            if (current.length < previous.length) {

                return current;
            } else
            return previous;
        })
    }
    console.log(getShortestString(games));

})()