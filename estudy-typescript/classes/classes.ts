class Data {
  // Publico por padrão
  public dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia,
    this.mes = mes,
    this.ano = ano
  }
}

const aniversario = new Data
// console.log(aniversario)

class Data2 {
  constructor(public dia: number = 10, public mes: number = 10, public ano: number = 1990) {
    this.dia = dia,
    this.mes = mes,
    this.ano = ano
  }
}

const month = new Data2
// console.log(month)

class Produto {
  nome: string
  preco: number
  desconto: number

  constructor(nome: string, preco: number, desconto: number = 0) {
    this.nome = nome,
    this.preco = preco,
    this.desconto = desconto
  }

  precoComDesconto(): number {
    return this.preco * (1-this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa $${this.precoComDesconto()}`
  }
}

const p1 = new Produto('sabonete', 2.60)
const p2 = new Produto('shampo', 12.22, .3)
// console.log(p2.resumo(), p2)

class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  }

  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('ford', 'ka', 185)
console.log(carro1.acelerar())
