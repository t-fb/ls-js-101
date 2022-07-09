// 1.
[1, 2, 3].filter((num) => "hi");
// [1,2.3]
/* 
sol: .filter() perfroms selection on the truthiness of the callbacks return value
tho hi is not in the array its still a truthiness value
returns new array of all the elements from orginal array
*/

//-----------------------------------------------------------
// 2.
[1, 2, 3].map((num) => {
  num * num;
});
// [ undefined, undefined, undefined ]
/* 
sol: no explicit return statement im bracket braes
returns undefined for each element
*/

// 3.
[1, 2, 3].map((num) => num * num);
// [1, 4, 9]
// without braces it works

//-----------------------------------------------------------

// 4.
["ant", "bear", "caterpillar"].pop().length;
// 11
/*
sol: pop() removes last element and returns it
length evaluates returns value of the string 'caterpillar'
.length counts its characters
*/
//-----------------------------------------------------------

// 5.
[1, 2, 3].every((num) => {
  return (num = num * 2);
});
/*
2
4
6
true

sol: 
callback function returns 2 4 6
.every() returns boolean 
each element returns truthy values so method returns true

*/
//-----------------------------------------------------------

// 6.
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// [ 1, 1, 1, 1, 1 ]
/*
1st para: what to fill it with
2nd and 3rd = fill from starting index to ending index
*/

//-----------------------------------------------------------

// 7.
["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});
// [undefined, 'bear']
// sol: no explicit return therefore it returns undefined when it doesnt meet condition

//-----------------------------------------------------------

// 8.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});
// flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
/*
iteration
sol: name argument: element
index argument: index of array
reassign flinstonesObj to object
by bracket notation [name] = index
*/

//-----------------------------------------------------------

// 9.
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let totalAges = 0;

Object.values(ages).forEach((age) => (totalAges += age));
/*
turn the values in ages object into an array
for each element in that array add it to the totalAges variable

Other method:
Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); 
// 6174

*/
// console.log(totalAges);
//-----------------------------------------------------------

// 10.
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
// Math.min finds minimum from array of elements

//-----------------------------------------------------------

// 10.
// let statement = "The Flintstones Rock";

// // create array of characters and exclude the spaces
// let charsInStatement = statement.split("").filter((char = char !== " "));

// let result = {};

// charsInStatement.forEach((char) => {
//   result[char] = result[char] || 0;
//   result[char] += 1;
// });

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let cat = "Butterscotch";
console.log(cat.length);

console.log([] === []);
