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
