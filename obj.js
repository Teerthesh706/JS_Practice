 
 const mySym = Symbol("SAGE")
 
 
 myObj = {
    name: "Teerthesh",
    [mySym]: "Hello",
    email: "Teerthesh706@gmail.com",
    age: 20,
    city: "Agra",
    phone: 8279833130,
    nickName: "Hrishi"
 }

//  console.log(myObj[mySym]);
//  console.log(typeof myObj[mySym]);
//  console.log(myObj);
//  console.log(myObj);
//  console.log(myObj.name);
//  myObj.email = "teerthesh706@google.com"
//  console.log(myObj.email);
myObj.greeting = function(){
 console.log(`the name of user is, ${this.name}`);
}
// console.log(myObj);
// console.log(myObj.greeting());
// Object.freeze(myObj)


//==============//

const college = {
   name: "AIET",
   university: "RTU",
   rollno: 161
}

//Object De-sturcturing

// console.log(college.name);
// const {rollno} = college; //Thats how we can access the member of object but without .(dot) operator
const {rollno: NO} = college;
// console.log(rollno);
// console.log(NO);

//============//

//API can be fetch in JSON format (as object or as an array)

//==============//

// function insta(username){
//    console.log(username);
// }
// insta("StrangeSage")


function add(num1, num2){
   return num1+num2
}

// console.log(add(4,5));


//==============//

 //We can pass multiple values by the help of rest (...) operator

 function calculateCarPrice(...num1) {
   return num1
}
function calculateBikePrice(val1, val2, ...num1) {
   return num1
}

// console.log(calculateCarPrice(200, 300, 400)) //[ 200, 300, 400 ]
// console.log(calculateBikePrice(200, 300, 400, 500, 600, 700)) //[ 400, 500, 600, 700 ]
//this will pass us the data in the form of array

const user = {
   userName: "Sage",
   pass: 12345678,
   university: "RTU"
}

function person(anyobject){
   console.log(`The name of user is ${anyobject.userName} and the password is ${anyobject.pass}`);
}

// person(user) //The name of user is Sage and the password is 12345678

// person({
//    userName:"Teerthesh",
//    pass: 87654321
// }) //The name of user is Teerthesh and the password is 87654321


//==============//

const myArr = [1,2,3,4,5,6]

function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(myArr));

//==============//

// console.log(this); //{}


//Arrow function 

const sum = (num1, num2) => {
   return num1 + num2
}

const sum1 = (num1, num2) => num1 + num2 //no need to use return, aka implicit return  
const sum2 = (num1, num2) => (num1 + num2) //same as above

// console.log(sum(5,6)); //11 for all three

//Immediately Invoked Function Expressions (IIFI)

(function first(){
   console.log("I'm First");
})
()