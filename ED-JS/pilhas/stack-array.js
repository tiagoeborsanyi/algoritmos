// LIFO O ultimo a entrar é o primeiro a sair

const items = new WeakMap()
class Stack {
  constructor() {
    this.set(items, []);
  }

  push(element) {
    // this.items.push(element)
    const s = items.get(this)
    s.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack.peek())
stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())
stack.push(15)
stack.pop()
stack.pop()
console.log(stack.size())