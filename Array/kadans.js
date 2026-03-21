let arr = [-3, -4, -5, -6];
let max = 0
let sum = 0
for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i]
    if(max < sum) max =sum
    if(sum < 0) sum = 0 
}
 if (max == 0) {
   arr.sort((a, b) => b - a);
   max = arr[0];
 }
console.log(max)