"use strict";

(function () {

    /*
    Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
     */

    function showMultiplicationTable(num){
        for(let i = 1; i <= 10; i++){
            console.log(num + " * " + i + " = " + num * i)
        }
    }
    showMultiplicationTable(7)

    /*
    Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
     */

    function randomNumbers(){
        for(let i = 1; i <= 10; i++){
            let rand = Math.floor(Math.random() * (200 - 20) + 20)
            if(rand % 2 === 0 ){
                console.log(rand + " is even.")
            } else if (rand % 2 === 1){
                console.log(rand + " is odd.")
            }
        }
    }
    console.log(randomNumbers())

    /*
   Create a for loop that uses console.log to create the output shown below.
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
     */

    function halfPyramid() {
        for (let i = 1; i < 10; i++) {
            for(let j = 0; j < i; j++){
                console.log(i)
            }
        }
    }
    console.log(halfPyramid())

    /*
    Create a for loop that uses console.log to create a countdown from 100 to 5 counting by 5's
     */

    function countdownByFive(){
        for(let i = 100; i >= 5; i-=5){
            console.log(i)
        }
    }
    countdownByFive();


})()