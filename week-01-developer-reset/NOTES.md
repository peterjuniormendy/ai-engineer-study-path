# Week 1 notes

/\*
console.log(5 > 4); // true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

if ("0") {
console.log("Hello");
} // hello

let name = prompt("What is the official name of JavaScript?", "");
if (name == "ECMAScript") {
console.log("Right!");
} else {
console.log("You don't know? ECMAScript!");
}
let num = prompt("Enter a number", 0);
if (num > 0) {
console.log(1);
} else if (num < 0) {
console.log(-1);
} else {
console.log(0);
}
let result = a + b < 4 ? "Below" : "Over";

let message =
login === "Employee"
? "Hello"
: login === "Director"
? "Greetings"
: login === ""
? "No login"
: "";

console.log( null || 2 || undefined ); // 2
console.log( console.log(1) || 2 || console.log(3) ); // 1 and 2
console.log( 1 && null && 2 ); // null
console.log( console.log(1) && console.log(2) ); // 1 and undefined
console.log( null || 2 && 3 || 4 ); // 3

if (age >= 14 && age <= 90) {
console.log("Age is between 14 and 90");
}

if (!(age >= 14 && age <= 90)) {
console.log("Age is NOT between 14 and 90");
}

if (age < 14 || age > 90) {
console.log("Age is NOT between 14 and 90");
}

let userName = prompt("Who's there?", "");
if (userName === "Admin") {
let pass = prompt("Password?", "");
if (pass === "TheMaster") {
console.log("Welcome!");
} else if (pass === "" || pass === null) {
console.log("Canceled");
} else {
console.log("Wrong password");
}
} else if (userName === "" || userName === null) {
console.log("Canceled");
} else {
console.log("I don't know you");
}

let height = null;
let width = null;

console.log(height ?? 100); // 100
console.log(width ?? 200); // 200
console.log((height ?? 100) _ (width ?? 50)); // 5000
console.log(height ?? 100 _ width ?? 50); // 0 because of operator precedence, it evaluates as height ?? (100 \* width) ?? 50, which results in null ?? 0 ?? 50, giving 0.

NOTE
The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.

const a = true,
b = false;
console.log(!a && !b); // false
console.log(!(a && b)); // true
console.log(!(a || b)); // false

\*/

## Teach-back (Wednesday)

_Explain this week's main concept in your own words, as if training a new starter._

## Questions for review

-

## What was hard

-
