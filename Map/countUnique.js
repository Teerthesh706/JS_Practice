let arr = [2, 1, 3, 2, 4, 4, 5, 3];
let sum = 0;
let map = new Map();

for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}
console.log(map)
console.log("Unique elements:");
for (let [num, count] of map) {
  if (count === 1) {
    console.log(num); 
    sum += num;
  }
}

console.log("Sum:", sum);
