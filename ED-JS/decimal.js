function dec(n) {
  var stack = [], rest

  while (n > 0) {
    rest = Math.floor(n % 2)
    stack.unshift(rest)
    n = Math.floor(n / 2)
  }

  return stack.join("").toString()
}

console.log(dec(25))
console.log(dec(45))