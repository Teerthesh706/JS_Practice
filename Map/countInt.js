let arr = [1, 2, 3, 4, 4, 3, 2, 4, 2, 1];

let map = new Map();

for (let num of arr) {
  if (!map.has(num)) {
    map.set(num, 0);
  }
  map.set(num, map.get(num) + 1);
}
console.log(map);
