const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  const moves = n.split('')
  let ball = 1;
  for (let i = 0; i <= moves.length; i++) {
    if (moves[i] === 'A') {
      if (ball === 1) {
        ball = 2
      } else if (ball === 2) {
        ball = 1
      } else {
        ball = 3
      }
    }
    if (moves[i] === 'B') {
      if (ball === 1) {
        ball = 1
      } else if (ball = 2) {
        ball = 3
      } else {
        ball = 2
      }
    }
    if (moves[i] === 'C') {
      if (ball === 1) {
        ball = 3
      }else if (ball === 2) {
        ball = 2
      } else  {
        ball = 1
      }
    }
  }
  console.log(ball)
})