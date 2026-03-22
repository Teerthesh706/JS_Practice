let arr = [17,18,5,4,6,1]

let i = 0
while(i<arr.length){
    let max = 0
    for(let j = i + 1 ;j<arr.length ; j++){
        if(arr[j]!==undefined){
            max = Math.max(arr[j],arr[j+1])
        }
    }
    console.log(max);
i++
}
