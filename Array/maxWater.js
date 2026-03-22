let arr = [1,8,6,2,5,4,8,3,7]

let i = 0
let j = arr.length - 1
let maxWater = 0
let area
while(i < j){
    let min = Math.min(arr[i],arr[j])
    let height = j-i
    area = min*height
    maxWater = Math.max(maxWater, area)
    if(arr[i]<arr[j]){
        i++
    } else {
        j--
    }
}
console.log(maxWater)