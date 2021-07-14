import { defaultEquals } from './util'
import { Node } from './linked-list-models'

export default class Listas {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // Inseri um elemento ao final da lista
  push(element) {
    // criamos um novo node passando 'element' como seu valor
    const node = new Node(element)
    let current
    // caso a lista esteja vazia o valor de head (cabeça) é null ou undefined
    if (this.head == null) {
      this.head = node
      // O ultimo node 'nó' da lista sempre terá um valor undefined ou null
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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  removeAt(index) {
    // Verifica valores fora do intervalo
    if (index >= 0 && index < this.count) {
      let current = this.head
      // remove o primeiro item
      if (index === 0) { // remove o primeiro elemento da lista
        // passando current.next para head, o head vai apontar para o segundo elemento da lista e o primeiro é sobrescrito
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
        // let previous
        // for (let i = 0; i < index; i++) {
        //   previous = current
        //   current = current.next
        // }
        // // faz a ligação de previous com next de current: pula esse elemento para remove-lo
        // previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
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

// const list = new Listas()
// list.push(10)
// list.push(20)
// list.push(30)
// console.log('get ', list.getElementAt(1))
// console.log('remove ', list.removeAt(1))
// console.log('get ', list.getElementAt(1))
// console.log(list.head)