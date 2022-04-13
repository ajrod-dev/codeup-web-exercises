"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

let favColor = prompt("What's your favorite color? ");
alert("Great, " + favColor + " is my favorite color too!");

alert("You have rented some movies for your kids. You're renting 'The Little Mermaid', 'Brother Bear', and 'Hercules'. Price for a movie per day is $3.");
let mermaid = parseInt(prompt("How many days are you renting 'The Little Mermaid' for? "));
let bear = parseInt(prompt("How many days are you renting Brother Bear for? "));
let hercules = parseInt(prompt("How many days are you renting 'Hercules' for? "));
let total = (mermaid + bear + hercules) * 3;
alert("Your total comes out to $" + total);


alert("I see that you're working as a contractor for 3 companies: Google, Amazon and Facebook.");
let googleHrs = parseInt(prompt("How many hours did you work at Google?"));
let googleRate = parseInt(prompt("And what is their hourly rate?"));

let amazonHrs = parseInt(prompt("How many hours did you work at Amazon?"));
let amazonRate = parseInt(prompt("And what is their hourly rate?"));

let facebookHrs = parseInt(prompt("How many hours did you work at Facebook?"));
let facebookRate = parseInt(prompt("And what is their hourly rate?"));

let paycheck = (googleRate * googleHrs) + (amazonRate * amazonHrs) + (facebookRate * facebookHrs);

alert("You're paycheck will come out to $" + paycheck);

let isClassFull = confirm("Click 'Ok' if your current class you're trying to take is NOT full and if it does NOT conflict with your current schedule. ");
alert("Your enrollment status is " + isClassFull);

let premium = confirm("Press 'Ok' if you're a premium member. If not, please press cancel");
let itemsPurchased = prompt("How many items did you buy? ")
let offer = true;
alert("Your product offer status is " + ((premium) || (itemsPurchased >= 2 && offer)));