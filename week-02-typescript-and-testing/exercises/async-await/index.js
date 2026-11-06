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

// Error handling
// If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.

// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }
// …is the same as this:
// async function f() {
//   throw new Error("Whoops!");
// }

// In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

// We can catch that error using try..catch, the same way as a regular throw

// async function f() {
//   try {
//     let response = await fetch("http://no-such-url");
//   } catch (err) {
//     console.error(err); // TypeError: failed to fetch
//   }
// }

// f();

// In the case of an error, the control jumps to the catch block. We can also wrap multiple lines:

// async function f() {
//   try {
//     let response = await fetch("/no-user-here");
//     let user = await response.json();
//   } catch (err) {
//     // catches errors both in fetch and response.json
//     console.error(err);
//   }
// }

// f();

/*
Summary
The async keyword before a function has two effects:

Makes it always return a promise.
Allows await to be used in it.
The await keyword before a promise makes JavaScript wait until that promise settles, and then:

If it’s an error, an exception is generated — same as if throw error were called at that very place.
Otherwise, it returns the result.
Together they provide a great framework to write asynchronous code that is easy to both read and write.

With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.
*/
