Array.prototype.insertFirstPosition = function(val) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  console.log(this)
  this[0] = val
}

let number = [1, 2, 3, 4, 5]
console.log(number)
number.insertFirstPosition(-1)
console.log(number)