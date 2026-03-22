let arr = [-1,0,1,2,-1,4]
arr.sort((a,b)=>a-b)
let result = []
for(let i = 0 ; i< arr.length-2 ; i++){
    if(i!==0 && arr[i-1] == arr[i]){
            continue
        }
    let  j = i+1
    let k = arr.length-1
    while(j<k){
        let sum = arr[i]+arr[j]+arr[k]
        let temp = []
        if(sum == 0){
            temp = [arr[i],arr[j++],arr[k--]]
            result.push(temp)
            while(j<k && arr[j-1]==arr[j]){
                j++
            }
            while (j < k && arr[k + 1] == arr[k]) {
              k--;
            }
        }else if(sum<0){
            j++
        } else{
            k--
        }
    }
}
console.log(result)