// TUPLAS
// passo o tipo de valor e quantidade de elementos em um array e tenho que seguir exatamente o tipo e quantidade que foi definido
let endereco: [string, number, string] = ['Av Paulista', 99, '']
// console.log(endereco)

// ENUMS
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul // 101
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor) // 100

// function return string
function returnName(): string {
    return 'nome'
}
// console.log(returnName())

// Quando uma função nao retornar nada é tipo VOID
function sayHello(): void {
    console.log('hello')
}
// sayHello()

const teste = function (a: number, b: number) : number {
    return a * b
}
// console.log(teste(2,2.6))

let calculo: (a:number, b: number) => number

// OBJETOS
let user: {name: String, age: number} = {
    name: 'pedro',
    age: 27
}
// console.log(user)

let functionario: { supervisores: string[], ponto: (a: number) => string} = {
    supervisores: ['sup1', 'sup 2', 'sup 3'],
    ponto(hora: number): string {
        return 'ryeyer'
    }
}
let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        return 'hora'
    }
}
// console.log(funcionario.supervisores, funcionario.baterPonto(8))
// console.log(functionario.supervisores, functionario.ponto(4))

// UNION TYPES
// posso tipar a variavel para receber somente string e number ou outros tipos
let nota: number | string = 10

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '455454',
    tel2: null
}
// console.log(contato1.nome, contato1.tel1, contato1.tel2)

// OBJETOS
type ContaBancaria = {
    saldo: number,
    depositar: (val: number) => number
}
type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

const contaBancaria1: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): number {
        return this.saldo += valor
    }
}
const correntista1: Correntista = {
    nome: 'Ana',
    contaBancaria: contaBancaria1,
    contatos: ['65464', '4568454']
}

correntista1.contaBancaria.depositar(3000)
console.log(correntista1)