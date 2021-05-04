const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vals = [], res = []
rl.on('line', ([...s]) => {
  vals.push(s)
  const arr = []
  for (let k of vals) {
    arr.push(parseInt(k.join('')))
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]%42) {
      
      if (!res.find(el => el === arr[i]%42)) {
        res.push(arr[i]%42)
      }
    }
  }
  console.log(res.length+1)
})

