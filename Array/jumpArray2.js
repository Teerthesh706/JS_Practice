let arr = [3,2,1,0,4]
let i = 0;
let count = 0;
let farthest = 0;
let curr = 0;

while (i < arr.length - 1) {
 
  farthest = Math.max(farthest, i + arr[i]);
  if (i === curr) {
    count++;
    curr = farthest; 

    if (curr >= arr.length - 1) break;
  }

  i++;
}
console.log(count)