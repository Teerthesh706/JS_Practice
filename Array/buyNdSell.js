/let arr = [1,5,3,4]
let max = 0
let min = arr[0]
let profit =0
for(let i = 0 ; i<arr.length ;i++){
    if(arr[i]<min){
        min = arr[i]
    }
    profit = arr[i] - min
    if(profit > max){
        max = profit
    }
}
console.log(max); 