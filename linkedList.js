const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};
const findGCD = (arr, index = 0) => {
  if (index === arr.length - 1) {
    return arr[index];
  }
  return gcd(arr[index], findGCD(arr, index + 1));
};

const numbers = [12, 15, 21, 30];
const result = findGCD(numbers);

console.log(result); 
