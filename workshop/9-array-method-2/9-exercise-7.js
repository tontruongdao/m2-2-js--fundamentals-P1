/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(lst) {
  // lst is an array of strings
}
// -------------------------------------------------------------------------
console.log("Q7 greetLong()", greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Solution***
let lst = ["Scott", "Bob", "Ric", "Jim"];
function keepLong(lst) {
  return lst.filter((word) => word.length > 3);
}
let longName = keepLong(lst);
function helloName() {
  return longName.map((i) => "Hello " + i);
}
console.log(helloName(longName));
