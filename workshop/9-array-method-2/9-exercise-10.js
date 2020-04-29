// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

// Solution***

let classRoom = [48, 95, 65, 48, 59, 78, 72, 65];
classRoom.forEach(function eval(grade) {
  if (grade < 60) {
    console.log("Grade : F");
  } else if (grade < 70) {
    console.log("Grade : D");
  } else if (grade < 80) {
    console.log("Grade : C");
  } else if (grade < 90) {
    console.log("Grade : B");
  } else if (grade < 100) {
    console.log("Grade : A");
  }
});
