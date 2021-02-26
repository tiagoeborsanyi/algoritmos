"use strict";
function saudarComOLa(pessoa) {
    console.log('Ola ', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'joana';
}
const pessoa = {
    nome: 'ana',
    idade: 27,
    saudar(sobrenome) {
        console.log('Ola ', this.nome, sobrenome);
    }
};
// saudarComOLa(pessoa)
// mudarNome(pessoa)
// saudarComOLa(pessoa)
// saudarComOLa({ nome: 'jonas', idade: 20, xyz: true })
// pessoa.saudar('sky')
// Usando classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Ola ', this.nome, sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return new Array(exp).fill(base).reduce((acc, cur) => acc * cur);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
