function divide(arr, f, l) {
  if (f >= l) return 0;
  let mid = Math.floor((f + l) / 2);
  divide(arr, f, mid);
  divide(arr, mid + 1, l);
  merge(arr, f, l, mid);
}

function merge(arr, f, l, mid) {
  let temp = new Array(l - f + 1);

  let i = f, j = mid + 1, k = 0;
  while (i <= mid && j <= l) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++]; 
    }
  }
  while (i <= mid) temp[k++] = arr[i++];
  while (j <= l) temp[k++] = arr[j++];

  //Reinisiating the i and k so to place the element from array to their original place
  ((i = f), (k = 0));
  while (k < temp.length) arr[i++] = temp[k++];
}

let arr = [10, 5, 1, 9, 12, 6, 19];
divide(arr, 0, arr.length - 1);
console.log(arr);
