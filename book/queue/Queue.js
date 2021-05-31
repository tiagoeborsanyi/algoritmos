"use strict";
class Queue {
    constructor(count = 0, lowestCount = 0, items = {}) {
        this.count = count;
        this.lowestCount = lowestCount;
        this.items = items;
        this.count = count,
            this.lowestCount = lowestCount,
            this.items = items;
    }
    enQueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    deQueue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
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
const queue = new Queue();
console.log(queue.isEmpty());
queue.enQueue('jhon');
queue.enQueue('jack');
console.log(queue.toString());
queue.enQueue('Ana');
console.log(queue.size());
queue.deQueue();
queue.deQueue();
console.log(queue.toString());
