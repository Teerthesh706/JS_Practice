let arr = [[0,1,1],[1,0,1],[1,1,0]]
let swap = (arr,a,b)=>{
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

for(let i = 0 ; i < arr.length ; i++){
        let row = arr[i]
        let k = 0
        let l = arr[i].length-1
        while(k<l){
            swap(row,k,l)
            k++
            l--
        }    
}

for(let i = 0 ; i < arr.length;i++){
    for(let j = 0 ; j< arr[i].length ; j++){
           arr[i][j] = arr[i][j]^1
    }
}
console.log(arr)