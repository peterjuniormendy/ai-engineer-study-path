// Week 2 · Monday
// Task: Write a function that accepts number | undefined and narrows it safely.
// Write your solution below, run it, then commit and push.

function square(num: number | undefined) {
  if (typeof num === "undefined") {
    return "Can't perform a mathematical operation on undefined";
  } else {
    return num * num;
  }
}

console.log(square(undefined)); // Can't perform a mathematical operation on undefined
console.log(square(2)); // 4
console.log(square(0)); // 0
