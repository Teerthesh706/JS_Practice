let arr = [1, 2, 3, 4, 5];
let totalSum = 0;
let totalMax = 0

arr.forEach((e)=>totalMax+=e)
// console.log(totalMax);

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    // Math.abs ensures the difference is always non-negative
    totalSum += Math.abs(arr[i] - arr[j]);
  }
}
// console.log(res)

let arr1 = [1, 2, 3, 4, 5];
let res = [];
for (let i = 0; i < arr1.length; i++) {
  if (i == 0) {
    res.push(arr1[i] * arr1[i + 1]);
  } else if (i == arr1.length - 1) {
    res.push(arr1[i] * arr1[i - 1]);
  } else {
    res.push(arr1[i - 1] * arr1[i + 1]);
  }
}
// console.log(res)

let arr2 = [1, 2, 1, 2, 1, 3];
let n = arr2.length;
let sum = 0;
let sum2 = 0;
for (let i = 0; i < n / 2; i++) {
  sum += arr2[i];
}
for (let i = n / 2; i < n; i++) {
  sum2 += arr2[i];
}
let ans1 = Math.abs(sum - sum2);
// console.log(ans1)

let arr3 = [2,6,3,1,9,8,5];
let m = Math.floor(arr3.length/2)
let s = [];
let s2 = [];
for (let i = 0; i < m; i++) {
  s.push(arr3[i])
}
for (let i = m; i < arr3.length; i++) {
  s2.push(arr3[i]);
}
s.sort((a,b)=>a-b)
s2.sort((b,a)=>a-b)
let done = s.concat(s2)
// console.log(done)