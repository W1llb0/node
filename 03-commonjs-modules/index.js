const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('climbing');

// Import from single-export
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
