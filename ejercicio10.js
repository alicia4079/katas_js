const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(array) {
  let totalSum = 0
  for (let number of array) {
    totalSum += number
  }
  const average = totalSum / array.length

  return average
}

const averageNum = average(numbers)
console.log(averageNum)
