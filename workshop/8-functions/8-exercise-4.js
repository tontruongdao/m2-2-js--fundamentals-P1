// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {}

// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];

function itemIsPresent(myArray, item) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(itemIsPresent(myArray, "funky")); // true
console.log(itemIsPresent(myArray, "elephant")); // false
