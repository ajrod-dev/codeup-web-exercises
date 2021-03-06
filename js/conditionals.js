"use strict";
(function() {

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    // function analyzeColor(color) {
    //     if (color === 'red') {
    //         return "Most firetrucks are red."
    //     } else if (color === 'orange') {
    //         return "Orange is a color and a fruit."
    //     } else if (color === 'yellow') {
    //         return "The sun is depicted as yellow in a lot of drawings."
    //     } else if (color === 'green') {
    //         return "I enjoy being on a very green golf course."
    //     } else if (color === 'blue') {
    //         return "I love the view of a blue ocean."
    //     } else if (color === 'indigo') {
    //         return "Indigo is the color of many flower fields."
    //     } else if (color === 'violet') {
    //         return "Violet reminds me of lavender."
    //     } else {
    //         return "I don't know anything about " + color;
    //     }
    // }

    console.log(analyzeColor('cyan'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */
    function analyzeColor(color) {
        switch (color) {
            case 'red':
                return 'Red is my favorite color.';
            case 'orange':
                return 'Orange is a color and a fruit.'
            case 'yellow':
                return 'The sun is depicted as yellow in a lot of drawings.'
            case 'green':
                return 'I enjoy being on a very green golf course.'
            case 'blue':
                return 'I love the view of a blue ocean.'
            case 'indigo':
                return 'Indigo is the color of many flower fields.'
            case 'violet':
                return 'Violet reminds me of lavender.'
            default:
                return "I don\'t know anything about " + color;
        }
    }

    console.log(analyzeColor('red'))

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    function askUser() {
        let result = prompt("What is your favorite color? ");
        alert(analyzeColor(result));
    }

    console.log(askUser())

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(lucky, total) {
        if (lucky === 0) {
            return "Your total is: $" + (total);
        } else if (lucky === 1) {
            return "Congratulations! You have received a promo discount of 10% on your total purchase. Your total is now: $" + ((total - (.10 * total)).toFixed(2));
        } else if (lucky === 2) {
            return "Congratulations! You have received a promo discount of 25% on your total purchase. Your total is now: $" + ((total - (.25 * total)).toFixed(2));
        } else if (lucky === 3) {
            return "Congratulations! You have received a promo discount of 35% on your total purchase. Your total is now: $" + ((total - (.35 * total)).toFixed(2));
        } else if (lucky === 4) {
            return "Congratulations! You have received a promo discount of 50% on your total purchase. Your total is now: $" + ((total - (.50 * total)).toFixed(2));
        } else if (lucky === 5) {
            return "Congratulations! You have received a promo discount of 100% on your total purchase. Your total is now: $0. Enjoy your free gift.";
        } else {
            return "ERROR: Lucky number should be between 0 and 5."
        }
    }

    console.log(calculateTotal(5, 5.00));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6

    let luckyNumber = Math.floor(Math.random() * 6);

    function cashier() {
        let result = prompt("What is your total? (Ex: 5.00)");
        alert(calculateTotal(luckyNumber, result))
    }

    cashier();

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function askForNumber() {
        let answer = confirm("Would you like to enter a number? ");
        if (answer === false) {
            alert("Ok! Enjoy your day.")
        } else {
            let numAnswer = prompt("Enter your number: ");
            if (isNaN(numAnswer)) {
                alert("You've entered an incorrect data type");
            } else {
                let numPlusHundred = parseInt(numAnswer) + 100;
                if (numAnswer % 2 === 0) {
                    alert("Your number you entered is even");
                } else if (answer % 2 === 1) {
                    alert("Your number you entered is odd");
                }
                alert("Your number plus hundred is: " + (numPlusHundred));
                if (numAnswer > 0) {
                    alert("Your number is positive.");
                } else {
                    alert("Your number is negative.");
                }
            }
        }
    }

    console.log(askForNumber());

})();