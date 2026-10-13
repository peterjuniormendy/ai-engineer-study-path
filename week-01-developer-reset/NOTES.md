# Week 1 notes

```
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

```

NOTE
The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.

```
const a = true,
b = false;
console.log(!a && !b); // false
console.log(!(a && b)); // true
console.log(!(a || b)); // false

```

NOTE: [100, 25, 3].sort() without the comparator turns the array inputs to string and sort them using the string comparison rules .

## Teach-back (Wednesday)

_Explain this week's main concept in your own words, as if training a new starter._

## Questions for review

-What does _.c stands for in this git command ``` git add _.c ```?
\*.c is a wildcard pattern, sometimes called a glob. It means "every file whose name ends in .c".

- matches any run of characters, including none at all.
  .c is the literal ending. .c is the file extension for programs written in C, which is why Pro Git uses it as its example.

So git add \*.c stages every .c file at once instead of naming each one. In a folder containing:

main.c utils.c notes.txt README.md

it stages main.c and utils.c and ignores the rest.

For your own repo, the same idea would be:

git add _.js # stages every .js file in the current folder
git add _.md # stages every Markdown file in the current folder

Quotes change how far it looks:

Without quotes, git add _.js: your terminal expands the _ before Git runs, so it only matches files in the folder you're in.
With quotes, git add '_.js': Git expands the pattern itself, so it also matches .js files inside subfolders, such as all your week-xx/exercises/_.js files from the repo root.

2. What is the difference between `git push -u origin main` and `git push origin main`?
   The difference is the -u flag, short for --set-upstream. It makes Git remember where this branch pushes to.

git push origin main sends your local main branch to the remote called origin, once. Git doesn't remember the pairing, so next time you have to type origin main again.

git push -u origin main sends it the same way, and also saves a link between your local main and origin/main. That link is the "upstream" or "tracking" branch. After that:

You type Git knows to use
git push origin main
git pull origin main
git status Compares you with origin/main, e.g. "Your branch is ahead of 'origin/main' by 2 commits"

So you use -u once per branch, usually on its first push, and plain git push after that. That's why your setup steps had git push -u origin main and why plain git push has worked since.

See it yourself: run git branch -vv in your repo. The [origin/main] next to main is the link -u created

## What was hard

-
