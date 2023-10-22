/**
 * Question 1
 * Write a function to count the no.of words in the given sentences
 *
 * @param {string} sentence - The sentence to count the words from.
 * @returns {object} - An object containing the word frequency of the input sentence.
 *                     The keys are the unique words in the sentence, and the values are the number of times each word appears.
 */

// Example usage
const sentence =
  "Fear leads to anger anger leads to hatred hatred leads to conflict conflict leads to suffering";
const wordFrequency = countWords(sentence);
console.log(wordFrequency);
// Output: { Fear: 1, leads: 4, to: 4, anger: 2, hatred: 2, conflict: 2, suffering: 1 }


/**
 * Question 2
 * Merge companies by name
 *
 * @param {Array} companies - An array of company objects.
 * @returns {Object} - An object where the keys are the unique company names and the values are arrays of company objects with the same name.
 */

/**
 * Example Usage:
 */
const companies = [
  {
    name: "Company A",
    id: 1,
  },
  {
    name: "Company B",
    id: 2,
  },
  {
    name: "Company C",
    id: 3,
  },
  {
    name: "Company A",
    id: 4,
  },
  {
    name: "Company B",
    id: 2,
  },
];

const res = mergeCompaniesName(companies);
console.log(res);

// Output: {
//   "Company A": [
//     { name: "Company A", id: 1 },
//     { name: "Company A", id: 4 }
//   ],
//   "Company B": [
//     { name: "Company B", id: 2 },
//     { name: "Company B", id: 2 }
//   ],
//   "Company C": [
//     { name: "Company C", id: 3 }
//   ]
// }
