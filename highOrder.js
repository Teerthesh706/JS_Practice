//for of loop//

const val1 = [1,2,3,4,5,6]
for (const num of val1) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " "){
        continue
    };
    //console.log(greet); //without space
}

//MAPS
//Map is like array in which every key have unique value and 
//we can not use map on Object
const myMap = new Map()
myMap.set('sage', 'instaID')
myMap.set('hrishi', 'nick name')
myMap.set('teerthesh', 'first name')

//console.log(myMap);
// Map(3) {
//     'sage' => 'instaID',
//     'hrishi' => 'nick name',
//     'teerthesh' => 'first name'
//   }
for (const [keys, values] of myMap) { //destructure of map using []
    //console.log(`the key is ${keys} and the value is ${values}`)
}
// the key is sage and the value is instaID
// the key is hrishi and the value is nick name
// the key is teerthesh and the value is first name

//forin loop
//this is also use for object iteration
const myFolder = {
    game1: "GoW",
    game2: "NFS",
    game3: "RDR2",
    game4: "HCR"
}

for (const key in myFolder) {
    //console.log(`Folder ${key} have the game ${myFolder[key]}`);  
}


//foreach loop

const coding = ["js", "cpp", "py", "java", "ruby"]

coding.forEach( function (num1){
    //console.log(num1);
})

coding.forEach( (num2)=>{
    //console.log(num2);
})

function printMe (item){
    //console.log(item);
}
coding.forEach(printMe) //we have to only give reference ( no need of parenthesis) 

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr); //foreach loop can access my things
// js 0 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// cpp 1 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// py 2 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// java 3 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// ruby 4 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
})

const codingNew = [
    {
        languageName: "JS",
        Use_case: "Frontend"
    },
    {
        languageName: "CPP",
        Use_case: "Programming"
    },
    {
        languageName: "JAVA",
        Use_case: "Backend"
    },
    {
        languageName: "PYTHON",
        Use_case: "Machine Learning"
    }
]

codingNew.forEach((item)=>{
    //console.log(item.languageName); //that's how we get access of any key from object or array come form data set
})