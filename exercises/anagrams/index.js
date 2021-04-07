// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}


module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }

//   return true
// }

// function buildCharMap(str) {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

// function anagrams(stringA, stringB) {
//   const replecedA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   const replecedB = stringB.replace(/[^\w]/g, "").toLowerCase()
//   const charMapA = {}
//   const charMapB = {}

//   if (replecedA.length > replecedB.length || replecedB.length > replecedA.length) {
//     return false
//   }

//   for (let char of replecedA) {
//     charMapA[char] = charMapA[char]+1 || 1;
//   }
//   for (let char of replecedB) {
//     charMapB[char] = charMapB[char]+1 || 1;
//   }

//   for (let char in charMapA) {
//     for (let item in charMapB) {
//       if (char === item && charMapB[item] !== charMapA[char]) {
//         return false
//       }
//     }
//   }
//   return true
// }