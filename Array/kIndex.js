const arr = [10, 20, 30, 40];

function findSum(arr) {
  ans = 0;
  mean = 0;
  n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  mean = ans / n;
  console.log(ans);
  console.log(mean);
}

// findSum(arr)

function findGreatestElementAndIndex(arr) {
  // Write your logic here
  let great = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (great < arr[i]) {
      great = arr[i];
    }
    i++;
  }
  console.log(great);
}

const arr1 = [1, 2, 3, 4, 5, 6, 67, 7, 8, 9, 5, 23.2, 6.45, 34.53345, 98];
// findGreatestElementAndIndex(arr)

function calculateCompoundInterest(P, r, t, n) {
  // Write your logic here
  let power = n * t;
  let base = P * (1 + r / n);
  let ans = Math.pow(base, power);
  let cl = ans - P;
  console.log(cl);
}