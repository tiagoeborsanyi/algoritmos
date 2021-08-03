function LinkedList() {
  var Node = function(element) {
    this.element = element
    this.next = null
  }

  var length = 0;
  var head = null

  // Aficiona um elemento ao final da lista
  this.append = function(element) {
    var node = new Node(element)
    var current

    if (head === null) {
      head = node
    } else {
      current = head
      console.log(current)
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }

  // Adiciona um elemento em uma posicao especifica
  this.insert = function(position, element) {

  }

  // remove o elemento de posicao especifica
  this.removeAt = function(position) {

  }

  // remove o elemento element
  this.remove = function(element) {

  }

  // retorna a posicao do elemento
  this.indexOf = function(element) {

  }

  // retorna se esta vazio ou nao a instancia 
  this.isEmpty = function() {

  }

  // retorna o tamanho da instancia
  this.size = function() {

  }

  // converte em string
  this.toString = function() {
    let current = head, string = ''

    while(current) {
      string += current.element + ' '
      current = current.next
    }

    return string
  }

  // imprime no console
  this.print = function() {
    console.log(this.toString())
  }
}

var ll = new LinkedList()
ll.append('joao')
ll.append('jose')
ll.append('maria')
ll.print()