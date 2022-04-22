"use strict";

( function (){

/*    Create a while loop that uses console.log() to create the output shown below.
    2
    4
    8
    16
    32
    64
    128
    256
    512
    1024
    2048
    4096
    8192
    16384
    32768
    65536
 */

    function timesTwo(){
        let max = 1;
        while(max < 65536){
            console.log(max *= 2)
        }
    }
    timesTwo()

    /*
    An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

     */
    // Function that generates a random number to determine how many cones the seller needs to sell
    let amountToSell = function(){
        return Math.floor((Math.random() * (100 - 50) + 50));
    }
    // Function that generates a random number to determine how many cones are being bought by customers
    let conesBought = function(){
        return Math.floor((Math.random() * (6 - 1) + 1));
    }
    /* Main function - amountToSell is the inventory(random number).
       customerBought is amount of cones each customer wants to buy(random number).
       Inventory number is started at beginning then follows the if statements to determine if inventory is insufficient or 0.
       Inventory minus cones that customer wants is solved at bottom of function.

     */
    function iceCreamSeller(){
        let amount = amountToSell()
        let customerBought;
        console.log(amount + " cones to end the day.")
        do {
            customerBought = conesBought();
            if(amount < customerBought){
                console.log("Sorry can't sell you " + customerBought + " cones. Only have " + amount + " left")
            }
            else if(amount === 0){
                console.log("Yay, I sold all cones");
            }
            else {
                amount -= customerBought
                console.log(customerBought + " cones sold. " + amount + " cones left.")
            }
        } while(amount > 0);
    }

    iceCreamSeller();

})()