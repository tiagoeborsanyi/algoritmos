"use strict";
// TUPLAS
// passo o tipo de valor e quantidade de elementos em um array e tenho que seguir exatamente o tipo e quantidade que foi definido
var endereco = ['Av Paulista', 99, ''];
// console.log(endereco)
// ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 101
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor); // 100
// function return string
function returnName() {
    return 'nome';
}
// console.log(returnName())
// Quando uma função nao retornar nada é tipo VOID
function sayHello() {
    console.log('hello');
}
// sayHello()
var teste = function (a, b) {
    return a * b;
};
// console.log(teste(2,2.6))
var calculo;
// OBJETOS
var user = {
    name: 'pedro',
    age: 27
};
// console.log(user)
var functionario = {
    supervisores: ['sup1', 'sup 2', 'sup 3'],
    ponto: function (hora) {
        return 'ryeyer';
    }
};
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        return 'hora';
    }
};
// console.log(funcionario.supervisores, funcionario.baterPonto(8))
// console.log(functionario.supervisores, functionario.ponto(4))
// UNION TYPES
// posso tipar a variavel para receber somente string e number ou outros tipos
var nota = 10;
var contato1 = {
    nome: 'Fulano',
    tel1: '455454',
    tel2: null
};
var contaBancaria1 = {
    saldo: 3456,
    depositar: function (valor) {
        return this.saldo += valor;
    }
};
var correntista1 = {
    nome: 'Ana Maria',
    contaBancaria: contaBancaria1,
    contatos: ['654644545454545', '4568454']
};
correntista1.contaBancaria.depositar(3000);
console.log(correntista1);
