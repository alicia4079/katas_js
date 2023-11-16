/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada) */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (!newArray.includes(element)) {
      newArray.push(element)
    }
  }
  return newArray
}

const result = removeDuplicates(duplicates)
console.log(result)
