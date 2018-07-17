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

   const output = fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token b6124cf342eee3b3bf3f828f4ab2a65438cbd66e'}})
    .then(res => res.json())
    .then(e => e.filter(event => event.type === 'PushEvent'))
    .then (event => event[0].created_at.substr(0, 10));

    return output;
};

getLastPush('tenglishjr')
    .then(data => console.log('Last Push:\n', data));