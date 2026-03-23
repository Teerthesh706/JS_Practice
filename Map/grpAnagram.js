let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let ans = []
let map = new Map()

// for(let word of arr){
//     let sorted = word.split("").sort().join("")
//        let group = map.get(sorted) || [];
       
//        group.push(word);
       
//        map.set(sorted, group);
// }

for (let word of arr) {
    let sorted = word.split("").sort().join("");
    if(!map.has(sorted)){
        map.set(sorted,[])
    }
    map.get(sorted).push(word)
}

ans = Array.from(map.values())
console.log(ans)