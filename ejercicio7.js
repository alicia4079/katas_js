function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberTwo > numberOne) {
    return numberTwo
  } else {
    return numberOne
  }
}

const result = sum(3, 1)
console.log(result)
const result2 = sum(4, 8)
console.log(result2)
