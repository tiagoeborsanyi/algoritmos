const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (a) => {
  rl.on('line', (b) => {
    rl.on('line', (c) => {
      rl.on('line', (d) => {
        rl.on('line', (e) => {
          let maior = 0, ind = 1;

          const comp = [a.split(' '), b.split(' '), c.split(' '), d.split(' '), e.split(' ')]
          const ganhador = comp.map(el => el.reduce((acc, val) => parseInt(acc) + parseInt(val)))
          
          for (let i = 0; i < 5; i++) {
            if (ganhador[i] > maior) {
              maior = ganhador[i]
              ind = i+1
            }
          }
          console.log(ind, maior)
        })
      })
    })
  })
})