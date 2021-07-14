import { defaultEquals } from './util'
import { Node } from './linked-list-models'

export default class Listas {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) { // obtem o ultimo item
        current = current.next
      }
      // e atribui o novo elemento a next para criar a ligação
      current.next = node
    }
    this.count++
  }

  insert(element, position) {

  }

  getElementAt(index) {

  }

  remove(element) {

  }

  indexOf(element) {

  }

  removeAt(element) {
    
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count
  }

  toString() {

  }
}