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
const carro1 = new Carro('ford', 'ka', 185);
console.log(carro1.acelerar());
