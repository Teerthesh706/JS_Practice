let arr = [0,1,0,3,12]

let i = 0
let j = arr.length-1
while(i<=j){
    if(arr[i]==0){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp 
        j--
    } else {
        i++
    }
}
// to sort array
for (let n = 0; n < j; n++) {
  for (let k = 0; k < j - n; k++) {
    if (arr[k] > arr[k + 1]) {
      let temp = arr[k];
      arr[k] = arr[k + 1];
      arr[k + 1] = temp;
    }
  }
}
console.log(arr)