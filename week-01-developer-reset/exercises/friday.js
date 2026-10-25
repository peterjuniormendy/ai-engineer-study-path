// Week 1 · Friday
// Task: Group a list of words by their first letter using reduce.
// Write your solution below, run it, then commit and push.

const words = [
  "come",
  "communication",
  "Excellence",
  "education",
  "computer",
  "circle",
];

const groupedWords = (words) => {
  return words.reduce((grouped, word) => {
    let key = word.charAt(0).toLowerCase();
    if (key in grouped) {
      grouped[key].push(word);
    } else {
      grouped[key] = [word];
    }
    return grouped;
  }, {});
};
console.log(groupedWords(words));
