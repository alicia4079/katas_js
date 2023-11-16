/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

peliculasPequeñas = []
peliculasMedianas = []
peliculasGrandes = []

for (const film of movies) {
  if (film.durationInMinutes < 100) {
    peliculasPequeñas.push(film)
  } else if (film.durationInMinutes > 100 && film.durationInMinutes < 200) {
    peliculasMedianas.push(film)
  } else {
    peliculasGrandes.push(film)
  }
}

console.log('Películas pequeñas:', peliculasPequeñas)
console.log('Películas medianas:', peliculasMedianas)
console.log('Películas grandes:', peliculasGrandes)
