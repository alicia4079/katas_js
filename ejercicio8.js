/* Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(array) {
  let longestWord = array[0].replace(/[.\s]/g, '')

  for (let i = 1; i < array.length; i++) {
    const currentWord = array[i].replace(/[.\s]/g, '')

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord
    }
  }

  return longestWord
}

const longerAvenger = findLongestWord(avengers)
console.log(longerAvenger)
