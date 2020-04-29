// Q2a
// Write a function that accepts two integers and *returns*
// the greater one. (this is slightly different from the previous question.)

function max(num1, num2) {}

function maxNumber(x1, x2) {
  return Math.max(x1, x2);
  console.log(Math.max(x1, x2));
}
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q2b
// What if we wanted to figure out the max of 4 integers, instead of 2?
function max(num1, num2) {}

function maxNumber(x1, x2) {
  return Math.max(x1, x2);
  console.log(Math.max(x1, x2,..., xn));
}
// STRETCH
// What if we wanted to write a function which took an unlimited number of
// integers, and returned the largest one?
x = findMax(x1, x2,...,xn);

function findMax() {
  let i;
  let max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
    console.log(max);
}
// All of the following calls should be valid:
maxValue(4, 2); // 4
maxValue(4, 2, 8, 1, 5, 10); // 10
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54); // 64

// HINT: You'll want to use "rest parameters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
