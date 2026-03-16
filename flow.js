// "===" is use for strict checking which also include type of the data, "!==" same for this

//falsy value: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy value: "0", 'false', " ", [], {}, function(){}, etc...

//how to check whether the object is empty or not

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    //console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 20 //20
// val1 = undefined ?? 34 //34
// val1 = null ?? undefined //undefined
// val1 = undefined ?? null //null
console.log(val1);

//Terniary Operator (cond ? true : false) //Mini if else
