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

    function randomNumber(){
        return Math.floor(Math.random() * (180) + 20);
    }
    function areTheyEvenOrOdd(){
        for(let i = 1; i <= 10; i++){
            let rand = randomNumber();
            if(rand % 2 === 0 ){
                console.log(rand + " is even.")
            } else {
                console.log(rand + " is odd.")
            }
        }
    }
    areTheyEvenOrOdd()

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
            console.log(i.toString().repeat(i))
        }
    }
    halfPyramid()

    /*
    Create a for loop that uses console.log to create a countdown from 100 to 5 counting by 5's
     */

    function countdownByFive(){
        for(let i = 100; i >= 5; i-=5){
            console.log(i)
        }
    }
    countdownByFive();


    /*
    Create a function that will replace every other letter of a string with a “Z”. (example: replaceLettersWithZ(“javascript”) // returns “jZvZsZrZpZ”;) This can be accomplished with a for loop,
    */

    function replaceLettersWithZ(str){
        let newStr = str;
        for(let i = 1; i < str.length; i+=2){
            newStr = newStr.replace(str.charAt(i), 'Z')

        }
        return newStr
    }
    console.log(replaceLettersWithZ('javascript'))


    /*
    Create a function to display a message of the factorial of a number. (example: factorial(4) // returns “1 * 2 * 3 * 4 = 24";)
     */

    // function factorial(n){
    //         if(n === 0 || n === 1){
    //             return 1
    //         }
    //         else if(n < 0){
    //             return -1
    //         }
    //         else {
    //             return (n * factorial(n - 1))
    //         }
    // }
    function factorial(n){
        let answer = n;
        if(n === 0 || n === 1){
          return 1
        }
        else if(n < 0){
            return -1;
        }
        while(n > 1){
            n--;
            answer *= n;
        }
        return answer;
    }

    // console.log("The factorial of "+ n + " is: " + factorial(4))
console.log("The factorial of the number inputted is " + factorial(6))
})()