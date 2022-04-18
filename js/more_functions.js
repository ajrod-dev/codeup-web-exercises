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

//     Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n){
        return "Problem: Cube root of " + n +" | Solution: " + Math.cbrt(n).toFixed(2);
    }
    console.log(cubeRoot(25));

//    Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
    function invertSign(number){
        if (isNaN(number) || number === 0) {
            return "Status: " + false + ", NaN.";
        } else {
            return "Inputted number: " + number + "| Inputted number inverted: " + number * -1;
        }
    }
    console.log(invertSign(0));

//    Write a function named degreesToRadians(number)
    function degreesToRadians(number) {
        return "Degrees: "+ number + "| Radians: " + (number * (Math.PI/180));
    }
    console.log(degreesToRadians(320));

//    Write a function named radiansToDegrees(number)
    function radiansToDegrees(number) {
        return "Radians: "+ number + "| Degrees: " + ((number * 180) / Math.PI);
    }
    console.log(radiansToDegrees(6));

//    Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input){
        let regex = /\s/;
        if(input.match(regex)){
            return "The input is blank"
        }
        else {
            return "The input is: " + input;
        }
    }
    console.log(isBlank(" "))

//    Make a function named trim(string) that removes empty spaces before and after the input.
    function trimMe(string){
        let regex = /a-z/;
        let spaces = /\s/;
        if(string.indexOf(0) == " " || string.indexOf(string.length - 1 == " ")) {
            return "String inputted: \'" + string + "\' | String trimmed: \'" + string.trim() + "\'";
        }
    }
    console.log(trimMe(" Hello World "));

//    Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2){
        let result = (input1 == input2);
        if(result == true){
            return result + ": The values are of equal value "
        }
        else {
            return false + ": The values are NOT of equal value"
        }
    }
    console.log(areEqual("test","tEst"));

//    Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2){
        let result = (input1 === input2);
        if(result == true){
            return result + ": The values are of equal value "
        }
        else {
            return false + ": The values are NOT of equal value"
        }
    }
    console.log(areIdentical("2",2));

//    Make a function named not(input) returns the input with a flipped boolean
    function not(input){
        if(input == true){
            return false;
        }
        else if (input == false){
            return true;
        }
    }
    console.log(not(true))

//    Make a function named notNot(input) that the negation of the negation of the input.
    function notNot(input){
        if(input == true){
            return true;
        }
        else if (input == false){
            return false;
        }
    }
    console.log(not(true))

//    Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    function and(predicate1, predicate2){
        let result = predicate1 && predicate2;
        return "The result of predicate1 AND predicate2 is: " + Boolean(result);
    }
    console.log(and(2, "hello"));

//    Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    function or(predicate1, predicate2){
        let result = predicate1 || predicate2;
        return "The result of predicate1 OR predicate2 is: " + Boolean(result);
    }
    console.log(or("", "hello"));

//    Write a function called reverseString(string) that reverses a string
    function reverseString(string){
        let str = string.split("");
        let str2 = str.reverse();
        let str3 = str2.join("")
        return "Input: " + string + " | Input reversed: " + str3;
    }
    console.log(reverseString("Hello World"));

//    Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number){
        return "The absolute value of the input," + number + ", is: " + Math.abs(number);
    }
    console.log(absoluteValue(-42));

//    Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
    function rollDice(sides){
        let rand = (Math.floor(Math.random() * sides) + 1);
        return "Random number between 1 and " + sides + " is: " + rand;
    }
    console.log(rollDice(200));

//    Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
    function willLoginUser(username, password, age, boolean){
        if((boolean === true && age < 18) && username.includes(password) !== true){
            return "status: " + true;
        }else if((age >= 18) && username.includes(password) !== true ){
            return "status: " + true;
        } else {
            return "status: " + false;
        }

    }
    console.log(willLoginUser("master", "admin", 8, false))




})();