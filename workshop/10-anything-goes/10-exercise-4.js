// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {}

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Solution***
let numbers = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8];
function filterNonUnique(array) {
  return array.filter((value, index) => array.indexOf(value) !== index);
}
console.log(getDuplicates(numbers));
