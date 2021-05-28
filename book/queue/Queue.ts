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
}