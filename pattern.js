let num = 145;
function checkStrong(num) {
  let ans1 = num;
  let ans = 0;
  while (num > 0) {
    let dig = num % 10;
    let fact = 1;
    for (let i = 1; i <= dig; i++) {
      fact = fact * i;
    }
    ans = ans + fact;
    num = Math.floor(num / 10);
  }
  if (ans == ans1) {
    console.log("It is a strong number");
  } else console.log("It is not a strong number");
}
// checkStrong(num)

//____________________________________________________________

let num1 = 153;
function checkArmStrong(num) {
  let original = num;
  let ans = 0;
  //   let digits = num.toString().length;
  let temp = num;
  let digits = 0;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++;
  }
  while (num > 0) {
    let last = num % 10;
    // ans = ans+(last ** digits)
    let power = 1;
    for (let i = 1; i <= digits; i++) {
      power = power * last;
    }
    ans = ans + power;
    num = Math.floor(num / 10);
  }
  if (ans == original) {
    console.log("It is a Armstrong number");
  } else console.log("It is not a Armstrong number");
}
// checkArmStrong(num1)

//____________________________________________________________

// let n = 5
// for (let i = 0 ; i < n ; i++){
//   for(let j = 0 ; j < n-i ; j++){
//     process.stdout.write(" ")
//   }
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log()
// }
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

//____________________________________________________________

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//    if(i == j || (i+j == n+1)){
//     process.stdout.write("* ")
//    }else {
//     process.stdout.write("  ")
//    }
//   }
//   console.log();
// }
// *       *
//   *   *
//     *
//   *   *
// *       *

//____________________________________________________________

//V shape
let n = 5;
function shapeV(n){for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n*2-1; j++) {
    if(i == j || (i+j == n*2)){
      process.stdout.write("* ")
    }else {
      process.stdout.write("  ")
    }
    }
    console.log();
  }
}
// *               *
//   *           *
//     *       *
//       *   *
//         *

//____________________________________________________________

// Alphabatic triangle

let n = 5;
function alphabetTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += String.fromCharCode(65 + j) + " ";
    }
    console.log(str);
  }
} 
// alphabetTriangle(n)
// A
// A B
// A B C
// A B C D
// A B C D E

//____________________________________________________________

//Hollow Square
let n = 5;

function hollowSquare(n){for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}
// hollowSquare(n)
// * * * * * 
// *       *
// *       *
// *       *
// * * * * *

//____________________________________________________________

// //Number Square
let n = 4;

function numSqur(n){for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(i + " ");
    }
    console.log();
  }
}
// numSqur(n)
// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

//____________________________________________________________

//Right Triangle
let n = 4;
function rightTri(n){for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
// rightTri(n)
// 1 
// 1 2
// 1 2 3
// 1 2 3 4

//____________________________________________________________

// //Inverted Triangle
let n = 4;

function invertedTri(n){for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}
// invertedTri(n)
// 1 2 3 4 
// 1 2 3
// 1 2
// 1

// //Pyramid Pattern
let n = 4;
function pyramid(n){for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// pyramid(n)
//    *
//   ***
//  *****
// *******

//____________________________________________________________

// //Diamond Pattern
let n = 4;
function diamond(n){
  // upper
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }

  // lower
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// diamond(n)
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

//____________________________________________________________

// //Hollow Pyramid
let n = 4;

function hollowPyramid() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      if (j === 0 || j === 2 * i || i === n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
// hollowPyramid(n);
//    *
//   * *
//  *   *
// *******

//____________________________________________________________

// //Number Diamond
let n = 4;
function numDiamond(n){
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }

    for (let j = i - 1; j >= 1; j--) {
      process.stdout.write(j.toString());
    }

    console.log();
  }
}
// numDiamond(n);
//    1;
//   121;
//  12321;
// 1234321;

//____________________________________________________________

// //Concentric Square
let n = 4;
function concentricSqr(){
  let size = 2 * n - 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let val = n - Math.min(i, j, size - 1 - i, size - 1 - j);
      process.stdout.write(val + " ");
    }
    console.log();
    }
}
// concentricSqr(n)

// 4 4 4 4 4 4 4 
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

//____________________________________________________________

// //Zig-Zag Pattern
let n = 5;
function zigZag(n){
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j || i + j === n - 1) {
          process.stdout.write("* ");
        } else {
          process.stdout.write("  ");
        }
      }
    console.log();
  }
}
// zigZag(n)
// *       * 
//   *   *
//     *
//   *   *
// *       *