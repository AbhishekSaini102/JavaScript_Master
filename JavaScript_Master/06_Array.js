const Marvel_Heros = ["thor", "spiderman", "Ironman"]
const DC_Heros = ["Superman", "batman", "wonderWoman"]

// Marvel_Heros.push(DC_Heros)

// console.log(Marvel_Heros)
// console.log(Marvel_Heros[3][1])
const newHeros = Marvel_Heros.concat(DC_Heros)
// console.log(newHeros)

// console.log(...Marvel_Heros, ...DC_Heros)
// const all_new_Heros = [...Marvel_Heros, ...DC_Heros]
// console.log(all_new_Heros)


// const anotherArray = [1, 2, 3, [4, 5, 6], [7, [8, 9]]]
// const flatArray = anotherArray.flat(Infinity)
// console.log(flatArray)

// console.log(Array.isArray(Marvel_Heros)) // true
// console.log(Array.from("Abhishek")) // true
// console.log(Array.from({name:"Abhishek"})) // true

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]

