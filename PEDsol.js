// function sumEvenNumberRow(rowNumber) {
//   const rows = [];
//   let startInteger = 2;

//   // loop for creating rows
//   for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
//     let row = createRow(startInteger, currentRowNum);
//     rows.push(row);
//     // gets last element number of last array and adds 2 sets as 1st argument
//     startInteger = row[row.length - 1] + 2;
//   }
//   // pop returns last element array
//   let finalRow = rows.pop();
//   // reduces to one value by adding it all up
//   return finalRow.reduce((a, b) => a + b);
// }

// function createRow(startInterger, rowLength) {
//   const row = [];
//   let currentInteger = startInterger;
//   while (row.length < rowLength) {
//     row.push(currentInteger);
//     currentInteger += 2;
//   }
//   return row;
// }

/*
row number: 1 --> sum of intergers in row: 2
row number: 2 --> sum of intergers in row: 10
row number: 4 --> sum of intergers in row: 68
*/

// console.log(sumEvenNumberRow(1)); // 2
// console.log(sumEvenNumberRow(2)); // 10
// console.log(sumEvenNumberRow(4)); // 68
// console.log("-----------------------------");

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4,6]
// start: 8, length: 3 --> [8,10,12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4,6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// --------------------------------------------------------------

// let produce = {
//   apple: "Fruit",
//   carrot: "Vegetable",
//   pear: "Fruit",
//   broccoli: "Vegetable",
// };

// function selectFruit(produceList) {
//   // creates array of the objects keys
//   let produceKeys = Object.keys(produceList);
//   let selectedFruits = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     // retrieves current key from produuceKeys array using index
//     let currentKey = produceKeys[counter];
//     // using bracket notation, we can retrieve value from inputing the key name
//     let currentValue = produceList[currentKey];

//     if (currentValue === "Fruit") {
//       // assigns new key value pair to new empty object
//       selectedFruits[currentKey] = currentValue;
//     }
//   }
//   return selectedFruits;
// }

// console.log(selectFruit(produce));

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}
