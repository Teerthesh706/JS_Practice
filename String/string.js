// let str = "abcd gasdhgbvced jlncjkds jkadhcjkqd n;ioxjcdiks"
function toggleStr(str){
    let ans = ""
    for(let i = 0 ; i < str.length ; i++ ){
        let ascii = str.charCodeAt(i)
        if (ascii >= 65 && ascii <= 90) {
          ans += String.fromCharCode(ascii + 32);
        } else if (ascii >= 48 && ascii <= 64 || ascii >= 32 && ascii <= 47 || ascii >= 91 && ascii <= 96) {
          ans += String.fromCharCode(ascii);
        } else {
          ans += String.fromCharCode(ascii - 32);
        }
    }
    console.log(ans)
}
// toggleStr(str)

//____________________________________________________________________________________________________________________

function palindrome(str1){
   let str = str1.toLowerCase()
   let s = 0
   let e = str.length-1
   while(s<=e){
    if (str[s] !== str[e]) {
      return false
    } 
    s++
    e--
   }
   return true
  }
// console.log(palindrome("what is si tahw"))

//____________________________________________________________________________________________________________________

let str2 = ["pay", "attention", "practice", "attend"]
let pref = "at"
let count = 0
  for(let i = 0 ; i < str2.length ; i++){
    if(str2[i].startsWith(pref))count++
  }
  // console.log(count)

//____________________________________________________________________________________________________________________

let str3 = "hello bhai kaise ho";

function capitilizeFnL(str) {
  let words = str.split(" ");
  let ans = "";
  for (let i = 0; i < words.length; i++) {
    let word = str[i];
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length - 1);
    let last =  word.charAt(word.length - 1).toUpperCase();
    ans = ans + (first + mid + last) + " "
  }

  console.log(ans)
}
capitilizeFnL(str3); 

//____________________________________________________________________________________________________________________

let str4 = "hello bhaiya"
let arr2 = []
let arr = new Array(128).fill(0)
for(let i = 0;i<str4.length;i++){
  let ascii = str4.charCodeAt(i)
  arr[ascii] = arr[ascii]+1
}
for(let i = 0; i<arr.length ; i++){
  if(arr[i]>0){
      arr2.push(String.fromCharCode(i) + "->" + arr[i]);
  }
}
// console.log(arr2)

//____________________________________________________________________________________________________________________;

let a = "hello bhaiya"
let b = "BhaiyHello"
a = a.toLowerCase();
b = b.toLowerCase();
if(a.length === b.length){
  let arr = new Array(26).fill(0)
  for(let i = 0 ; i < a.length ; i++){
      let ascii = a.charCodeAt(i)-97
      arr[ascii]++
  }
  for (let i = 0; i < b.length; i++) {
    let ascii = b.charCodeAt(i)-97;
    arr[ascii]--;
  }
  let isArrEmpty = true;

  for (let num of arr) {
    if (num !== 0) {
      isArrEmpty = false;
      break;
    }
  }

  if (isArrEmpty) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  // console.log("String aren't equal")
}

//____________________________________________________________________________________________________________________;

let s = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

count = 0
for(let i = 0 ; i<s.length; i++){
  const wordCount = s[i].split(" ").length;

  if (wordCount > count) {
    count = wordCount;
  }
  
}
// console.log(count)

//___________________________________________________________________________________________________________________;

let str6 = "async await array float string hello javascript"

let rom = str6.split(" ")
let n = rom.length

for(let i = 0 ; i <n-1 ; i++){
  for(let j = 0 ; j<n-1-i ; j++){
    if(rom[j]>rom[j+1]){
      let temp = rom[j]
      rom[j] = rom[j+1]
      rom[j+1] = temp
    }
  }
}
let ans = rom.join(" ")
// console.log(ans)