@logarClasse
class Eletrodomestico {
  constructor() {
    console.log('novo...')
  }
}

function logarClasse(contructor: Function) {
  console.log(contructor)
}

new Eletrodomestico