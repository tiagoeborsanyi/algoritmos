"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deque {
    constructor(count = 0, lowestCount = 0, items = {}) {
        this.count = count;
        this.lowestCount = lowestCount;
        this.items = items;
        this.count = count;
        this.lowestCount = lowestCount;
        this.items = items;
    }
    addFront(element) {
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.count = 0,
            this.lowestCount = 0,
            this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}
exports.default = Deque;
const deque = new Deque();
console.log(deque.isEmpty());
// console.log(deque.toString(), ' retre')
