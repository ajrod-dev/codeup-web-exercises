"use strict";

(function() {

// Functions using conditionals but not loops or arrays:
//
// Make a function named isOdd(number)
    function isOdd(number) {
        let x = number % 2 === 1;
        console.log("Number inputted: " + number + " | Number is odd: " + x);
    }
        isOdd(4);

//    Make a function named isEven(number)
    function isEven(number) {
        let x = number % 2 === 0;
        console.log("Number inputted: " + number + " | Number is odd: " + x);
    }
    isEven(4);

//    Make a function named identity(input) that returns the input exactly as provided.

    function identity(input) {
       console.log(input);
    }
    identity("Hello Codeup!");

//    Make a function named isFive(input)

//    Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        let x = input + 5
        console.log("Number inputted: " + input + " | Number plus five: " + x);
    }
    addFive(23);

//    Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(n) {
        let x = n % 5 === 0;
        console.log("Number inputted: " + n + " | Is the number a multiple of 5? : " + x);
    }
    isMultipleOfFive(27);

//    Make a function named isThree(input)

//    Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(n) {
        let x = n % 3 === 0;
        console.log("Number inputted: " + n + " | Is the number a multiple of 3? : " + x);
    }
    isMultipleOfThree(31);

//    Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(n) {
        let x = n % 3 === 0;
        let y = n % 5 === 0;
        let z = (x && y);
        console.log("Number inputted: " + n + " | Is the number a multiple of 3 and 5? : " + z);
    }
    isMultipleOfThreeAndFive(33);

//    Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

    function isMultipleOf(target, n){
        let isItMultiple = target % n === 0;
        console.log("Is target("+ target +") evenly divisible by n("+ n +")? : " + isItMultiple);
    }
    isMultipleOf(9,3);

//    Make a function named isTrue(boolean)
    function isTrue(boolean){
        return boolean === true;
    }
    console.log("The boolean is " + isTrue(true));
//    Make a function named isFalse(boolean)
    function isFalse(boolean){
        return boolean === false;
    }
    console.log("The boolean is " + isFalse(true));

//    Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(input){
        return input == true;
    }
    console.log("Is the input truthy? " + isTruthy(1));
//    Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input){
        return input == false;
    }
    console.log("Is the input falsy? " + isFalsy(""));

//  Make a function named isVowel(letter)
    function isVowel(letter){
        let i = letter.toLowerCase();
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
            return ("The letter inputted, " + i + ", is a vowel.");
        }
        return ("The letter inputted, " + i + ", is NOT a vowel.");
    }
    console.log(isVowel('b'));

//    Make a function named isConsonant(letter)
    function isConstant(letter){
        let i = letter.toLowerCase();
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
            return ("The letter inputted, " + i + ", is NOT a constant.");
        }
        return ("The letter inputted, " + i + ", is a constant.");
    }
    console.log(isConstant('a'));



})();