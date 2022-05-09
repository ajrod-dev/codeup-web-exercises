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


    // Write a function that takes in an array of numbers and returns the sum of all elements.
    let arrayOfNums = [1,5,10,4];

    function sumOfAll(arr){
        let result = 0;
        for(let i of arr){
            result += i
        }
        return result
    }
    console.log(sumOfAll(arrayOfNums))

/*
Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.

Examples...
 */


let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}

    function returnProductEssentialDetails(Object){
        let obj = {};
        obj.name = Object.name;
        obj.priceInCents = Object.priceInCents;
        return obj;
    }

    let arrayOfObjs = [product1,product2, product3]

    function returnAllProductEssentialDetails(array){
        let result = [];
        for(const el of array) {
            result.push(returnProductEssentialDetails(el))
        }
        return result
    }

    console.log(returnProductEssentialDetails(product3))
    console.log(returnAllProductEssentialDetails(arrayOfObjs))


// Write a function that accepts an array and returns the tallest object from array

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function whoIsTallest(arr){
    let height = 0;
    let newArr = [];
    let result = {};
    arr.forEach(function (el) {
       newArr.push(el.heightInMM)
    })
    height = Math.max(...newArr)
    arr.forEach(function (el) {
        if(height === el.heightInMM){
            result = el;
        }
    })
    return result;
}

console.log(whoIsTallest(hamsters));