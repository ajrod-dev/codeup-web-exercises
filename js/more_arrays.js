"use strict";

(() => {

    /*
    Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
     */

    let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf(arr, val){
        let result = [];
        arr.forEach(function (el, index) {
            if(el === val){
                result.push(index)
            }
        })
        return result
    }

console.log(allIndexesOf(fruits, 'apple'));

    /*
    Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
     */

})()