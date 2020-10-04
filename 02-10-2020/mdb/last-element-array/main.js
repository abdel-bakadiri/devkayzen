const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let lastElement = arr.slice(-1);
console.log(lastElement); // [9]
console.log(lastElement[0]); // 9
// the twa latest elements
const twoLatestElements = arr.slice(-2);
console.log(twoLatestElements); // [8,9]
