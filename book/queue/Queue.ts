class Queue {
  constructor(
    public count: number = 0,
    public lowestCount: number = 0,
    public items: any = {}
  ) {
    this.count = count,
    this.lowestCount = lowestCount,
    this.items = items
  }

  enQueue(element: number): void {
    this.items[this.count] = element
    this.count++
  }

  deQueue(): number | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek(): number {
    return 0
  }

  isEmpty(): boolean {
    return true
  }

  size(): number {
    return 0
  }
}