"use strict";

// define a function and immediately invoke (i.e. call) it
(function () {
    var iffeVar = "I'm local to the IIFE.";
    alert(iffeVar); // undefined
})();

alert(iffeVar); // undefined

// Arrow Function
const myArrowFunction = (firstName, lastName) => {
    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase()
    return firstName + " " + lastName;
}


function isNumber(input) {
    return typeof input === "number";
}

