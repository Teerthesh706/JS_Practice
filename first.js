"use strict";
// console.log("hell")
// console.table([])
//DO NOT USE VAR (the scope of var is global)
let score = 33

// Return type of variables in JavaScript
// 1) Primitive Datatypes (Stack allocation)
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes (Heap allocation)
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

const hundreds= 1000000000

// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000 (for India)

let myDate = new Date()
// console.log('====================================');
// console.log(myDate.toString()); 
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log('====================================');


const myArr = [1,2,3,4,5]

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(4));
// console.log(myArr.length);
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// Slice cuts the array but do not change the original array
// Splice cuts the array from the original array

// const dumbArr = [1,2,3,4,[5,6,7], 8,[9,0,2,[6,7,9,[,0]]]]
// const geniusArr = dumbArr.flat(Infinity);
// console.log(geniusArr);

// console.log(Array.isArray("Teerthesh"));
// console.log(Array.from("Teerthesh"));
// console.log(Array.isArray({name:"Teerthesh"})); //Interesting for interviews


