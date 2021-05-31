class Deque {
  constructor(
    private count: number = 0,
    private lowestCount: number = 0,
    private items: any = {}
  ) {
    this.count = count
    this.lowestCount = lowestCount
    this.items = items
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

export default Deque

const deque = new Deque()
console.log(deque.isEmpty())
// console.log(deque.toString(), ' retre')