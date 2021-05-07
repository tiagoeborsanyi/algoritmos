const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (x) => {
  rl.on('line', (y) => {
    if (x > 0) {
      if (y > 0) {
        console.log(1)
      } else {
        console.log(4)
      }
    } else {
      if (y < 0) {
        console.log(3)
      } else {
        console.log(2)
      }
    }
  })
})


function quadrant (x, y) {
  if (x > 0) {
    if (y > 0) {
      console.log(1)
    } else {
      console.log(4)
    }
  } else {
    if (y < 0) {
      console.log(3)
    } else {
      console.log(2)
    }
  }
}

// quadrant(10, 6)
// 1
// quadrant(9, -13)
// 4