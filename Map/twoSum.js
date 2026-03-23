let arr = [2,7,9,11]

let map = new Map()
let target = 9
let ans = []
// for(let [index,num] of arr.entries()){
//     let sum = target-num
//      if(map.has(sum)){
//         console.log([map.get(sum),index])
//      }else {
//         map.set(num,index)
//      }
// }

for(let i = 0 ; i <arr.length ;i++){
    let sum = target - arr[i]
    if(map.has(sum)){
        ans.push(map.get(sum))
        ans.push(i)
    }else{
        map.set(arr[i],i)
    }
}


console.log(ans)