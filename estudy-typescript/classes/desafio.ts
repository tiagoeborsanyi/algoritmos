// Exercício 1 - Classe
class Moto {
  constructor(public nome: string, public velocidade: number = 0) {
    this.nome = nome;
    this.velocidade = velocidade
  }

  buzinar(): void {
      console.log('Toooooooooot!')
  }

  acelerar(delta: number): void {
      this.velocidade += delta
  }
}



const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)






// Exercício 2 - Herança
class Objet2D {
  // private base: number = 0;
  // private altura: number = 0;
  constructor (protected base: number = 0, protected altura: number = 0) {}
}

class Retangulo extends Objet2D {
  constructor (base: number = 0, altura: number = 0) {
    super(base, altura);
  }

  public area(): number {
    return this.base * this.altura
  }
}

const retangulo = new Retangulo(2, 3)
console.log(retangulo.area())





// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = '';

  get nome(): string {
    return this._primeiroNome
  }

  set nome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome
    } else {
        this._primeiroNome = ''
    }
  }
}
const es = new Estagiario
es.nome = 'gustavo'
console.log(es.nome)