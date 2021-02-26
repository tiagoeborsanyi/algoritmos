interface Humano {
  nome: string,
  idade?: number, //a interrogação diz que esse item é opcional
  [prop: string]: any // passando desse jeito além dessa propriedade ser opcional, ela pode ser de qualquer tipo e nem sabendo o nome da propriedade
  saudar(sobrenome: string): void
}

function saudarComOLa(pessoa: Humano) {
  console.log('Ola ', pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'joana'
}

const pessoa: Humano = {
  nome: 'ana',
  idade: 27,
  saudar(sobrenome: string): void {
    console.log('Ola ', this.nome, sobrenome);
  }
}

// saudarComOLa(pessoa)
// mudarNome(pessoa)
// saudarComOLa(pessoa)
// saudarComOLa({ nome: 'jonas', idade: 20, xyz: true })
// pessoa.saudar('sky')

// Usando classes
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string): void {
    console.log('Ola ', this.nome, sobrenome);
  }
}

const meuCliente = new Cliente
meuCliente.nome = 'Han'
// saudarComOLa(meuCliente)
// meuCliente.saudar('Solo')
// console.log(meuCliente.ultimaCompra)

// Interfaces Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3 ** 10
  return new Array(exp).fill(base).reduce((acc, cur) => acc * cur)
}

console.log(potencia(3, 10))

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}

  abstract d(): void
}

interface Object {
  log(): void
}
Object.prototype.log = function() {
  console.log(this.toString())
}
const x = 2
const y = 3
const z = 4

x.log();