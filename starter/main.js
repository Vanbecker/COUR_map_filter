import movies from "./movies.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note solution alcternative avec .sort()

// let bestMovies = movies[0]

// movies.forEach((mov) => {
//     if (mov.rate >= bestMovies.rate) {
//         bestMovies = mov
//     }
// })

// console.log(bestMovies.title)

////////////////////////////avec sort()

// movies.sort((a, b) => {
//     return b.rate - a.rate;
// })

// console.log(movies[0].title)

// e. Logger le titre du film le plus ancien

// let oldMovies = movies[0]

// movies.forEach((movies) => {
//     if (movies.year <= oldMovies.year) {
//         oldMovies = movies
//     }
// })

// console.log(oldMovies.title)

////////////////////////////avec sort()

// movies.sort((a, b) => {
//     return a.year - b.year
// })

// console.log(movies[0].title)


//e.bis somme total des elements du tableau

// let arr = [1, 3, 8, 2, 5]

// let total = 0;

// arr.forEach((kutfiy) => {
//     total += kutfiy
// })

// console.log(total)

//e.bis2

// let arrStr = ['Bye', 'Tchuss', 'Ciap', 'Au revoir']

// let sentence = ''

// //foreach
// arrStr.forEach((azerty, index) => {

//     if (index == arrStr.length - 1) {
//         sentence += azerty
//     } else {
//         sentence += azerty + ', '
//     }

// })

// console.log(sentence)
// //console.log(total)




// f. Logger tous les titres de film qui ont au moins 3 acteurs

// let moviesTitle = []

// movies.forEach((currentElement) => {
//     if (currentElement.actors.length >= 3) {
//         moviesTitle.push(currentElement.title)
//     }
// })

// AUTRES METHODE
// const filtereMovies = movies.filter((el) => {
//     return el.actors.length >= 3
// })

// console.log(filtereMovies)

// const filterMovieTitles = filtereMovies.map((currentElement) => {
//     return currentElement.title
// })

// console.log(filterMovieTitles)

//EXEMPLE

// const arr = ['hello -- english', 'salut -- français', 'bye -- english', 'au revoir --français', 'Guten tag']

// function filterByLanguage(lang, array) {
//     const filtereArr = array.filter((el) => {
//         return el.includes('')

//     })
//     return filtereArr
// }
// const result = filterByLanguage('français', arr)
// console.log(result)




// EXEMPLE

// let words = ['fenetre', 'velux', 'porte', 'cheminee']

// const filtereWords = words.filter((word) => {
//     return word.length > 6
// })
// console.log(filtereWords)




// console.log(threeActor.title)

// let threeActor = movies[0]

// movies.forEach((el) => {
//     if (el.year <= threeActor.actors) {
//         threeActor = movies
//     }
// })


// movies.forEach()

// console.log(oldMovies.title)



// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

// function getAllTitles(arr) {
//     const mappedArr = arr.map((element) => {
//         return element.title
//     })
//     return mappedArr;
// }

// const result = getAllTitles(movies)

// console.log(result)


// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

// function getmoviesByYear(annee, arr) {
//     const filteredArray = arr.filter((element) => {
//         return element.year === annee
//     })
//     const mappedFilteredArray = filteredArray.map((el) => {
//         return el.title
//     })

//     return mappedFilteredArray

// }

// const result = getmoviesByYear(1994, movies)

// console.log(result)

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

function getrealmovie(realisateur, arr) {
    const filteredArray = arr.filter((element) => {
        return element.director === realisateur
    })
    const mappedFilteredArray = filteredArray.map((el) => {
        return el.title
    })

    return mappedFilteredArray

}

const result = getrealmovie(`Christopher Nolan`, movies)

console.log(result)

//try catch récap
