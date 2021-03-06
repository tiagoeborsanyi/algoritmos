function echo(objeto: any) {
  return objeto
}

// console.log(echo('Joao'))
// console.log(echo(27))
// console.log(echo({nome: 'Joao', idade: 27}))

function echoMelhorado<T>(objeto: T): T {
  return objeto
}

// console.log(echoMelhorado('Joao'))
// console.log(echoMelhorado<number>(27))
// console.log(echoMelhorado({nome: 'Joao', idade: 27}))

// Generics disponiveis na API
const avaliações: Array<number> = [10, 9.3, 7.7]
avaliações.push(8.4)
// avaliações.push('5.5')
// console.log(avaliações)

function imprimir<T> (args: T[]) {
  args.forEach(elemento => console.log(elemento));
}

// imprimir([1,2,3]);
// imprimir<number>([1,2,3])
// imprimir<String>(['um', 'dois', 'tres'])
// imprimir<{nome: string, idade: number}>([
//   {nome: 'Fulano', idade: 22},
//   {nome: 'Cicrano', idade: 25},
//   {nome: 'Beltrano', idade: 26},
// ])

// TIpo Generico
const chamaEcho: <T>(data: T) => T = echoMelhorado

// classes com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R
}

// console.log(new OperacaoBinaria('bom', 'dia').executar())
// console.log(new OperacaoBinaria(3,5).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1+this.operando2
  }
}

// console.log(new SomaBinaria(3,5).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {

  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 2, 2020)
// console.log(new DiferencaEntreDatas(d1, d2).executar());

class Fila<T extends number | string> {
  private fila: Array<T>

  constructor(...args: T[]){
    this.fila = args
  }

  entrar(elemento: T) {
    this.fila.push(elemento)
  }

  proximo(): T {
    const primeiro = this.fila[0]
    this.fila.splice(0,1)
    return primeiro
  }

  imprimir() {
    console.log(this.fila)
  }
}

const fila = new Fila<string>('a', 'b', 'c');
// fila.imprimir()
// console.log('teste')
interface objeto {
  chave: number;
  valor: string
}

class Mapa<T extends objeto> {
  private obj: Array<objeto>

  constructor(){
    this.obj = []
  }

  obter(chave: number): object | undefined {
    if(this.obj.length === 0) {
      return { error: 'classe vazia'}
    }
    if (this.obj.find(e => e.chave === chave) === undefined) {
      return { error: 'chave inexistente'}
    }
    return this.obj.find(e => e.chave === chave)
  }

  colocar(objeto: { chave: number, valor: string }) {
    if (this.obj.length > 1 && this.obj.filter((e, i) => e.chave === objeto.chave).length){
      // console.log('chave ja existe')
      return;
    }
    this.obj.push(objeto)
  }

  limpar() {
    this.obj = []
  }

  imprimir() {
    console.log(this.obj)
  }
}

const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'pedro'});
mapa.colocar({ chave: 2, valor: 'maria'});
mapa.colocar({ chave: 1, valor: 'pedro'});
mapa.colocar({ chave: 3, valor: 'bianca'});
mapa.colocar({ chave: 1, valor: 'pedro'});
console.log(mapa.obter(3));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();