(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: 'Alex',
        lastName: 'Rodriguez',
        sayHello
    }





    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    function sayHello() {
        return ("Hello " + this.firstName + " " + this.lastName);
    }

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180, discountApplied},
        {name: 'Ryan', amount: 250, discountApplied},
        {name: 'George', amount: 320,discountApplied}
    ];
    // Problem solved without method in array

    // function discountApplied(){
    //     shoppers.forEach(function (shopper) {
    //     if(shopper.amount > 200){
    //         console.log("Hi " + shopper.name + ". Your amount before the discount was $" + shopper.amount + ". With the discount of 12%, you'll pay $" + (shopper.amount * .88))
    //     } else {
    //         console.log("Hi " + shopper.name + ". Your amount to pay is $" + shopper.amount + ".")
    //     }
    //     })
    // }
    // discountApplied()

    // Problem solved with this keyword, added method to shoppers array
    function discountApplied(){
            if(this.amount > 200){
                return("Hi " + this.name + ". Your amount before the discount was $" + this.amount + ". With the discount of 12%, you'll pay $" + (this.amount * .88))
            }else {
                return("Hi " + this.name + ". Your amount to pay is $" + this.amount + ".")
            }
    }
    for(let shopper of shoppers){
        console.log(shopper.discountApplied())
    }
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let bookObj = {
        title: "",
        author: {
            firstName: "",
            lastName: ""
        },
        keywords: [""],
        available: false,
        dateAvailable: "",
        lend: function () {
            if(this.available === true) {
                this.available = false;
                let targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 14);
                let dd = targetDate.getDate();
                let mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
                let yyyy = targetDate.getFullYear();
                this.dateAvailable = mm + "/" + dd + "/" + yyyy;
            }
        }
    }

    let books = [
        {
            title: '12 Rules For Life',
            author: {
                firstName: 'Jordan',
                lastName: 'Peterson'},
            keywords: ['Self-help','Psychology'],
            available: true,
            dateAvailable: new Date('May 11, 2022 12:15:00')},
        {
            title: 'Mortality',
            author: {
                firstName: 'Christopher',
                lastName: 'Hitchens'},
            keywords: ['Religious-Skepticism','Current Events'],
            available: true,
            dateAvailable: new Date('May 26, 2022 12:15:00')},
        {
            title: 'Waking Up',
            author: {
                firstName: 'Sam',
                lastName: 'Harris'},
            keywords: ['Religious-Skepticism','Spirituality'],
            available: true,
            dateAvailable: new Date('June 01, 2022 12:15:00')},
        {
            title: 'Sapiens: A Brief History of Humankind',
            author: {
                firstName: 'Yuval',

                lastName: 'Harari'}, keywords: ['NonFiction'],
            available: true,
            dateAvailable: new Date('July 02, 2022 12:15:00')},
        {
            title: 'Skin In The Game',
            author: {
                firstName: 'Nassim',
                lastName: 'Taleb'},
            keywords: ['Non-Fiction'],
            available: true,
            dateAvailable: new Date('July 05, 2022 12:15:00')}
    ]
    let newBook = {title: "1-Page Marketing Plan", author: {firstName: "Allan", lastName: "Dib"}, keywords: ['business','marketing'],
        available: true, dateAvailable:"May 11, 2022 12:15:00"};

    books.push(newBook)
    console.log(books[0].title + " by " + books[0].author.firstName + " " + books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for(let book of books){
    //     console.log("Book # " + (books.indexOf(book) + 1) + "\n")
    //     console.log("Title: " + book.title + "\n")
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName+ "\n")
    //     console.log("- - - ")
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // Function to create a book listing
    let createBook = function(title, firstName, lastName){
        let book = {}
            book.title = title;
            book.author = {
                firstName: firstName,
                lastName: lastName
            }
        books.push(book);
    }
    createBook('Antifragile', 'Nassim', 'Taleb')

    function showBookInfo(book){
        console.log("Book # " + (books.indexOf(book) + 1) + "\n")
        console.log("Title: " + book.title + "\n")
        console.log("Author: " + book.author.firstName + " " + book.author.lastName+ "\n")
        console.log("- - - ")
    }

    for(let book of books){
        showBookInfo(book)
    }





})();
