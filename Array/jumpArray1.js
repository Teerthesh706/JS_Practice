let nums = [3, 2, 1, 0, 4];

let i = 0;
let farthest = 0;

while (i < nums.length) {
  if (i > farthest) return false;
  
  farthest = Math.max(farthest, i + nums[i]);

  if (farthest >= nums.length - 1) return true;

  i++;
}

return false;
