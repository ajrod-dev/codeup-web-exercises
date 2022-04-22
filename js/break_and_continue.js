"use strict";


( function (){

    /*
    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

    Number to skip is: 27
    Here is an odd number: 21
    Here is an odd number: 23
    Here is an odd number: 25
    Yikes! Skipping number: 27
    Here is an odd number: 29
    Here is an odd number: 31
    Here is an odd number: 33
     */

    let isEven = function(num){
        return num % 2 === 0;
    }

    let isOdd = function(num){
        return num % 2 === 1;
    }
    // Using a 'do while' loop
    // let promptForNumber = function(){
    //     let input;
    //     do{
    //         input = parseFloat(prompt("Enter an odd number between 1 and 50: "));
    //     }
    //     while(isNaN(input) || isEven(input))
    //     return input;
    // }

    // Same function as above but in a 'while' loop
    let promptNumber = function(){
        let input;
        while(true){
            input = prompt("Enter an odd number between 1 and 50: ")
            if(input < 1 || input > 50){
                alert("Make sure to enter a number between 1 and 50")
            } else if(!isOdd(input)) {
                alert("This is not an odd number")
            } else {
                break;
            }
        }
        return input
    }

    function oddNumbers(){
        let userNumber = promptNumber();
        console.log("Number to skip: " + userNumber)
        for(let i = 0; i < 50; i++){
            if(isEven(i)){
                continue;
            } else if (userNumber == i){
                console.log("Skipping number: " + i)
            } else {
                console.log("This is an odd number: " + i)
            }
        }

    }


  // oddNumbers()


})();