let list = [2, 4, 5, 7, 0, 1, 3, 6];
let midPoint = Math.floor(list.length / 2);
//console.log(midPoint);
leftList = list.slice(0, midPoint);
rightList = list.slice(midPoint, list.length);
console.log(leftList);
console.log(rightList);

//now lets try to merge the two halves into a new array
let newMerged = [];
for (let i = 0; i < leftList.length; i++) {
  //const e = leftList[i];
  //console.log(e);
  //console.log(i);
  //console.log(leftList[i]);
  //console.log(rightList[i]);
  if (leftList[i] < rightList[i]) {
    //console.log(`${leftList[i]} is less than ${rightList[i]}`);
    newMerged.push(leftList[i]);
  } else {
    //console.log(`${rightList[i]} is less than ${leftList[i]}`);
    newMerged.push(rightList[i]);
  }
}

console.log(newMerged);
