"use strict";

(() => {

    // Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
    //
    //     Example input: ["fred", true, 5, 3] Example output: [3, 5]

    function filterNumbers(arr){
        let newArr = [];
        arr.forEach(function (el) {
            if(typeof el === 'number'){
                newArr.push(el)
            }
        })
        return newArr.sort();
    }
    console.log("Example 1: ")
    console.log(filterNumbers(["fred", true, 5, 3]))

    // Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1

    let dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ]

    function getOlder(arr){
        arr.forEach(function (el) {
            el.age += 1;
        })
        console.log("After: ")
        return arr
    }

    console.log("Example 2: ")
    console.log(getOlder(dogs))


//    Write a function, washCars() that takes in an array of car objects and sets the boolean properties of isDirty to false.

    let dirtyCars = [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]


    function washCars(cars){
        for(let car of cars){
            car.isDirty = false;
        }
        return cars
    }
    console.log("Example 3: ")
    console.log(washCars(dirtyCars))

//    Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins

    let userArray = [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ]

    function adminList(users){
        let count = 0;
        let newArr = [];
        for(let user of users){
            if(user.isAdmin === false){
                users.splice(users.indexOf(user))
            }else {
                count++;
                newArr.push(user.email)
            }
        }
        console.log("Example 4: ")
        console.log(count)
        console.log(newArr)
        return users
    }
    console.log(adminList(userArray))

//    Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

    let breads  = [
        "white",
        "wheat",
        "rye",
        "white"
    ];

    let fillings = [
        "pb&j",
        "ham",
        "cheese steak",
        "tuna"
    ];

    function makeSandwichObjects(breads, fillings) {
        let sandwichObjects = [];
        let sandwich = {bread: "", filling: ""}
        for(let i = 0, j = 0; i < breads.length, j < fillings.length; i++, j++){
            sandwich = {bread: breads[i], fillings: fillings[j]}
            sandwichObjects.push(sandwich)
        }
        return (sandwichObjects)
    }
    console.log("Example 5: ")
    console.log(makeSandwichObjects(breads, fillings))

})()