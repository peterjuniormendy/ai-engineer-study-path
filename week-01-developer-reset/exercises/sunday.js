// Week 1 · Sunday
// Task: Write formatPrice(250000) that returns "£250,000".
// Write your solution below, run it, then commit and push.

const formatPrice = (price) => {
  return `£${price.toLocaleString("en-GB")}`;
};

console.log(formatPrice(250000)); // Output: "£250,000"
