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

// A function that can operate on strings or numbers:
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
// printId({ myID: 22342 }); // Complilation Error: Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// The separator of the union members is allowed before the first element, so you could also write this:

function printTextOrNumberOrBool(
  textOrNumberOrBool: string | number | boolean,
) {
  console.log(textOrNumberOrBool);
}

printTextOrNumberOrBool("TypeScript");

// NOTE: if you have the union string | number, you can’t use methods that are only available on string
// function printID(id: string | number) {
//   console.log(id.toUpperCase()); // Error: if you have the union string | number, you can’t use methods that are only available on string:
// }

function printId2(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId2(200); // 200
printId2("200"); // 200 as a string
printId2("user01"); // USER01

// Another example is to use a function like Array.isArray:

function welcomeCustomers(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Welcome ", x.join(" and "));
  } else {
    console.log("welcome lone customer ", x);
  }
}

welcomeCustomers(["Alice", "Bob", "John"]);
welcomeCustomers("Mark");

// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree([1, 2, 3, 4, 5, 6]));
console.log(getFirstThree("TypeScript"));

// NOTE: It might be confusing that a union of types appears to have the intersection of those types’ properties. This is not an accident - the name union comes from type theory. The union number | string is composed by taking the union of the values from each type. Notice that given two sets with corresponding facts about each set, only the intersection of those facts applies to the union of the sets themselves. For example, if we had a room of tall people wearing hats, and another room of Spanish speakers wearing hats, after combining those rooms, the only thing we know about every person is that they must be wearing a hat.

// Type aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoordWithTypeAlias(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordWithTypeAlias({ x: 23, y: 18 });

// NOTE: Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. When you use the alias, it’s exactly as if you had written the aliased type. In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type

type UserInputSanitizedString = string;

function sanitize(str: string) {
  return str.toUpperCase();
}

function getInput(input: string) {
  return input;
}

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput("alises of the same type"));
console.log(userInput);

// Can still be re-assigned with a string though
userInput = "new input";
console.log("second user input ", userInput); // userInput was reassign but with the same type. The type can't be different.
// userInput = 2334 // Error: Type number is not asignable to type string

// Interfaces

interface Point2 {
  x: number;
  y: number;
}

function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 127 });

function square(num: number | undefined) {
  if (typeof num === "undefined") {
    return null;
  } else {
    return num * num;
  }
}

console.log(square(undefined));
console.log(square(2));
console.log(square(0));

// Type assertion
let greeting = "hello world" as string;
console.log(greeting);

// Literal Types

let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

console.log(changingString);
console.log(typeof changingString); // string, because changingString is decleared with let, it can be reassigned to any type value and takes the type of the value assigned to it. In this case, it is reassigned to a string value, so its type is string.

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation constantString;

console.log(constantString);
console.log(typeof constantString); // string, because constantString is decleared with const, it can not be reassigned to any value. In this case, it is assigned to a string value, so its type is string. It has a literal type representation of the value assigned to it.

let x: "hello" = "hello"; // OK
x = "hello"; // ok
// x = "howdy"; // Type '"howdy"' is not assignable to type '"hello"'.

// NOTE: It’s not much use to have a variable that can only have one value!
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(`element: ${s}, alignment: ${alignment}`);
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// Numeric literal types work the same way:

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare("cat", "dog"));

// Of course, you can combine these with non-literal types:

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  console.log("configure: ", x);
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

// There’s one more kind of literal type: boolean literals. There are only two boolean literal types, and as you might guess, they are the types true and false. The type boolean itself is actually just an alias for the union true | false.

// null and undefined

function doSomething(x: string | null) {
  if (x === null) {
    console.log("Please pass in a string");
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething(null); // Please pass in a string
doSomething("world"); // Hello, WORLD

// Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously(10); // 10
// liveDangerously(null); // runtime error: Cannot read properties of null (reading 'toFixed')
// liveDangerously(); // runtime error: Cannot read properties of undefined (reading 'toFixed')

interface ColorCoding {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

const colorCoding: ColorCoding = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
function decodedResistorValue(
  color1: string,
  color2: string,
  color3: string,
): string {
  let value: number[] = [];
  let result = "";
  [color1, color2, color3].forEach((color) => {
    if (color in colorCoding) {
      let clr = color as keyof ColorCoding;
      value.push(colorCoding[clr]);
    }
  });
  let strArr = value.join("");
  if (strArr === "000") {
    result = strArr.slice(0, 1) + " ohms";
  } else if (strArr.endsWith("0")) {
    result = strArr.slice(0, 2) + " ohms";
  } else if (strArr.endsWith("1")) {
    result = strArr.slice(0, 2) + "0 ohms";
  } else if (strArr.endsWith("2")) {
    result = strArr.slice(0, 2) + "00 ohms";
  } else {
    result = strArr.slice(0, 2) + " kiloohms";
  }

  return result;
}

console.log(decodedResistorValue("black", "black", "black"));
