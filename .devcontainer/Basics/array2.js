const marvel_heros = ["thor", "Ironamn", "spiderman"]
const dc = ["superman", "flash", "batman"]
//marvel_heros.push(dc)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//const a = marvel_heros.concat(dc)
//console.log(a);


const all_new_heros = [...marvel_heros,...dc]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray([1,2,34]));
console.log(Array.from("Aman "));
console.log(Array.from({name: "hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score2));


