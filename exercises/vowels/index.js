// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

vowels('hi there!')

module.exports = vowels;

// function vowels(str) {
//   const vogal = ['a', 'e', 'i', 'o', 'u']
//   const result = []
//   return vogal.map(v => str.toLowerCase().split('').filter(el => el === v)).join().split(',').join('').length
// }