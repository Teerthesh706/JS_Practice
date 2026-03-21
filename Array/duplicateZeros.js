let arr = [1,0,2,3,0,4,5,0]
let count = 0 
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]==0){
        count++
    }
}
let j = arr.length-1 + count
let i = arr.length-1
while(i>=0){
     if (j < arr.length) {
        arr[j] = arr[i];
    }
    if (arr[i] === 0) {
        j--; 
        if (j < arr.length) {
            arr[j] = 0;
        }
    }
    i--;
    j--;
}

console.log(arr)