let arr = [2,0,2,1,1,0]

function swap(arr,a,b){
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
function sortColor( arr ){
    let i = 0;
    let j = 0; 
    let k = arr.length - 1;

    while (i <= k) {
      if (arr[i] === 0) {
        swap(arr, i, j);
        i++;
        j++;
      } else if (arr[i] === 2) {
        swap(arr, i, k);
        k--;
      } else {
        i++;
      }
    }
    console.log(arr);
}
sortColor(arr);