import { expect, test } from "vitest";

interface User {
  name: string;
  age: number;
}
function createUser(name: string, age: number): User {
  return { name, age };
}

test("createUser returns a user object with the correct name and age", () => {
  const user = createUser("Alice", 30);

  expect(user).toEqual({ name: "Alice", age: 30 });
  expect(user.name).toBe("Alice");
  expect(user.age).toBe(30);
});

// .only tells Vitest to run only this test (or suite) and skip everything else in the file.
// .skip does the opposite. It skips a test without removing it.
// .todo lets you mark a placeholder for a test you haven't written yet.

// test.only("createUser returns a user object with the correct name and age", () => {
//   const user = createUser("Alice", 30);

//   expect(user).toEqual({ name: "Alice", age: 30 });
//   expect(user.name).toBe("Alice");
//   expect(user.age).toBe(30);
// });

// Parameterized Tests

// When you have several test cases that only differ in their inputs and expected outputs, writing a separate test for each one gets repetitive. test.for lets you define the cases as data and run the same test logic for all of them

test.for([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])("add(%i, %i) -> %i", ([a, b, expected]) => {
  expect(a + b).toBe(expected);
});

// NOTE: In the example above, the %i placeholders are replaced with the integer values from each data row. Vitest also supports other placeholder types, such as %s for strings and %f for floating-point numbers.

// If your cases have more than two or three values, passing objects is more readable. Use $property in the name to interpolate fields:

test.for([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])("add($a, $b) -> $expected", ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});

// The second argument to the test function is the Test Context, which gives you access to fixtures, per-test expect, and other utilities. This is especially useful with test.concurrent, where concurrent tests run in parallel and the global expect can't reliably associate a snapshot with the right test. The context-scoped expect solves this:

test.concurrent.for([
  [1, 1],
  [1, 2],
  [2, 1],
])("add(%i, %i)", ([a, b], { expect }) => {
  expect(a + b).toMatchSnapshot();
});
