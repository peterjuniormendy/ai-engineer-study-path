async function f() {
  return 1;
}

f().then(console.log); // 1 NOTE: This line will be outputted last because it is asynchronous meaning javascript will execute it as a microtask and will be executed after the synchronous code has finished executing.
console.log(f()); // Promise { 1 }

// If the next code depends on the result?
// Suppose you want to use the actual result of f()

async function f() {
  return 1;
}

f().then((result) => {
  console.log("Result:", result);
});

console.log("This executes first");

console.log("I need the result from f()"); // doesn't wait for the Promise. It executes immediately. Because its outside the .then() callback. So if you need the result from f(), you have to use it inside the .then() callback or use async/await syntax.

// If you need to use the result before continuing, you have two main approaches.

// Approach 1: Use .then()
f().then((result) => {
  console.log("Result:", result);
  console.log("Now I can use the result");
}); // Both statements inside the callback execute after the Promise resolves.

// Approach 2: Use await

async function main() {
  const result = await f();

  console.log(result);
  console.log("Now I can use the result");
} // Here, await pauses the execution of main() until the Promise settles. It doesn't block the entire JavaScript program; other synchronous code can still run.

main();

// The key distinction
// - Synchronous code: Executes immediately, from top to bottom.
// - .then() callback: Executes later as a microtask.
// - await: Pauses the current async function until the Promise settles, then continues inside that function.
// So if subsequent code genuinely depends on the result of an asynchronous operation, you generally need to put that dependent code inside .then() or after await.

// NOTE: Can’t use await in regular functions. If we try to use await in a non-async function, there would be a syntax error:

// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // Syntax error
// }

// We may get this error if we forget to put async before a function. As stated earlier, await only works inside an async function.

async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

// showAvatar();
