// // Type conversion
// // 1. String to number
// const inputNumber = "8500";
// console.log(inputNumber + 10);

// console.log(Number(inputNumber), inputNumber);
// console.log(Number(inputNumber)); // string to number conversion function "Number(inputNumber)"
// console.log(typeof Number(inputNumber));
// console.log(typeof inputNumber);

// // 2. Number to string
// const birthYear = 1984;
// console.log(String(birthYear));
// console.log(typeof String(birthYear));

// //we can not convrt a letter type string into number. it return: NAN= Not a Number
// const firstName = "Ponkoj";
// console.log(Number(firstName));

// convert into Boolean type
// const inputNumber = 8500;
// const firstName = "Ponkoj";

// console.log(Boolean(inputNumber));
// console.log(Boolean(firstName));

// 2. Java script Type Coretion
let bookNumber = 5;
console.log("I have" + " " + bookNumber + " " + "Story book"); // string + value + string
console.log("20" - 5); // number string -number =15. its work but
console.log("20" + 5); // Numberstring + Number =205. its not work.
console.log("20" + " " + 5); //it show 20 5.
console.log("20" * 5); //its work abd show 100 in number type data.

console.log("20" / 5); //its work and show 4 in number type data.

console.log("20" - "5"); //its work and show 15 in number type data.

console.log(5 + 10 + 5 + "5"); // return a string value 205 and its incorrect. but
console.log("100" - "50" + 10); // return a number value 60 and its correct.
console.log("100" - "50" + "10"); // return a string value 5010 and its incorrect.
console.log("15" - "5" - "4" + 5); // return a number value 11 and its correct. but
console.log("15" - "5" - "4" + "5"); // return a string value 65 and its incorrect.

// 3. JavaScript Truethy & Falsy value
// Truthy = boolean True value
// Falsy = boolean false value. There are 5 types of Falsy value like: 0, ""(empty string), null, undefined & NaN(Not a Number). without this all data are truthy value. eg-
console.log(0); //it return 0 but
console.log(Boolean(0)); //it return "false" when convert into boolean. thats why it falsy.
console.log(Boolean("")); // it return false.
console.log(Boolean(null)); // it return false.
console.log(Boolean(undefined)); // it return false.
console.log(Boolean(NaN)); // it return false.

// Another example
console.log(Boolean(1)); //it return true.
console.log(Boolean("Ponkoj")); //it return true.
console.log(Boolean("125")); //it return true.

const job = 0;
if (job) {
  console.log("I have a good job");
} else {
  console.log("Looking for a good job");
}

// Another example
let salary = 15000;
if (salary) {
  console.log("My salary is set!"); //Define value show this code.
} else {
  console.log(" My salary isn't set!"); // undefined value show this code. becase undefined returns falsy value
}

// 4. Conditional statement

// let earning = 30000;
// if (earning > 35000) {
//   console.log("He is earning good");
// } else if (earning > 20000) {
//   console.log("His earning is not bad");
// } else if (earning > 10000) {
//   console.log("Write something");
// } else {
//   console.log("His earning isn't good enough");
// }

// Another example
let today = "Saturday";
if (today === "Saturday") {
  console.log(" Today 9pm we have a main live class");
} else if (today === "Sunday") {
  console.log("Today 9pm is support class");
} else if (today === "Monday") {
  console.log(" Today 9pm we have a main live class");
} else if (today === "Tuesday") {
  console.log("Today 9pm is support class");
} else if (today === "Wednesday") {
  console.log(" Today 9pm we have a main live class");
} else if (today === "Thrusday") {
  console.log("Today 9pm is support class");
} else {
  console.log("Today is our holiday");
}

// 5. Nested conditional statement

const x = 5;
if (x >= 10) {
  if (x == 10) {
    console.log("X is equal to 10");
  } else console.log(" X is greater than 10");
} else {
  console.log("x is lower than 10");
}

// 6.  Switch statement

let day = "Saturday";
switch (day) {
  case "Saturday":
    console.log("Today 9pm we have live main class");
    break;
  case "Sunday":
    console.log("Today 9pm we have live support class");
    break;
  case "Monday":
    console.log("Today 9pm we have live main class");
    break;
  case "Tuesday":
    console.log("Today 9pm we have live support class");
    break;
  case "Wednesday":
    console.log("Today 9pm we have live main class");
    break;
  case "Thrusday":
    console.log("Today 9pm we have live support class");
    break;
  default:
    console.log("Today is holiday");
}
