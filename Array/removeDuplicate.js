let arr = [0,0,1,1,1,2,2,3,3,4]

let i = 0 , j = 0
while(i<=arr.length-1){
    if (arr[i] !== arr[i+1]) {
      arr[j] = arr[i];
      j++;
    }
    i++
}
console.log(j)
console.log(arr)