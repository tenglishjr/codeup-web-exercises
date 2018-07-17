"use strict";


// Write a function named `wait` that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const wait = num => {
//     const numPromise = new Promise((res, rej) => {
//         setTimeout(() => res(), num);
//     });
//     return numPromise;
// };
//
// wait(4000).then(() => console.log('You\'ll see this after 4 seconds'));



// Create a function that accepts a github username, and returns a promise that resolves with the date of the last push that user made. Reference the github api documentation to achieve this.


const getLastPush = username => {

   return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token b6124cf342eee3b3bf3f828f4ab2a65438cbd66e'}})
    .then(res => res.json())
    .then(e => e.filter(event => event.type === 'PushEvent'))
    .then (event => event[0].created_at.substr(0, 10))
    .catch(err => console.log(err));
};

getLastPush('tenglishjr')
    .then(data => console.log('Last Push:\n', data));


// =================== BONUS exercise 1

// In your data directory, create a profiles.json file with the following...
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.

$('#submit-btn').click( e => {
    e.preventDefault();
    colorPref($('#input').val());
});

const colorPref = username => {
    let bgColor = fetch('data/profiles.json')
        .then(res => res.json())
        .then(res => {
            if (res.hasOwnProperty(username)) {
                return res[username];
            }
        }).then(res => {
            $('body').css('background', res);
        })
        .catch(err => console.error(err));
};



// =================== BONUS exercise 2

// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in





// =================== BONUS exercise 3

// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.




// =================== BONUS exercise 4

// Create star-chars.json file in your data folder and paste in the following...
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
// ['Jakku', 'Tatooine', 'Tatooine']
