const prompt = require("prompt-sync")();
let arr = []
let n = Number(prompt("Enter the number: "));
for (let i = 0; i < n; i++) {
  let dimension = Number(prompt("Enter the number: "));
  arr[i] = new Array(dimension)
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(prompt("Enter the value"));
  }
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(arr[i][j] + " ");
  }
  console.log();
}
// 4 3 2 1  
// 7 6 5
// 9 8
// 0
// 9 8
// 7 6 5
// 4 3 2 1

let arr1 = Array.from({length:3},()=>new Array(3).fill(0))
// console.log(arr1) //[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]