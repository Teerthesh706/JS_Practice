let str = "hello bhai kaise ho";

function capitilizeFnL(str) {
  let words = str.split(" ");
  let ans = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length - 1);
    let last = word.charAt(word.length - 1).toUpperCase();
    ans = ans + (first + mid + last) + " ";
  }

  console.log(ans);
}
capitilizeFnL(str);
