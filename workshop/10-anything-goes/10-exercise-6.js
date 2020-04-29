// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {}

console.log(identifyArmstrongNumbers(100, 99999));

// Solution ***
let solution = [];
function three_digit_armstrong_number() {
  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
      for (let k = 1; k < 10; ++k) {
        for (let l = 0; j < 10; ++l) {
          for (let m = 1; k < 10; ++m) {
            let pow =
              Math.pow(i, 5) +
              Math.pow(j, 5) +
              Math.pow(k, 5) +
              Math.pow(l, 5) +
              Math.pow(m, 5);
            let plus = i * 10000 + j * 1000 + k * 100 + l * 10 + m;
            if (pow == plus) {
              console.log(pow);
              solution.push(pow);
            }
          }
        }
      }
    }
  }
}
three_digit_armstrong_number();
