// 🧭 On the Silver Path - Chamber 1 

// The Silver Lock: Even or Odd
// This challenge is worth 3 points.

// Write a function called isEven(num) that
// - Returns true if the number is even
// - Returns false if the number is odd

function isEven(num) {
    // Your code here
}

// Sample calls:
console.log("Testing The Silver Lock")
console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true


/* ------------------------------------------- */


// 🧭 On the Silver Path - Chamber 2 

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
// console.log("Testing The Age Seal")
// console.log(canVote(20));   // true
// console.log(canVote(18));   // true
// console.log(canVote(16));   // false


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
// console.log("Testing The Sundial Chamber")
// console.log(greet(9));    // "Good morning"
// console.log(greet(15));   // "Good afternoon"
// console.log(greet(21));   // "Good evening"


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
// console.log("Testing The Weather Dial")
// console.log(checkWeather(5));    // "cold"
// console.log(checkWeather(18));   // "mild"
// console.log(checkWeather(32));   // "hot"


/* ------------------------------------------- */


// 🧭 On the Silver Path - Chamber 3

// The Gem Counter
// This challenge is worth 3 points.

// Write a function called countGems(n) that
// - Accepts a number n
// - Uses a for loop to add numbers from 1 to n
// - Returns the total sum

function countGems(n) {
    // Your code here
}

// Sample calls (uncomment to test your code):
// console.log("Testing The Gem Counter");
// console.log(countGems(3));   // 6   (1 + 2 + 3)
// console.log(countGems(5));   // 15  (1 + 2 + 3 + 4 + 5)
// console.log(countGems(1));   // 1


/* ------------------------------------------- */


// The Balance Scale
// This challenge is worth 6 points.

// Write a function called compareWeights(a, b) that
// - Accepts two numbers, a and b
// - Returns "equal", "left heavier", or "right heavier"

function compareWeights(a, b) {
    // Your code here
}

// Sample calls (uncomment to test your code):
// console.log("Testing The Balance Scale");
// console.log(compareWeights(5, 5));   // "equal"
// console.log(compareWeights(7, 3));   // "left heavier"
// console.log(compareWeights(2, 9));   // "right heavier"


/* ------------------------------------------- */


// The Day-Wheel: Weekend or Weekday
// This challenge is worth 6 points.

// Write a function called getDayType(dateStr) that
// - Returns "weekday" or "weekend"

function getDayType(dateStr) {
    let date = new Date(dateStr);  // Creates a Date object

    /*
      You notice a poem written on the wall: 
        "The Date object holds secrets in play,
        It whispers the truth with .getDay().
        From 0 for Sunday to 6 Saturday, 
        console.log(date.getDay()) shows the way."
    */

    // Your code here
    // TODO: Use if/else to return "weekend" if day is 0 or 6, 
    // and otherwise return "weekday".

}

// Sample calls (uncomment to test your code):
// console.log("Testing The Day-Wheel");
// console.log(getDayType("2025-09-13"));   // "weekend" (Saturday)
// console.log(getDayType("2025-09-14"));   // "weekend" (Sunday)
// console.log(getDayType("2025-09-15"));   // "weekday" (Monday)


/* ------------------------------------------- */


// 🧭 On the Silver Path - Chamber 4 

// The Truth Stone
// This challenge is worth 6 points.

// Write a function called checkTruth(a, b) that
// - Accepts two boolean values (true or false)
// - Returns "both true" if both valuaes are true
// - Returns "one true" if only one is true
// - Returns "none true" if both are false

function checkTruth(a, b) {
  // Your code here
}

// Sample calls:
// console.log("Testing The Truth Stone");
// console.log(checkTruth(true, true));    // "both true"
// console.log(checkTruth(true, false));   // "one true"
// console.log(checkTruth(false, false));  // "none true"


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

// Sample calls:
// console.log("Testing The Echo Chamber");
// repeatWord("hi", 3);      // "hi hi hi"
// repeatWord("echo", 5);    // "echo echo echo echo echo"
// repeatWord("JS", 1);      // "JS"
