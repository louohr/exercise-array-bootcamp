//Array innehållandes flera objekt
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
// let fruits = ["apple", "pineapple", "banana", "orange", "peach"];
// console.log(fruits);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
let poorUsage = ["Bus", 3.14, ["Train"]];
console.log(poorUsage);

/* 3 */
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log(animals.length);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log(animals[0]);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log(animals[3]);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
animals.splice(1, 1, "Tiger");
console.log(animals);

/* 7 */
/* let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b); */
/* Sätt ihop ovanstående arrayer. */
// console.log(c);

/* 8 */
let a = [1, 2, 3, 7, 8, 9];
let b = [4, 5, 6];
a.splice(3, 0, ...b);
/* Merga in array b på index 3 i array a.. */
console.log(a);

/* 9 */
// let arr = ["a", "b", "c"];
/* Klona ovanstående array. */
// console.log(arr.slice());

/* 10 */
// let fruits = ["kiwi", "apple", "pear"];
/* Lägg till en frukt i slutet av arrayen ovan. */
// console.log(fruits.push("melon"));

/* 11 */
/* let fruits = ["kiwi", "apple", "pear"];
fruits.unshift("grapes"); */
/* Lägg till en frukt i början av arrayen ovan. */
// console.log(fruits);

/* 12 */
/* let fruits = ["kiwi", "apple", "pear"];
fruits.pop(); */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
// console.log(fruits);

/* 13 */
/* let fruits = ["kiwi", "apple", "pear"];
fruits.shift(); */
/* I arrayen ovan, ta bort första frukten i arrayen. */
// console.log(fruits);

/* 14 */
/* let fruits = ["kiwi", "apple", "pear"];
let newFruit = "cherry";
fruits.splice(1, 0, newFruit); */
/* Sätt in en frukt i arrayen ovan på index 1. */
// console.log(fruits);

/* 15 */
/* let fruits = ["kiwi", "apple", "pear"];
let newFruits = ["cherry", "grapes", "melon"];
fruits.splice(2, 0, ...newFruits); */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
// console.log(fruits);

/* 16 */
let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log(names);

/* 17 */
//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//nums.reverse();
/* Spegelvänd på arrayen ovan. */
//console.log("nums:", nums);

/* 18 */
/* let str = "Supercalifragilisticexpialidocious";
let containsN = str.includes("n"); */
/* Kika om strängen ovan innehåller bokstaven n. */
// console.log(containsN); // returns false

/* 19 */
/* let str = "Supercalifragilisticexpialidocious";
let containsX = str.includes("x"); */
/* Kika om strängen ovan innehåller bokstaven x. */
// console.log(containsX); // returns true

/* 20 */
/* let str = "Supercalifragilisticexpialidocious";
let position = str.indexOf("p"); */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
// console.log(position);

/* 21 */
/* let str = "Supercalifragilisticexpialidocious";
let firstFive = str.substring(0, 5); */
/* I strängen ovan, plocka fram de 5 första tecknena. */
// console.log(firstFive);

/* 22 */
let str = "Supercalifragilisticexpialidocious";
let lastSeven = str.substring(str.length - 7);
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log(lastSeven);

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let result = numArray.filter((num) => num > 5); */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
// console.log(result);

/* 24 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let result = numArray.filter((num) => num < 5);
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log(result);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
let adults = persons.filter((person) => person.age > 18);

adults.forEach((person) => {
  console.log(person.name);
});

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
let children = persons.filter((person) => person.age < 18);

children.forEach((person) => {
  console.log(person.name);
});

/* 27 */
let arr = ["beta", "alfa", "gamma"];
arr.sort();
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log(arr);

/* 28 */
let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
nums.sort();
/* Sortera ovanstående array numeriskt. */
console.log(nums);

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
persons.sort((a, b) => a.age - b.age);
console.log(persons);

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
persons.sort((a, b) => b.age - a.age);
console.log(persons);

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */

// solution 1

/* persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(persons); */

// solution 2

/* persons.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(persons); */

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
persons = persons.map((person) => ({
  ...person,
  name: person.name.toUpperCase(),
}));
console.log(persons);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
persons = persons.map((person) => ({
  ...person,
  name: person.name.split("").reverse().join(""),
}));
console.log(persons);

/* 34 */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
/* let fruits = ["apelsin", "päron", "äpple", "kiwi"];
fruits.forEach((fruits) => {
  console.log(fruits);
}); */

/* 35 */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
/* let fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} */

/* 36 */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
/* let fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} */

/* 37 */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
let fruits = ["apelsin", "päron", "äpple", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]} has index ${i}`);
}
