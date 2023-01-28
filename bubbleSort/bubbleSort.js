let list = [5, 2, 7, 4, 1, 6, 3, 0];
function swapValues(fwd, flw) {
  [list[fwd], list[flw]] = [list[flw], list[fwd]];
}

for (i = 1; i < list.length; i++) {
  //console.log(list[i]);
  for (j = 0; j < list.length - 1; j++) {
    //console.log(i, j);
    //console.log(list);
    if (list[i] < list[j]) {
      /*console.log(
        `swapping index [i] ${i} = ${list[i]} with index [j] ${j} = ${list[j]}`
      );*/
      swapValues(i, j);
      //console.log(list);
    }
  }
}

console.log(list);
