// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUÇÂO DO VIDEO
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = ''

  for (let char of str) {
    // console.log(char)
    charMap[char] = charMap[char]+1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char
    }
  }

  return maxChar;

}

// MINHA SOLUÇÂO
// function maxChar(str) {
//   const chars = {}
//   let aux = ''
//   for (let char of str) {
//     chars[char] = chars[char]+1 || 1;
//   }
//   const valor = Object.values(chars).filter((elemt, index, arr) => elemt > (arr[index+1] || arr[index]))
//   for (let c in chars) {
//     if(chars[c] === valor[0]) {
//       aux = c
//     }
//   }
//   return Object.values(chars).length == 1 ? str :  aux.toString()
// }

module.exports = maxChar;