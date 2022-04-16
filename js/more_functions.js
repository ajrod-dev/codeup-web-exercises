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
    console.log(isVowel('A'));

//    Make a function named isConsonant(letter)
    function isConstant(letter){
        let i = letter.toLowerCase();
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
            return ("The letter inputted, " + i + ", is NOT a constant.");
        }
        return ("The letter inputted, " + i + ", is a constant.");
    }
    console.log(isConstant('a'));

//  Make a function named isCapital(letter)
    function isCapital(letter){
        if (letter == letter.toUpperCase()) {
            return "The letter inputted, " + letter + ", is a capital letter.";
        }
        else {
            return "The letter inputted, " + letter + ", is NOT a capital letter.";
        }
    }
    console.log(isCapital("A"));

//  Make a function named isLowerCase(letter)
    function isLowerCase(letter){
        if (letter == letter.toLowerCase()) {
            return "The letter inputted, " + letter + ", is a lowercase letter.";
        }
        else {
            return "The letter inputted, " + letter + ", is NOT a lowercase letter.";
        }
    }
    console.log(isLowerCase("A"));

//    Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(string){
        let regex = /[a-z]/;
            if (string.match(regex) == null) {
                return "This string, " + string + ", does NOT have a lowercase letter."
            }
            else {
                return "This string, " + string + ", has a lowercase letter."
        }
    }
    console.log(hasLowerCase("STRoNG"));

//    Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(letter){
        let regex = / /;
        return "It is " + regex.test(letter) + " that the input is a space character.";
    }
    console.log(isSpace(" "));

//    Make a function named isZero(number)
    function isZero(number){
        if (number === 0){
            return "The number inputted is zero"
        } else {
            return "The number is NOT zero"
        }
    }
    console.log(isZero(0));

//    Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input){
        if (input !== 0){
            return "TRUE: The number inputted is NOT zero"
        } else {
            return "FALSE: The number inputted is zero"
        }
    }
    console.log(notZero(1))

//    Write a function named lowerCase(string)
    function lowerCase(string){
        return "The string inputted, " + string + ", is now lowercase: " + string.toLowerCase();
    }
    console.log(lowerCase("EXAMPLE"));

//    Write a function named double(n) that returns a number times two
    function double(n){
        return "The number inputted, " + n + ", is now doubled: " + n * 2;
    }
    console.log(double(4));

//    Write a function named triple(n) that returns a number times 3
    function triple(n){
        return "The number inputted, " + n + ", is now tripled: " + n * 3;
    }
    console.log(triple(4));

//    Write a function named quadruple(n) that returns a number times 4
    function quadruple(n){
        return "The number inputted, " + n + ", is now quadrupled: " + n * 4;
    }
    console.log(quadruple(4));

//     Write a function named half(n) that returns 1/2 of the provided input
    function half(n){
        return "The number inputted, " + n + ", is now halved: " + n / 2;
    }
    console.log(half(4));

//    Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b){
        return "Problem: " + a + " - " + b + " | Solution: " + (a - b);
    }
    console.log(subtract(547, 38));

//    Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b){
        return "Problem: " + a + " * " + b + " | Solution: " + (a * b);
    }
    console.log(multiply(54, 30));

//    Write a function named divide(a, b) that returns a divided by b
    function divide(a, b){
        return "Problem: " + a + " / " + b + " | Solution: " + (a / b);
    }
    console.log(divide(60, 30));

//    Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b){
        return "The remainder of " + a + " / " + b + " is " + (a % b);
    }
    console.log(remainder(90, 32));

//     Write a function named cube(n) that returns n * n * n
    function cube(n){
        return "Problem: " + n + "^3 | Solution: " + n**3;
    }
    console.log(cube(4));

//    Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n){
        return "Problem: Square root of " + n +" | Solution: " + Math.sqrt(n);
    }
    console.log(squareRoot(25));

//










})();