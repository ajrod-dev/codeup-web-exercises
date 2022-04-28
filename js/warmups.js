"use strict";

// console.log("Yay! I completed the warm-up!");

    /* Fizzbuzz - Between 1 - 100
        - Log every iteration
        - Log fizz if divisible by 3
        - Log buzz if divisible by 5
        - Log fizzbuzz is divisible by both 3 and 5
        - Log number if not divisible by either
     */

    function fizzBuzz(){
        for(let i = 1; i <= 100; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz")
            } else if (i % 3 === 0){
                console.log("Fizz")
            } else if(i % 5 === 0){
                console.log('Buzz')
            } else {
                console.log(i)
            }
        }
    }
    // fizzBuzz()

    //  Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together

    // test array
    let arr = ['dog', 'cat', 'frog', 'bat']

    function stringOfLetters(arr){
        let result = ""; // created the string to show final result
        arr.forEach((el) => { // forEach method will get each character at index: 0 for each element in array
           result += el.charAt(0) // concatenate the character onto 'final result' string
        })
        return result;
    }

    console.log(stringOfLetters(arr));


    // Function that takes in a string and returns that string in alphabetical order.

    function alphabetize(str){
       return str.toLowerCase().split("").sort().join("");

    }
    console.log(alphabetize("CoDeUp"))