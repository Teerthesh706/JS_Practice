let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function grpArr(arr) {
  let res = [];
  let j = 0;
  while (j + 2 < arr.length) {
    let grp = [];
    for (let i = j; i < j + 3; i++) {
      grp.push(arr[i]);
    }
    res.push(grp);
    j = j + 3;
  }
  console.log(res);
}

grpArr(arr);
