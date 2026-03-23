let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = arr.length
for(let i = 0 ; i < arr.length ; i++){
    for(let j = i+1 ; j < arr[i].length; j++){
        let temp = arr[i][j]
        arr[i][j] = arr[j][i]
        arr[j][i] = temp 
    }
}

for(let i = 0 ; i < n ; i++){
    let start = 0
    let end = n-1
    while(start < end){
        let temp = arr[i][start]
        arr[i][start] = arr[i][end]
        arr[i][end] = temp
        start++
        end--
    }
}
console.log(arr);