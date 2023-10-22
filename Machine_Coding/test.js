const countWords = (s) => {
  const wordsArray = s.split(' ');

  const result = wordsArray.reduce((acc, wordString) => {
    acc[wordString] = (acc[wordString] || 0) + 1;
    return acc;
  }, {});

  return result;
};

const wordFrequency = countWords(sentence);
console.log(wordFrequency);
    return result;

}
const wordFrequency = countWords(sentence);
console.log(wordFrequency);