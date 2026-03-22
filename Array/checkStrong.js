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
checkStrong(num)
