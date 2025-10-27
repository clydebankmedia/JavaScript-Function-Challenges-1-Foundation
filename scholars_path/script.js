// 📜 On the the Scholar’s Path - Chamber 1

// The Scholar's Tablet: Grade Converter
// This challenge is worth 6 points.


// Write a function called toLetterGrade(score) that
// - Accepts a number from 0 to 100
// - Returns "A", "B", "C", "D", or "F" depending on the score range

function toLetterGrade(score) {
  // Your code here
}

// Sample calls:
console.log(toLetterGrade(95));   // "A"
console.log(toLetterGrade(82));   // "B"
console.log(toLetterGrade(67));   // "D"
console.log(toLetterGrade(45));   // "F"


/* ------------------------------------------- */

// 📜 On the the Scholar’s Path - Chamber 2

// The Age Seal: Can You Vote?
// This challenge is worth 3 points.

// Write a function called canVote(age) that
// - Accepts an age as a number
// - Returns true if age is 18 or greater
// - Returns false otherwise

function canVote(age) {
  // Your code here
}

// Sample calls (uncomment to test your code):
// canVote(20);   // true
// canVote(18);   // true
// canVote(16);   // false


/* ------------------------------------------- */


// The Weather Dial
// This challenge is worth 6 points.

// Write a function called checkWeather(temp) that
// - Accepts a number temperature
// - Returns "cold", "mild", or "hot" based on ranges you define

function checkWeather(temp) {
  // Your code here
}

// Sample calls (uncomment to test your code):
// (assuming ranges: cold ≤10, mild 11–25, hot >25):
// checkWeather(5);    // "cold"
// checkWeather(18);   // "mild"
// checkWeather(32);   // "hot"


/* ------------------------------------------- */


// The Echo Chamber: Repeat That Word
// This challenge is worth 9 points.

// Write a function called repeatWord(word, n) that
// - Accepts a string (word) and a positive number (n)
// - Returns "" if (n) is less than or equal to 0
// - Otherwise, returns the word repeated n times, separated by spaces
// Example: repeatWord("hi", 3) → "hi hi hi"

function repeatWord(word, n) {
  // Your code here
}

// Sample calls (uncomment to test your code):
// repeatWord("hi", 3);      // "hi hi hi"
// repeatWord("echo", 5);    // "echo echo echo echo echo"
// repeatWord("JS", 1);      // "JS"


/* ------------------------------------------- */

// 📜 On the the Scholar’s Path - Chamber 3

// The Day-Wheel: Weekend or Weekday
// This challenge is worth 6 points.

// Write a function called getDayType(dateStr) that
// - Returns "weekday" or "weekend"

function getDayType(dateStr) {
  // Starter scaffolding:
  let date = new Date(dateStr);  // Creates a Date object
  
  /*
    You notice a note written on the wall: 
	  The Date object has a method getDay().
	  It returns a number: 0 (Sunday) through 6 (Saturday).
	  This helped! Run console.log(date.getDay()) 
	  to see what day your date gives back.
  */

  // Your code here
  // TODO: Use if/else to return "weekend" if day is 0 or 6,
  // and otherwise return "weekday".
  
}

// Sample calls (uncomment to test your code):
// getDayType("2025-09-13");   // "weekend" (Saturday)
// getDayType("2025-09-14");   // "weekend" (Sunday)
// getDayType("2025-09-15");   // "weekday" (Monday)


/* ------------------------------------------- */


// The Sundial Chamber: Greet by Time
// This challenge is worth 6 points.

// Write a function called greet(hour) that
// - Accepts an hour from 0 to 23
// - Returns "Good morning", "Good afternoon",  
//   or "Good evening" depending on the time

function greet(hour) {
  // Your code here
}

// Sample calls (uncomment to test your code):
// greet(7);    // "Good morning"
// greet(13);   // "Good afternoon"
// greet(20);   // "Good evening"


/* ------------------------------------------- */


// The Totem of Multiplication
// This challenge is worth 9 points.


// Write a function called multiplyAll(nums) that
// - Accepts an array of numbers
// - Returns the product of all numbers

function multiplyAll(nums) {
  // Starter scaffolding:
  let total = 1; // Start with 1 because multiplying by 0 erases everything
  
  // Your code here
  // TODO: Add a for loop to go through each item in nums
  // Multiply each number into 'total'
  
  return total;
}

// Sample calls (uncomment to test your code):
// multiplyAll([2, 3, 4]);     // 24
// multiplyAll([5, 5, 5]);     // 125
// multiplyAll([10, 1, -2]);   // -20
