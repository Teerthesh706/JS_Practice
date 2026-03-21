let arr = [[1, 3], [2, 6], [8, 10], [8, 9], [9, 11], [15, 18], [2, 4], [16, 17]]

function mergeInterval(arr){
    if(arr.length === 0 ) return []
    arr.sort((a,b) => a[0] - b[0])
    
    let result = [arr[0]]
    for(let i = 1 ; i < arr.length ; i++){
        let last = result[result.length-1]
        let curr = arr[i];
        if(curr[0] <=   last [1]){
            last[1] = Math.max(curr[1], last[1])
        } else {
            result.push(curr)
        }
    }
    return result
}
console.log(mergeInterval(arr))