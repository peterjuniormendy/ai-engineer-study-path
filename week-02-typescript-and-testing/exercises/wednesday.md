# Week 2 · Wednesday

> Teach-back note: what does `await` actually do?

Then await keyword in an async function pause the execution of the block untill the Promise settles then continue execution whiles the program continue to execute the synchronus codes.

What is a Promise?
A Promise is an Object that promises you a valuse based on the it's outcome. There are three stages in a Pomise lifecycle

1. Pending: Still executing.
2. Resolved: Successfully finish executing.
3. Rejected: Encounters an error while execution.

Why can you only use await inside an async function?

async tell you that a function will always return a Promise. It makes sence because we are expecting a promise which can either be resolved or rejected. When the execution reached the await it pause to let the promise to settled (add it as a microtask queue). some of these might take time like calling an api through a network. So while that is running in the background the program skips to the synchronus code after which, it will go back to the await or then() method and finish executing it.
