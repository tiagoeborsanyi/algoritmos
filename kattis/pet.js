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
          

          let p;
          const comp = [a.split(' '), b.split(' '), c.split(' '), d.split(' '), e.split(' ')]
          const ganhador = comp.map(el => el.reduce((acc, val) => parseInt(acc) + parseInt(val)))
          p = ganhador
          const ganhadorPontos = p.sort()
          const ganhadorPosicao = comp.map(el => el.reduce((acc, val) => parseInt(acc) + parseInt(val))).findIndex(el => el === ganhadorPontos[ganhadorPontos.length-1]) + 1
          console.log(ganhadorPosicao, ganhadorPontos[ganhadorPontos.length-1])



        })
      })
    })
  })
})