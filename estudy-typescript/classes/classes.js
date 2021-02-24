"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano;
    }
}
const aniversario = new Data;
// console.log(aniversario)
class Data2 {
    constructor(dia = 10, mes = 10, ano = 1990) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia,
            this.mes = mes,
            this.ano = ano;
    }
}
const month = new Data2;
// console.log(month)
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome,
            this.preco = preco,
            this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa $${this.precoComDesconto()}`;
    }
}
const p1 = new Produto('sabonete', 2.60);
const p2 = new Produto('shampo', 12.22, .3);
// console.log(p2.resumo(), p2)
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
// const carro1 = new Carro('ford', 'ka', 185)
// console.log(carro1.acelerar())
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(25);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('f40', 250);
// console.log(f40.marca, f40.modelo);
// console.log(f40.acelerar());
// console.log(f40.frear());
// GETTERS & SETTERS
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
}
const pessoal = new Pessoa;
pessoal.idade = 10;
console.log(pessoal.idade);
// Atributos e metodos estaticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(Matematica.areaCirc(4))
// CLASSE ABSTRATA
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplacação extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(1, 3, 5, 4);
// console.log(c1.getResultado())
class Unico {
    construtor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// console.log(Unico.getInstance().agora())
// SOMENTE LEITURA
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// console.log(turboHelice)
