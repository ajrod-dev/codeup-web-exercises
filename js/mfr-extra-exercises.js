"use strict";

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// Create an array of the first letters of each fruit

let firstLetters = fruits.map(function (fruit) {
    return fruit.slice(0,1)
})
console.log('1.) Array of the first letters of each fruit: ')
console.log(firstLetters)
console.log('_________________________________________')

// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

let userObjs = customers.map((customer) => {
    const {name, age} = customer
    return {name, age}
})

console.log('2.) Array of user objects based on the customers array: ')
console.log(userObjs)
console.log('_________________________________________')

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

let civilServants = customers.filter((customer) => {
    return customer.occupation === "Teacher" || customer.occupation === 'Police Officer'
})

console.log('3.) Array of civil servant customers: ')
console.log(civilServants)
console.log('_________________________________________')

// Determine the average age of all the customers

let averageAge = customers.reduce((prev, customer,index, arr) => {
    return (prev += customer.age)
}, 0) / customers.length

console.log('4.) Average age of all the customers: ')
console.log(averageAge)
console.log('_________________________________________')

// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATED_INTO_A_SINGLE_STRING
// }

function makeSuperPet(arr){
    let concatName = arr.reduce((str, curr) => {
        return str += curr.name
    }, "")
    let totalPetAges = arr.reduce((total, curr) => {
        return total += curr.age
    }, 0)
    let firstBreedLetters = arr.map((pet) => {
        return pet.breed.slice(0,1)
    }).join('')

   return {
        name: concatName,
        age: totalPetAges,
        breed: firstBreedLetters
    }
}

console.log('5.) Single pet object with concatenated names, first letters of breed, & total ages: ')
console.log(makeSuperPet(pets))
console.log('_________________________________________')

// Create a function that takes in an array of pets and returns an array of the length of first names for pugs only. Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'

function arrayOfLength(arr){
    let result = []
    arr.filter((el) => {
        if(el.breed === "Pug"){
            result.push(el.name.length)
        }
    })
    return result
}


console.log('6.) An array of the length of first names for pugs only: ')
console.log(arrayOfLength(pets))
console.log('_________________________________________')

// Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array of female family member names

function getFemaleFamilyMembers(arr){
    let femaleMembers = []
    arr.filter((el) => {
        if(el.gender === 'female'){
            femaleMembers.push(el.name)
        }
    })
    return femaleMembers
}

console.log('7.) An array of female family member names: ')
console.log(getFemaleFamilyMembers(family))
console.log('_________________________________________')

// Create a function makeLongPetString() that when given the variable of pets, returns a string of all property values with dashes separating each property value

function makeLongPetString(arr){
    let finalStr = arr.reduce((str, curr) => {
        return str +=  curr.name + "-"
    }, "-")
    return finalStr
}


console.log('8.) A string of all property values with dashes separating each property value: ')
console.log(makeLongPetString(pets))
console.log('_________________________________________')


// Create a function that when given an array of first names, returns an array of the same names with a last name of Smith

function combineNames(arr){
    let result = arr.map((el) => {
        return el + " Smith"
    }, [])
    return result
}

console.log('9.) An array of the names provided with a last name of Smith: ')
console.log(combineNames(getFemaleFamilyMembers(family)))
console.log('_________________________________________')


// Create a function that when given an array of numbers, return the sum of the even numbers

let arrayOfNums = [1,2,3,4,5,6,7,8,9]

function returnSumOfEvens(arr){
    return arr.filter((num) => {
        return num % 2 === 0
    }).reduce((total, curr) => {
        return total + curr
    })
}

console.log('10.) Return the sum of the even numbers: ')
console.log('Array provided: ' + arrayOfNums)
console.log("Result: " + returnSumOfEvens(arrayOfNums))
console.log('_________________________________________')

// Create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10

arrayOfNums = [10,15,20,25,30,35,40]

function returnSumOfNumsDivisibleByTen(arr){
    return arr.filter((num) => {
        return num % 10 === 0
    }).reduce((total, curr) => {
        return total + curr
    })
}

console.log('11.) Return the sum of all numbers evenly divisible by 10: ')
console.log('Array provided: ' + arrayOfNums)
console.log("Result: " + returnSumOfNumsDivisibleByTen(arrayOfNums))
console.log('_________________________________________')

// Create a function that when given an array of names, return a string of all the first letters of each name

let arrayOfNames = ["Alex", "Juan", "Doris", "Michelle"]

function stringOfFirstLetters(arr){
    return arr.reduce((str, curr) => {
        return str += curr.charAt(0)
    }, "")
}

console.log('12.) Return a string of all the first letters of each name: ')
console.log('Array provided: ' + arrayOfNames)
console.log("Result: " + stringOfFirstLetters(arrayOfNames))
console.log('_________________________________________')

// Create a function that when given an array of values, returns an array of only the truthy values

let truthyArr = [1, 0, true, false, "0", "Hello" ,Infinity, -Infinity, -1, ""]

function arrOfTruthyValues(arr){
    return arr.filter((el) => {
       return el && true
    })
}

console.log('13.) Return an array of only the truthy values: ')
console.log('Array provided: ' + truthyArr)
console.log(arrOfTruthyValues(truthyArr))
console.log('_________________________________________')

// Create a function that when given an object, returns the property values as an array of elements

console.log('14.) Returns the property values as an array of elements: ')
console.log()
console.log()
console.log('_________________________________________')


// Create a function that when given three arguments: a min num, a max num, an array of nums will return the array of nums that are only between the min and max values, inclusive

function returnNumsBetweenMinAndMax(min, max, array){
    return array.filter((el) => {
        return el >= min && el <= max
    })
}

console.log('15.) Return the array of nums that are only between the min and max values, inclusive: ')
console.log("Array provided: " + arrayOfNums)
console.log(returnNumsBetweenMinAndMax(11,30,arrayOfNums))
console.log('_________________________________________')

// Create a function that when given an array of strings, returns an array of objects with properties for the given string value and the length of the string and the string without vowels (not including y)

let arrayOfString = ['Random', 'Gibberish', 'Accidental', 'Odd', 'Irregular']

function returnArrayOfObjs(array) {
    function wordWithNoVowels(str){
        return str.toLowerCase().split("").filter((letter) => {
            return letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u'
        }).join("")
    }
    return array.map((el) => {
        return {name: el, length: el.length, stringWithNoVowels: wordWithNoVowels(el)}
    });
}

console.log('16.) Returns an array of objects with properties for the given string value and the length of the string and the string without vowels (not including y): ')
console.log('Array provided: ' + arrayOfString)
console.log('Result: ')
console.log(returnArrayOfObjs(arrayOfString))
console.log('_________________________________________')


// Use .reduce to transform the users array into an object where the object's keys are ids and the values are objects that represent each user



let usersObj = users.reduce((obj, user) => {
    const { id } = user
    return {...obj, [id] : {name: user.name, email: user.email, languages: user.languages}}
}, {})

console.log('17.) Return object where the object\'s keys are ids and the values are objects that represent each user: ')
console.log('Array provided: ')
console.log(users)
console.log('Result: ')
console.log(usersObj)
console.log('_________________________________________')

// given an array of names, use .reduce to produce a single string that contains everyone's name

let names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

let namesStr = names.reduce((str, name) => {
    return str += name
}, "")

console.log('18.) use .reduce to produce a single string that contains everyone\'s name: ')
console.log('Array provided: ')
console.log(names)
console.log('Result: ')
console.log(namesStr)
console.log('_________________________________________')



// Reduce Problem #2: Sum up all of the numbers in the following array using .reduce

let numbers = [1, 2, 3, 99, 1, -3, 1000, 0, 33, -67];

let sumOfNumbers = numbers.reduce((total, num) => {
    return total += num
})

console.log('19.) Sum up all of the numbers in the following array using .reduce: ')
console.log('Array provided: ')
console.log(numbers)
console.log('Result: ')
console.log(sumOfNumbers)
console.log('_________________________________________')

// Given the above array of numbers, write the .reduce necessary to determine the highest number of the array.

let highestNumber = numbers.reduce((highest, num) => {
    return highest > num ? highest : num
})

console.log('20.) Determine the highest number of the array: ')
console.log('Array provided: ')
console.log(numbers)
console.log('Result: ')
console.log(highestNumber)
console.log('_________________________________________')

// Given the above array of numbers, write the .reduce necessary to determine the lowest number of the array.

let lowestNumber = numbers.reduce((lowest, num) => {
    return lowest < num ? lowest : num
})

console.log('21.) Determine the lowest number of the array: ')
console.log('Array provided: ')
console.log(numbers)
console.log('Result: ')
console.log(lowestNumber)
console.log('_________________________________________')

// Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use .reduce to determine the average of all the numbers

let oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let averageOfArray = oneThruTen.reduce((avg, num, i, arr) => {
    return (avg += num)
}) / oneThruTen.length

console.log('22.) Determine the average of the numbers 1 - 10: ')
console.log('Array provided: ')
console.log(oneThruTen)
console.log('Result: ')
console.log(averageOfArray)
console.log('_________________________________________')

// Reduce problem #6, given the array of numbers from above, determine the average of all numbers

let averageOfOriginalNums = numbers.reduce((avg, num) => {
    return avg += num
}) / numbers.length

console.log('23.) Determine the average of the numbers array from above: ')
console.log('Array provided: ')
console.log(numbers)
console.log('Result: ')
console.log(averageOfOriginalNums)
console.log('_________________________________________')