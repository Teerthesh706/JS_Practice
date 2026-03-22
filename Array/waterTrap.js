// let arr = [4, 2, 0, 3, 2, 5];

// let left = new Array(arr.length).fill(0);
// let right = new Array(arr.length).fill(0);

// left[0] = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   left[i] = Math.max(left[i - 1], arr[i]);
// }

// right[arr.length - 1] = arr[arr.length - 1];
// for (let i = arr.length - 2; i >= 0; i--) {
//   right[i] = Math.max(right[i + 1], arr[i]);
// }

// let water = 0;
// for (let i = 0; i < arr.length; i++) {
//   water += Math.min(left[i], right[i]) - arr[i];
// }

// console.log("Left max:", left);
// console.log("Right max:", right);
// console.log("Trapped water:", water);


let arr = [0,6,2,0,3,7,5,2,3,10];

let leftMax = arr[0]
let rightMax = arr[arr.length - 1]
let total = 0
let l = 0
let r = arr.length - 1
while(l<r){
    leftMax = Math.max(leftMax,arr[l])
    rightMax = Math.max(rightMax,arr[r])
    if(leftMax < rightMax){
        total += leftMax - arr[l]
        l++
    } else{
        total += rightMax - arr[r]
        r--
    }
}
console.log(total)