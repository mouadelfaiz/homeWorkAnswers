////////////////////////////////////
// Part I: HTML & CSS
////////////////////////////////////
//first vidoe// I got this! I am ready to code
//second vidoe// I feel pretty good about the material, but some extra review would help
//third vidoe// I got this! I am ready to code
//fourth vidoe// I feel pretty good about the material, but some extra review would help

//////////////////////////
//Part II: JavaScript Reps
/////////////////////////


///////////////////////
//Easy Going
///////////////////////////

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

///////////////////////////
//Get Even
////////////////////////

// for (let i = 0 ; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

///////////////////////////////////
//Fizz Buzz
////////////////////////////

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         if ( i % 5 === 0) {
//             console.log("FizzBuzz")
//         }if (i % 5 === 0) {
//             console.log("Buzz")
//         }
//     }if (i % 3 === 0) {
//         console.log("Fizz")
//     }
// }


/////////////////////////////////
//Wild Wild Life
///////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] += 1;
// wolfy[3] = "Gotham City";
// dart.push("Hawkins");
// wolfy[0] = ("Gameboy")
// console.log(plantee)
// console.log(wolfy)
// console.log(dart)
// console.log(wolfy)
//////////////////////////////////////////
//Yell at the Ninja Turtles
///////////////////////////////////

// const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for (const ninjas of ninja) {
//     console.log(ninjas.toUpperCase())
// }

////////////////////////////////////////////////
//Methods, Revisited
///////////////////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

favMovies.push('Fight Club')
favMovies.push('Interstaller')
console.log(favMovies.indexOf('Titanic'));
console.log(favMovies)
// 1.//////////////////
favMovies.sort()// this method it sort array element by alphabetic
// 2.//////////////////////
favMovies.pop()
// 3.//////////////////////////
favMovies.push("Guardians of the Galaxy")
// 4.///////////////////////////////
favMovies.reverse()
// 5./////////////////////////////////////
favMovies.shift()
// 6./////////////////////////////////////////
favMovies.unshift()// it does not do anything
// 7.////////////////////////////////////////////////
favMovies.splice(favMovies.indexOf('Django Unchained'),1, "Avatar")
// 8.////////////////////////////////////////////////////////////
console.log(favMovies.slice(0, Math.floor(favMovies.length / 2)))
// 9.////////////////////////////////////////////////////////////////////
let middleArr = favMovies.slice(0, Math.floor(favMovies.length / 2))
// 10./////////////////////////////////////////////////////////////////////////////
console.log(middleArr)
// 11./////////////////////////////////////////////////////////////////////////////////////
console.log(favMovies.indexOf("Fast and Furious"))// it give as the valua of 15 because the slice methods does not effect the original array
//12./////////////////////////////////////////////////////////////////////////////////////////// 
//we use const because we know that we are not going to change the favMovies array


//////////////////////////////////////////////////
//Where is Waldo
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//Excited Kitten
////////////////////////////////////////////////////////////////



//////////////////////////////////////
//Find the Median
///////////////////////////////////////


//////////////////////////////////////
//Hungry for More?
/////////////////////////////////////