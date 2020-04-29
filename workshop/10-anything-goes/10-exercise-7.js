// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q7
// - map returns an array with the same number of elements as lst
// - if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
// - map returns a new array created by applying func to the elements of the original array
//
// Example:
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]

function map(lst, func) {
  // lst is an array and func is a function
}
// -------------------------------------------------------------------------
function charCount(str) {
  return str.length;
}
console.log(
  "Q7: ",
  map(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"], charCount)
);
console.log("Q7: ", map(["Scott", "Bob", "Ric", "Jim"], charCount));

// Solution1
let t = ["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"];
let tNew = [];
function newName(array) {
  for (let i = 0; i < t.length; i++) {
    console.log(i);
    console.log(t[i].length);
    tNew.push(t[i].length);
  }
}
newName(t);
tNew;

// Solution2

let r = ["Scott", "Bob", "Ric", "Jim"];
let rNew = [];
function newName1(array) {
  for (let i = 0; i < r.length; i++) {
    rNew.push(r[i].length);
  }
}
// Call Function
newName1(r);
console.log(rNew);
