const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const moreThanThree = users.filter(user => {
    return user.languages.length >= 3
})
console.log(moreThanThree)

// Use .map to create an array of strings where each element is a user's email address

let arrOfEmails = users.map((user) => {
    return user.email
})

console.log(arrOfEmails)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce((total, person) => {
    return total += person.yearsOfExperience
},0)

let getAvg = () => {
    return totalYears / users.length
}

console.log("Total years of experience: " + totalYears)
console.log("Avg. # of years per user: " + getAvg())
// Use .reduce to get the longest email from the list of users.

let longestEmail = arrOfEmails.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr
})

console.log("Longest email is: " + longestEmail)

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let listOfNames = users.map((user) => {
    return user.name
}).reduce((acc, curr) => {
    return acc += ", " + curr
})


console.log("Your instructors are: " + listOfNames)


