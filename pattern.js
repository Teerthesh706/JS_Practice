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

//_____________________________________________________________________________________________________________________

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
  if (ans == ans1) {
    console.log("It is a Armstrong number");
  } else console.log("It is not a Armstrong number");
}

checkArmStrong(num1)