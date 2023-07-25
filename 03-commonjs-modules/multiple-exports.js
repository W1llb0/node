const myName = 'David';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myFavoriteNumber = myFavoriteNumber;
