import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import DEFAULT_SERVER from './mixed-exports.mjs';
import { USERNAME, PASSWORD } from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
