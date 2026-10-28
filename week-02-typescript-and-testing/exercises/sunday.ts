// Week 2 · Sunday
// Task: Write a Property type (try it in the TS Playground first).
// Write your solution below, run it, then commit and push.

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
