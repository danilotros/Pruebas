A = [1, 3, 46, 1, 3, 9]
B = []
C = []
D = []
target = 47
for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A.length - 1; j++) {
    if (A[i] + A[j] == target) {
      console.log(`(${A[i]},${A[j]})`)
      if (A[i] > A[j]) {
        B.push([A[j], A[i]])
      } else {
        B.push([A[i], A[j]])
      }
      B.map(el => {
        if (!(el in D)) {
          D[el] = true
          C.push(el)
        }
      })
    }
  }
}

for (let i = 0; i < C.length; i++) {
  console.log(C[i])
}