const nestedArray = [3, 4];
const array = [1, 2, ...nestedArray, 5, 6];
console.log(array); // [ 1, 2, 3, 4, 5, 6]

let obj1 = {
  one: "one1",
};
let obj = {
  ...obj1,
  two: "two",
};
console.log(obj);

function sum(...arg) {
  return arg.reduce((current, next) => current + next);
}
console.log(sum(1, 1)); //
console.log(sum(2, 1, 1, 1)); //
console.log(sum(2, 2, 0,2,3,5)); // 14
