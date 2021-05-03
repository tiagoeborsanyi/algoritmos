// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = []
  
  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1;
  let startColumn = 0, endColumn = n - 1, startRow = 0, endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  console.log(results)
  return results
}

matrix(4)

module.exports = matrix;

// function matrix(n) {
//   const results = []
//   let counter = 1, startColumn = 0, endColumn = n, startRow = 0, endRow = n

//   if (startColumn <= endColumn && startRow <= endColumn) {
//     for (let c = startColumn; c <= endColumn; c++) {
//       results.push([startRow])[counter]
//       counter++
//     }
//     startRow++
//     for (let c = startRow; c <= endRow; c++) {
//       results.push([counter])[endColumn]
//       counter++
//     }
//     endRow--
//   }
//   console.log(results)
// }