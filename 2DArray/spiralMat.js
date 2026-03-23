let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


let rs = 0
let re = arr.length-1
let cs = 0
let ce = arr[0].length-1
let result = []
while(rs<=re && cs<=ce){
    for(let i = cs ; i<= ce ; i++){
        result.push(arr[rs][i])
    }
    rs++
    for(let i = rs ; i <= re ; i++){
        result.push(arr[i][ce])
    }
    ce--
    for(let i = ce ; i>=cs ; i--){
        result.push(arr[re][i])
    }
    re--
    for(let i = re ; i >=rs ; i--){
        result.push(arr[i][cs])
    }
    cs++
}
console.log(result)