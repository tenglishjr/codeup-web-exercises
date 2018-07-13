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
console.log('Original Users List', users);

// .filter function
let newUserList = users.filter( u => {
    if (u.languages.length >= 3) {
        return u;
    }
});

console.log('.filter', newUserList);


// .map function
let emailList = users.map( u => {
    return u.email;
});

console.log('.map', emailList);


// .reduce function
let userObject = users.reduce( (accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
}, {});

console.log('.reduce', userObject);