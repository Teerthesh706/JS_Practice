let arr = [5,1,5,2,5,5,3,5,2,3,2,3,3,3,32,23,3,3,3,3,3,32,2,2,2]
let ans = arr[0]
let count = 1
for(let i = 1; i<arr.length;i++){
    if(count == 0){
        ans = arr[i]
        count = 1
    }else if(arr[i]==ans) {
        count++
    }else{
        count--
    }
}
console.log(ans)