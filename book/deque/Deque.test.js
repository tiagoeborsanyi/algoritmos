"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deque_1 = __importDefault(require("./Deque"));
describe('Testes para Deque', () => {
    test('func addBack()', () => {
        const deque = new Deque_1.default();
        const res = deque.addBack('joao');
        console.log(res);
        expect(deque.addBack('joao')).toEqual({ 0: 'joao' });
    });
    test('func isEmpty() true', () => {
        const deque = new Deque_1.default();
        const r = deque.isEmpty();
        expect(r).toBeTruthy();
    });
    test('func isEmpty() false', () => {
        const deque = new Deque_1.default(2, 1, {});
        const r = deque.isEmpty();
        expect(r).toBeFalsy();
    });
    test('func size()', () => {
        const deque = new Deque_1.default(2, 3, {});
        expect(deque.size()).toEqual(-1);
    });
    test('func toString() vazio', () => {
        const deque = new Deque_1.default();
        expect(deque.toString()).toEqual('');
    });
});
