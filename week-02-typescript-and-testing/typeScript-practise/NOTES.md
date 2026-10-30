## Introduction to TypeScript

TypeScript is a programming language developed by microsoft to address the shortcomings of JavaScript. It is JavaScript with type checking.

# Benefits of TypeScript

1. Static Typing
2. Code completion
3. Refactoring
4. Shorthand notations

# Static typing

This is a process of declearing variable type at compile time or when coding.

# Built-in Types

# JavaScript

number
string
boolean
null
undefined
object

# TypeScript extends

# 1. any

TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

# Benefits of any

The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

unknown
never
enum
tuple

# Arrays

To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.

# Tuples

# Enums

# Functions

Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

NOTE: In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer:

Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:

NOTE: Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements.

Functions Which Return Promises
If you want to annotate the return type of a function which returns a promise, you should use the Promise type:

```
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

Anonymous Functions
Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

Here’s an example:

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameters inferred to have type string

```
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
```

// Contextual typing also applies to arrow functions

```
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

Even though the parameter "s" didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type "s" will have.

This process is called contextual typing because the context that the function occurred within informs what type it should have.

# Objects

Object Types
Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

Optional Properties
Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

## Advance

# Type aliases

Type Aliases
We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
x: number;
y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:

type ID = number | string;

# Interfaces

An interface declaration is another way to name an object type:

```
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the structure of the value we passed to printCoord - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.

Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

Interface Type
Extending an interface

interface Animal {
name: string;
}

interface Bear extends Animal {
honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

Extending a type via intersections

type Animal = {
name: string;
}

type Bear = Animal & {
honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

Adding new fields to an existing interface

interface Window {
title: string;
}

interface Window {
ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

A type cannot be changed after being created

type Window = {
title: string;
}

type Window = {
ts: TypeScriptAPI;
}

// Error: Duplicate identifier 'Window'.

Prior to TypeScript version 4.2, type alias names may appear in error messages, sometimes in place of the equivalent anonymous type (which may or may not be desirable). Interfaces will always be named in error messages.

Type aliases may not participate in declaration merging, but interfaces can.

Interfaces may only be used to declare the shapes of objects, not rename primitives.

Interface names will always appear in their original form in error messages, but only when they are used by name.

Using interfaces with extends can often be more performant for the compiler than type aliases with intersections

For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.

# Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

Defining a Union Type
The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

Working with Union Types
It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

```
function printId(id: number | string) {
  console.log(id.toUpperCase());
} // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
```

The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

For example, TypeScript knows that only a string value will have a typeof value "string":

```
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

# Intersections

# Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

NOTE: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:

const x = "hello" as number;
Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

NOTE: Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:

const a = expr as any as T;

# Literal Types

# Nullable

# Optional Chaining
