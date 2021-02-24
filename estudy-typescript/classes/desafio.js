"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade += delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objet2D {
    // private base: number = 0;
    // private altura: number = 0;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objet2D {
    constructor(base = 0, altura = 0) {
        super(base, altura);
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(2, 3);
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get nome() {
        return this._primeiroNome;
    }
    set nome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const es = new Estagiario;
es.nome = 'gustavo';
console.log(es.nome);
