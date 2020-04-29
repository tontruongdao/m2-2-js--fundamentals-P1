/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q5
// Returns a new list with all the elements of lst that are length
// greater than 5
let lst = ["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"];
function keepLong(lst) {
  return lst.filter((word) => word.length > 5);
}
console.log(keepLong(lst));
