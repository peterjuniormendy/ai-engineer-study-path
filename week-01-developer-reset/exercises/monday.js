// Week 1 · Monday
// Task: On an array of 5 prices, use map, filter and reduce once each. Log each result.
// Write your solution below, run it, then commit and push.

const prices = [100, 200, 300, 400, 500];

// Use map to double each price
const doubledPrices = prices.map((price) => price * 2);
console.log(doubledPrices);

// Use filter to get prices over 200
const filteredPrices = prices.filter((price) => price > 200);
console.log(filteredPrices);

// Use reduce to sum all prices
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

const properties = [
  { title: "2-bed flat", price: 250000 },
  { title: "3-bed house", price: 350000 },
  { title: "1-bed studio", price: 150000 },
  { title: "4-bed villa", price: 450000 },
  { title: "5-bed mansion", price: 550000 },
];

const titles = properties.map((property) => property.title);
console.log(titles);

const averagePrice =
  properties.reduce((sum, property) => sum + property.price, 0) /
  properties.length;
console.log(`£${averagePrice.toLocaleString("en-GB")}`);

// Use sort to sort the prices in ascending order. Then sort them in descending order. Log both results.
const sortedPricesAsc = [...prices].sort((a, b) => a - b);
console.log(sortedPricesAsc);

const sortedPricesDesc = [...prices].sort((a, b) => b - a);
console.log(sortedPricesDesc);
