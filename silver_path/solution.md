# 🧭 The Silver Path Solution Code


<details><summary>The Silver Lock</summary>


</details>



<details><summary>The Age Seal</summary>

```jsx
/*
  Function: canVote(age)
  Purpose: Check if a person is old enough to vote.

  Input:
    - age: a number representing years
  Output:
    - true if age is 18 or older
    - false otherwise
*/

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

```
</details>



<details><summary>The Sundial Chamber</summary>

```jsx
/*
  Function: greet(hour)
  Purpose: Return a greeting based on the hour of the day.

  Input:
    - hour: a number between 0 and 23 (like a 24-hour clock)
  Output:
    - "Good morning", "Good afternoon", or "Good evening"

  Note:
    Be careful with the comparison ranges (use <= and >= properly).
*/

function greet(hour) {
  if (hour >= 0 && hour <= 11) {
    return "Good morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
```
</details>



<details><summary>The Weather Dial</summary>

```jsx
/*
  Function: greet(hour)
  Purpose: Return a greeting based on the hour of the day.

  Input:
    - hour: a number between 0 and 23 (like a 24-hour clock)
  Output:
    - "Good morning", "Good afternoon", or "Good evening"

  Note:
    Be careful with the comparison ranges (use <= and >= properly).
*/

function greet(hour) {
  if (hour >= 0 && hour <= 11) {
    return "Good morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

```
</details>



<details><summary>The Balance Scale</summary>

```jsx
// The Balance Scale
// Write a function called compareWeights(a, b) that
// - Accepts two numbers, a and b
// - Returns "equal", "left heavier", or "right heavier"

function compareWeights(a, b) {
   if (a === b) {
    return "equal";
  } else if (a > b) {
    return "left heavier";
  } else {
    return "right heavier";
  }
}

// Sample calls:
console.log(compareWeights(5, 5));   // "equal"
console.log(compareWeights(7, 3));   // "left heavier"
console.log(compareWeights(2, 9));   // "right heavier"
```
</details>



<details><summary>The Day-Wheel</summary>

```jsx
/*
  Function: getDayType(dateStr)
  Purpose: Tell whether a given date is a weekend or weekday.

  Input:
    - dateStr: a date string (like "2025-09-13")
  Output:
    - "weekend" if Saturday (6) or Sunday (0)
    - "weekday" otherwise

  Note:
    new Date() creates a Date object.
    The .getDay() method returns 0–6 for Sunday–Saturday.
*/

function getDayType(dateStr) {
  let date = new Date(dateStr);
  let day = date.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0 || day === 6) {
    return "weekend";
  } else {
    return "weekday";
  }
}

```
</details>



<details><summary>The Truth Stone</summary>

```jsx
// The Truth Stone
// Write a function called checkTruth(a, b) that
// - Accepts two boolean values (true or false)
// - Returns "both true" if both valuaes are true
// - Returns "one true" if only one is true
// - Returns "none true" if both are false

function checkTruth(a, b) {
  if (a && b) {
    return "both true";
  } else if (a || b) {
    return "one true";
  } else {
    return "none true";
  }
}

// Sample calls:
console.log(checkTruth(true, true));    // "both true"
console.log(checkTruth(true, false));   // "one true"
console.log(checkTruth(false, false));  // "none true"
```
</details>



<details><summary>The Echo Chamber</summary>

```jsx
/*
  Function: repeatWord(word, n)
  Purpose: Repeat a word n times, separated by spaces.

  Input:
    - word: a string
    - n: a positive number
  Output:
    - A single string with the word repeated n times

  Note:
    Shows how to use loops to build a string step-by-step.
    Adds a space between each word except the first.
*/

function repeatWord(word, n) {
  if (n <= 0) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= n; i = i + 1) {
    if (i > 1) {
      result = result + " ";
    }
    result = result + word;
  }
  return result;
}

```
</details>