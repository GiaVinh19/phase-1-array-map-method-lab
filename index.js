const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutorials = tutorials.map(tutorial => {
    const splitTutorial = tutorial.split(" ");
    const capitalizedSplitTutorial = splitTutorial.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const joinCapitalizedTutorial = capitalizedSplitTutorial.join(" ");
    return joinCapitalizedTutorial;
  });
  return titleCasedTutorials;
}

console.log(titleCased());

// function capitalizedWord(word) {
//   const splitWords = word.split(' '); // make tutorial into an array of strings
//   const capitalizedsplitWords = splitWords.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1); // word = W + ord
//   });
//   const joinWords = capitalizedsplitWords.join(' '); // make splitTutorial array back into one string
//   return joinWords;
// }