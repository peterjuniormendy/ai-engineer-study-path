## Introduction to TypeScript

TypeScript is a programming language developed by microsoft to address the shortcomings of JavaScript. It is JavaScript with type checking.+

# Benefits of TypeScript

1. Static Typing
2. Code completion
3. Refactoring
4. Shorthand notations

# Static typing

This is process of declearing variable type at compile time or when coding.

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

Functions
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

// Contextual typing for function - parameter s inferred to have type string

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

Try
Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.

This process is called contextual typing because the context that the function occurred within informs what type it should have.

# Objects

Object Types
Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

Optional Properties
Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

## Advance

# Type aliases

# Union Types

# Intersections

# Literal Types

# Nullable

# Optional Chaining
