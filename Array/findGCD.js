function gcd(a, b){
  return b === 0 ? a : gcd(b, a % b);
}
function findGCD(arr, index = 0){
  if (index === arr.length - 1) {
    return arr[index];
  }
  return gcd(arr[index], findGCD(arr, index + 1));
}
function findArrayGCD(arr) {
    const result = findGCD(arr);
    console.log(result)
}

let arr = [15,12,21,30]
findArrayGCD(arr);