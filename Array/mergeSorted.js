// let arr1 = [2,19,8,10].sort((a,b)=>a-b)
// let arr2 = [1,3,5,6,9].sort((a,b)=>a-b)

// let i = 0
// let j = 0
// let k = 0
// let temp = new Array(arr1.length + arr2.length)

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]>arr2[j]){
//         temp[k] = arr2[j]
//         k++
//         j++
//     } else {
//         temp[k] = arr1[i];
//         k++
//         i++
//     }
// }
// while(i<arr1.length){
//     temp[k] = arr1[i]
//     k++
//     i++
// }
// while (j < arr2.length){
//     temp[k] = arr2[j];
//     k++;
//     j++;
// } 
// console.log(temp);


//modifying first array 
let arr1 = [1,2,5,0,0,0]
let arr2 = [2, 3, 6];

let i = arr2.length-1 , j = arr2.length-1, k = arr1.length-1
while(i>=0 && j>=0){
    if(arr1[i]>arr2[j]){
        arr1[k--] = arr1[i--]     
    } else {
        arr1[k--] = arr2[j--];
    }
}
while (j >= 0) {
  arr1[k--] = arr2[j--];
}
console.log(arr1)