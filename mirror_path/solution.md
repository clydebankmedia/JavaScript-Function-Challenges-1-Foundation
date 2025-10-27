# 🪩 The Mirror Path Solution Code

<details><summary>The Mirror Gate</summary>

```jsx
/*
  Function: reverseWord(str)
  Purpose: Reverse the letters in a string.

  Input:
    - str: a word (string)
  Output:
    - the same word, but reversed

  Note:
    Uses a for loop that counts backwards (from end to start).
    This can be tricky! Start at str.length - 1 and decrease by 1 each time until i reaches 0 (the first letter).. 
*/

function reverseWord(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i = i - 1) {
    reversed = reversed + str[i];
  }
  return reversed;
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

<details><summary>The Cipher Beyond ( Secret Chamber )</summary>

```js
/*
  Function: checkPasswordStrength(password)
  Purpose: Check how strong a password is based on its length and character types.

  Input:
    - password: a string typed by the user (for example: "abc123", "P@ssw0rd!")

  Output:
    - "weak"   → fewer than 6 characters
    - "medium" → 6 or more characters that include both letters and numbers
    - "strong" → 8 or more characters that also include a special symbol

  How It Works:
    - The function uses three regular expressions (patterns that test for matches in text):
        * /[a-zA-Z]/  → checks if the password contains at least one letter
        * /\d/         → checks if it contains at least one number
        * /[^a-zA-Z0-9]/ → checks if it includes a special (non-letter, non-number) symbol
    - Each pattern uses the `.test()` method, which returns true or false.
    - The function then decides the strength label by testing the length and these flags in order.

  Note:
    Regular expressions (regex) are a set of JavaScript tools that look for character types inside strings.
    You don’t need to understand every regex symbol yet — just know they help check patterns quickly and return true or false.
*/

function checkPasswordStrength(password) {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if (password.length < 6) return "weak";
  if (password.length >= 8 && hasLetter && hasNumber && hasSpecial) return "strong";
  if (hasLetter && hasNumber) return "medium";
  return "weak";
}

```
</details>