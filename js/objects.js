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

    var person = {
        firstName: "TJ",
        lastName: "English"
    };

    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return 'Hello, ' + this.firstName + ' ' + this.lastName + '!';
    };

    // console.log(person.sayHello());


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
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function getsDiscount() {

        shoppers.forEach( function (shopper) {
            if (shopper.amount > 200) {
                console.log('Name: ' + shopper.name
                    + '\nAmount Before Discount: $' + (shopper.amount).toFixed(2)
                    + '\nDiscount: $' + ((shopper.amount * .12)).toFixed(2)
                    + '\nAmount After Discount: $' + (shopper.amount * .88).toFixed(2));
            } else {
                console.log('Name: ' + shopper.name
                    + '\nAmount Before Discount: $' + (shopper.amount).toFixed(2)
                    + '\nDiscount: $0.00\n' +
                    'Amount After Discount: $' + (shopper.amount).toFixed(2));
            }
        })
    }


// getsDiscount();

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

    var books = [
        {
            title: 'Boundaries',
            author: {
                firstName: 'Henry',
                lastName: 'Cloud'
            }
        },
        {
            title: 'Peak Performance',
            author: {
                firstName: 'Brad',
                lastName: 'Stulberg'
            }
        },
        {
            title: 'The Salmon of Doubt',
            author: {
                firstName: 'Douglas',
                lastName: 'Adams'
            }
        },
        {
            title: 'Walkaway',
            author: {
                firstName: 'Cory',
                lastName: 'Doctorow'
            }
        },
        {
            title: 'A Brief History of Time',
            author: {
                firstName: 'Stephen',
                lastName: 'Hawking'
            }
        }
    ];


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



    books.forEach( function (book) {
        console.log('Book # ' + (books.indexOf(book) + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n---');
    });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // ===== BONUS FUNCTIONS

    // Creates a book object complete with book title & author
    function createBook(bookName, authorName) {
        var first, last, authorSplitNames;

        authorSplitNames = authorName.split(' ');
        first = authorSplitNames[0];
        last = authorSplitNames[1];

        return {
            title: bookName,
            author: {
                firstName: first,
                lastName: last
            }
        }
    }

    // Creates the array of book objects
    function createBooksArray() {
        var addBookConfirm = true;
        var booksArray = [];

        while (addBookConfirm === true) {
            booksArray.push(createBook(prompt('Enter book title:'), prompt('Enter book author:')));
            addBookConfirm = confirm('Would you like to add another?');
        }
        return booksArray;
    }

    // Displays all books that have been entered using the createBooksArray function
    function showBookInfo(arrBooks) {
        arrBooks.forEach( function (book) {
            console.log('Book # ' + (arrBooks.indexOf(book) + 1));
            console.log('Title: ' + book.title);
            console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n---');
        });
    }


    /** ===== BOOKS ARRAY EXECUTION ===== **/
    // showBookInfo(createBooksArray());



    /** =============== MORE BONUSES ================ **/

    // Bonus 1) -- Dog Object

    var dog = {
        breed: 'Plott Hound',
        weightInPounds: 72,
        age: 3,
        color: 'Brindle',
        sterilized: false,
        shotRecords: [
            {
                typeOfShot: 'Parvo',
                date: 161203
            },
            {
                typeOfShot: 'Rabies',
                date: 161130
            },
            {
                typeOfShot: 'Tetanus',
                date: 170102
            }
        ],
        bark: function () {
            return 'Woof!';
        },
        getOlder: function () {
            return this.age += 1;
        },
        fix: function () {
            if (this.sterilized === false) {
                return this.sterilized = true;
            }
        },
        vaccinate: function (vaccineName, vaccineDate) {

            var shotsObject = {
                typeOfShot: vaccineName,
                date: vaccineDate
            };
            return this.shotRecords.push(shotsObject);
        }

    };


})();
