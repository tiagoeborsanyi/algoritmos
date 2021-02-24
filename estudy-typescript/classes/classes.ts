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

  protected alterarVelocidade(delta: number): number {
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

// const carro1 = new Carro('ford', 'ka', 185)
// console.log(carro1.acelerar())

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(25)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('f40', 250);
// console.log(f40.marca, f40.modelo);
// console.log(f40.acelerar());
// console.log(f40.frear());

// GETTERS & SETTERS
class Pessoa {
  private _idade : number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    this._idade = valor
  }
}

const pessoal = new Pessoa
pessoal.idade = 10;
console.log(pessoal.idade)

// Atributos e metodos estaticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(Matematica.areaCirc(4))

// CLASSE ABSTRATA
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t+a)
  }
}

class Multiplacação extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t*a)
  }
}

let c1 = new Soma();
c1.executar(1,3,5,4);
// console.log(c1.getResultado())

class Unico {
  private static instance: Unico = new Unico;
  private construtor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date
  }
}

// console.log(Unico.getInstance().agora())

// SOMENTE LEITURA
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// console.log(turboHelice)