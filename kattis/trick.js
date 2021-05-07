const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function swapBall (arr) {
  let ball = 1;
  for (let l of arr) {
    if (l == 'A' && ball < 3) {
      ball = 3 - ball
    } else if (l == 'B' && ball > 1) {
      ball = 5 - ball
    } else if (l == 'C' && ball == 1) {
      ball = 3
    } else if (l == 'C' && ball == 3) {
      ball = 1
    }
  }
  return ball
}

rl.on('line', (n) => {
  const moves = n.split('')
  const res = swapBall(moves)
  console.log(res)  
})