//forEach do not return any value 
//so we use filter, which is similar to forEach but it return
//The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
// filter only return if the condition is true means we also need to give the condition unlike forEach in which to check condition we need to use ex. if, etc...

const myNum = [1,2,3,4,5,6,7,8,9,10]

myNum.filter( (item) => item>5 ) //[ 6, 7, 8, 9, 10 ]

myNum.filter( (item) => {
    return item > 3 //if we declard scope then its compulsory to use 'return' keyword, we can skip 'return' for oneliner
})


//CHAINING 
//in chaining we can apply no. of map() and filter 
//Map is first use for chaining, we can add filter after map

const chain = [1,2,3,4,5,6,7,8,9]

chain.map( (num) => num*10 ).map((num)=>num+2 ).filter((num)=> num > 32) //[ 42, 52, 62, 72, 82, 92 ]



//Reduce

const reduceMe = [1,2,3,4,5]

printMe = reduceMe.reduce((acc, currVal) => { 
    console.log(`Value of accumulator is ${acc}, and the current value is ${currVal}`);
    return acc+currVal
    // Value of accumulator is 0, and the current value is 1
    // Value of accumulator is 1, and the current value is 2
    // Value of accumulator is 3, and the current value is 3
    // Value of accumulator is 6, and the current value is 4
    // Value of accumulator is 10, and the current value is 5
    // 15
},0)

console.log(printMe);