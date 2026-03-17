let first = 0 , second = 1, n = 5

// process.stdout.write(first+" " + second+" ")
// function fibo( n , first , second){
//     if( n == 0 ) return
//     let third = first + second
//     process.stdout.write(third + " ")
//     fibo(n-1, second, third)
// }
// fibo(n, first, second)


function fiboSum(n){
    if(n==0||n==1) return n
    return fiboSum(n-1)+fiboSum(n-2)
}
console.log(fiboSum(6));
