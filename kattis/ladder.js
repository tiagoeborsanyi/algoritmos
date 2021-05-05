function ladder (h, v) {
  const seno = Math.sin(v*Math.PI/180)
  // console.log(seno)
  const result = h / seno +1 
  console.log(result)
}

// ladder(500, 70)
// 533

ladder(1000, 10)
// 5759
