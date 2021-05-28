function Queue() {
  const items = []

  this.enqueue = function(element) {
    items.push(element)
  }

  this.dequeue = function() {
    return items.shift()
  }

  this.front = function() {
    return items[0]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.size = function() {
    return items.length
  }

  this.print = function() {
    console.log(items.toString())
  }
}

// const fila = new Queue()
// fila.enqueue(1)
// fila.enqueue(2)
// fila.enqueue(3)
// fila.enqueue("nome")

// fila.print()

// function PriorityQueue() {
//   const items = []

//   function QueueElement(element, priority) {
//     this.element = element
//     this.priority = priority
//   }

//   this.enqueue = function(element, priority) {
//     const queueElement = new QueueElement(element, priority)
//     let added = false

//     for (let i = 0; i < items.length; i++) {
//       if(queueElement.priority < items[i].priority) {
//         items.splice(i, 0, queueElement)
//         added = true
//         break
//       }
//     }
//     if (!added) {
//       items.push(queueElement)
//     }
//   }

//   this.dequeue = function() {
//     return items.shift()
//   }

//   this.print = function() {
//     for(let i =0; i < items.length; i++) {
//       console.log(`${items[i].element} ${items[i].priority}`)
//     }
//   }
// }

// const pqueue = new PriorityQueue()
// pqueue.enqueue('carlos', 2)
// pqueue.enqueue('Ana', 1)
// pqueue.enqueue('Lucas', 3)

// pqueue.print()

function hotPotato(nameList, num) {
  const queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''

  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // console.log(queue.print())
    eliminated = queue.dequeue()
    console.log(`${eliminated} was eliminated form the hot potato game.`)
  }

  return queue.dequeue()
}

const names = ['joao', 'jose', 'maria', 'ana', 'lucas']
let winner = hotPotato(names, 3)
console.log('The winneris: ', winner)
