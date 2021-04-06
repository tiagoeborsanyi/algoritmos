// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const newArr = []
  let a = []
  array.map((item, index) => {
    a.push(item)
    if (a.length === size) {
      newArr.push(a)
      a = []
    }
  })
  if (array.length % size !== 0) {
    const extract = array.slice(-Math.abs(array.length % size))
    newArr.push(extract)
  }
  return newArr
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.length % 5);

module.exports = chunk;
