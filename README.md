# Incubyte Assignment – String Calculator (TDD)

This project implements a **String Calculator** using **Test-Driven Development (TDD)** in JavaScript. It was developed as part of the **Incubyte** programming assignment to demonstrate clean, modular design and a solid testing strategy using **Jest**.

---

## Problem Statement

Implement a function `add(string)` that processes a string of numbers and returns their sum, adhering to the following rules:

- Return `0` for an empty string
- Return the number itself if only one number is provided
- Support multiple numbers separated by commas (`,`) or newlines (`\n`)
- Allow a custom delimiter defined at the beginning of the string as: `//<delimiter>\n`
- Throw an exception when one or more negative numbers are present
  - Include all negative numbers in the exception message
- Avoid using `split()` or regular expressions

---

## Commands
```bash
npm install
npm test
```

## Manually run the calculator
Create a file named index.js:

```js
const stringCalculatorTdd = require('./stringCalculatorTdd');

console.log(stringCalculatorTdd("1,2,3"));        // 6
console.log(stringCalculatorTdd("//;\n1;2"));     // 3
console.log(stringCalculatorTdd("10,-4"));        // Error: Negatives not allowed -4
```
Then run it:
```bash
node index.js
```

## Features

| Feature                                      | Status |
|---------------------------------------------|--------|
| Return 0 for empty string                   | Yes    |
| Handle a single number                      | Yes    |
| Support comma and newline delimiters        | Yes    |
| Support custom single-character delimiter   | Yes    |
| Throw on negative numbers (list all)        | Yes    |
| Avoid use of `split()` or regex             | Yes    |
| Unit tested with Jest                       | Yes    |

