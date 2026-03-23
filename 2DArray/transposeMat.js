let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let arr1 = []
for(let k = 0 ; k < arr[0].length;k++){
    arr1[k] = new Array(arr.length)
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr1[j][i] = arr[i][j] 
  }
}
console.log(arr1)