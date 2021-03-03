"use strict";
function echo(objeto) {
    return objeto;
}
// console.log(echo('Joao'))
// console.log(echo(27))
// console.log(echo({nome: 'Joao', idade: 27}))
function echoMelhorado(objeto) {
    return objeto;
}
// console.log(echoMelhorado('Joao'))
// console.log(echoMelhorado<number>(27))
// console.log(echoMelhorado({nome: 'Joao', idade: 27}))
// Generics disponiveis na API
const avaliações = [10, 9.3, 7.7];
avaliações.push(8.4);
// avaliações.push('5.5')
console.log(avaliações);
function imprimir(args) {
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
const chamaEcho = echoMelhorado;
// classes com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('bom', 'dia').executar())
// console.log(new OperacaoBinaria(3,5).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
// console.log(new SomaBinaria(3,5).executar())
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
