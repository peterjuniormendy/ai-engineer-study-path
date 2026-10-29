// number type
// let age: number = 10;
// console.log("age: ", age);

// any

// let obj: any = {
//   x: 0,
//   foo: function () {
//     console.log("hello foo");
//   },
// };
// obj(); // throws runtime error
// console.log(obj);

// console.log("obj", obj);
// console.log("x", obj.x);
// console.log("foo");
// obj.foo();

// function
// parameter annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("world");

// greet(42); // Throws a complilation error because argument should be of type string

// Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}
console.log(getFavoriteNumber());

// NOTE: when the return value is change to any type typeScript will throw a complilation error. example changing 26 to 'hello'

// Functions Which Return Promises
async function getFavoriteNumberPromise(): Promise<number> {
  return 26;
}

console.log("promise:", getFavoriteNumberPromise()); // Promise 26

// Anonymous Functions

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log("function declaration: ", s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log("arrow function: ", s.toUpperCase());
});

// Object types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
console.log(printCoord({ x: 3, y: 7 }));

// Optional Properties

function printName(obj: { first: string; last?: string }) {
  if (obj.first && obj.last) return obj.first + " " + obj.last;
  else return obj.first;
}
// Both OK
console.log(printName({ first: "Bob" }));
console.log(printName({ first: "Alice", last: "Alisson" }));

type Property = {
  id: number;
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  area: number;
};

const property: Property = {
  id: 1,
  name: "sunset apartments",
  location: "leeds",
  price: 200000,
  bedrooms: 3,
  bathrooms: 2,
  type: "bungalo",
  area: 901,
};

console.log("property: ", property);

const myProperty = {
  id: 2,
  name: "summer house",
  location: "manchester",
  price: 300000,
  bedrooms: 3,
  bathrooms: 3,
  type: "house",
  area: 304,
};

console.log("myProperty: ", myProperty);

// Union Types
