const Marvel_Heros = ["thor", "ironman", "captain america", "hulk", "spiderman"]

const dc_Heros = ["supermen", "batman","flash",]

// Marvel_Heros.push(dc_Heros);
// console.log(Marvel_Heros);
// console.log(Marvel_Heros[5][1]);

// const AllHeros = Marvel_Heros.concat(dc_Heros);
// console.log(AllHeros);

// const all_new_Heros = [...Marvel_Heros, ...dc_Heros];
// console.log(all_new_Heros);

const another_array = [1,2,3,[4,5],6,7,[8,9,10,[11,12,13,[14,15,16]]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name: "Abhishek"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
