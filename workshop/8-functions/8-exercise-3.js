// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  // Your code here
}

function calculateAverage(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  let avg = sum / 5;
  let avgRounded = Math.round(avg);
  console.log(avgRounded);
}

console.log(calculateAverage(76, 60, 83, 100, 78));
