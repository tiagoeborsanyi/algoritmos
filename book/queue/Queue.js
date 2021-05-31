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
        return 0;
    }
    isEmpty() {
        return true;
    }
    size() {
        return 0;
    }
}
