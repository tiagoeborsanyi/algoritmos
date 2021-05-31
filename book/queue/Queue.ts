class Queue {
  constructor(
    private count: number = 0,
    private lowestCount: number = 0,
    private items: any = {}
  ) {
    this.count = count,
    this.lowestCount = lowestCount,
    this.items = items
  }

  enQueue(element: number | string): void {
    this.items[this.count] = element
    this.count++
  }

  deQueue(): object | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek(): number | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.count - this.lowestCount
  }

  clear(): void {
    this.count = 0,
    this.lowestCount = 0,
    this.items = {}
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }

    let objString: string = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enQueue('jhon')
queue.enQueue('jack')
console.log(queue.toString())
queue.enQueue('Ana')
console.log(queue.size())
queue.deQueue()
queue.deQueue()
console.log(queue.toString())