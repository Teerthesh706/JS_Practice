let arr = [1, 2, 1, 3, 5, 6, 4];
let i = 1
target = 0
while(i < arr.length){
    if(i==arr.length-1){
        break
    }
    if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        target = i
        i++
    }else {
        i++
    }
}
console.log(target)