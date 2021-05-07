const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  const res = n.split(' ')
  const mult = res[0] * (res[1] - 1) + 1
  console.log(mult)
})