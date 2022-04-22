"use strict";

console.log("Yay! I completed the warm-up!");

    /* Fizzbuzz - Between 1 - 100
        - Log every iteration
        - Log fizz if divisible by 3
        - Log buzz if divisible by 5
        - Log fizzbuzz is divisible by both 3 and 5
        - Log number if not divisible by either
     */

    function fizzBuzz(){
        for(let i = 1git a; i <= 100; i++){
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
    fizzBuzz()