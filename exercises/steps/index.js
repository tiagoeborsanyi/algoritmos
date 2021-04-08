// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
// function steps(n) {
//   const arr = []

//   for (let i = 0; i < n; i++) {
//     let test = Array(n).fill('#', ' ', n-i)
//     arr.push(test)
//   }
  
//   arr.reverse().map(item => {
//     let text = []
//     for (let hash of item) {
//       if (hash == null) {
//         text.push(' ')
//       }
//       text.push(hash)
//     }
//     console.log(text.join(''))
//   })
// }

steps(2)

module.exports = steps;
