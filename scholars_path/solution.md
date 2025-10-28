# 📜 The Scholar's Path Solution Code

<details><summary>The Scholar's Tablet</summary>

```jsx
function toLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

```

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



<details><summary>The Totem of Multiplication</summary>

```jsx
/*
  Function: multiplyAll(nums)
  Purpose: Multiply all numbers inside an array.

  Input:
    - nums: an array of numbers (e.g., [2, 3, 4])
  Output:
    - The product of all numbers

  Note:
    Arrays start counting at index 0.
    A for loop visits each value, multiplying it into 'total'.
*/

function multiplyAll(nums) {
  let total = 1;
  for (let i = 0; i < nums.length; i = i + 1) {
    total = total * nums[i];
  }
  return total;
}

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



