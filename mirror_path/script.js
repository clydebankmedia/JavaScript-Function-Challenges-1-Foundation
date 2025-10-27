// 🪩 On the Mirror Path - Chamber 1 

// The Mirror Gate: Reverse the Word
// This challenge is worth 9 points.

// Write a function called reverseWord(str) that
// - Accepts a string
// - Returns the string reversed
// Example: "hello" → "olleh"

function reverseWord(str) {
  let reversed = "";
  // Your code here
  
  // TODO: Add a for loop here.
  // Hint: start at str.length - 1 and count down to 0.
  // Inside the loop, add each character to 'reversed'.

  return reversed;
}

// Sample calls:
console.log(reverseWord("hello"));      // "olleh"
console.log(reverseWord("JavaScript")); // "tpircSavaJ"
console.log(reverseWord("racecar"));    // "racecar"


/* ------------------------------------------- */

// 🪩 On the Mirror Path - Chamber 2 

// The Weather Dial
// This challenge is worth 6 points.

// Write a function called checkWeather(temp) that
// - Accepts a number temperature
// - Returns "cold", "mild", or "hot" based on ranges you define

function checkWeather(temp) {
  // Your code here
}

// Sample calls (uncomment to test your code):
// (assuming ranges cold ≤10, mild 11–25, hot >25):
// checkWeather(5);    // "cold"
// checkWeather(18);   // "mild"
// checkWeather(32);   // "hot"


/* ------------------------------------------- */


// The Day-Wheel: Weekend or Weekday
// This challenge is worth 6 points.

// Write a function called getDayType(dateStr) that
// - Returns "weekday" or "weekend"

function getDayType(dateStr) {
  // Starter scaffolding:
  let date = new Date(dateStr);  // Creates a Date object
  
  /*
    You notice a poem written on the wall: 
	  "The Date object holds secrets in play,
	  It whispers the truth with .getDay().
	  From 0 for Sunday to 6 Saturday, 
	  console.log(date.getDay()) shows the way"
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


// The Totem of Multiplication
// This challenge is worth 9 points.

// Write a function called multiplyAll(nums) that
// - Accepts an array of numbers
// - Returns the product of all numbers
// Example: multiplyAll([2, 3, 4]) → 24

function multiplyAll(nums) {
  // Starter scaffolding:
  let total = 1; // Start with 1 because multiplying by 0 erases everything
  
  // Your code here
  // TODO: Add a for loop to go through each item in nums
  // Multiply each number into total
  
  return total;
}

// Sample calls (uncomment to test your code):
// multiplyAll([2, 3, 4]);     // 24
// multiplyAll([5, 5, 5]);     // 125
// multiplyAll([10, 1, -2]);   // -20


/* ------------------------------------------- */
// 🪩 On the Mirror Path - Secret Chamber 

// The Cipher Beyond: Password Strength
// This challenge is worth 12 points.

// Write a function called checkPasswordStrength(password) that
// - Accepts a string
// - Returns "weak", "medium", or "strong" based on these rules:
//   * "weak" → fewer than 6 characters
//   * "medium" → at least 6 characters (letters and numbers)
//   * "strong" → at least 8 characters (letters, numbers, and a special symbol)

function checkPasswordStrength(password) {
  // Regular expression (regex) to detect special symbols
	const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	// Regex to detect any digit (0-9)
	const numberRegex = /\d/;
	// Regex to detect any uppercase or lowercase letter
	const letterRegex = /[a-zA-Z]/;
	
	// Flag that determines if password includes a special symbol.
	// This line uses the .test() method to check the password against the 
	// special character regex. 
	// You will need to use the same .test() method to check it against the  
	// other regular expressions (number and letter).
	// Check the result by using console.log(hasSpecialSymbol).
	const hasSpecialSymbol = specialCharRegex.test(password);
	
  // Your code here
}

// Sample calls:
checkPasswordStrength("abc");         // "weak"
checkPasswordStrength("abc123");      // "medium"
checkPasswordStrength("Abc123!@");    // "strong"