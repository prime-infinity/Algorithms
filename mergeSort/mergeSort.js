let list = [2, 4, 5, 7, 0, 1, 3, 6];
let midPoint = Math.floor(list.length / 2);
//console.log(midPoint);
leftList = list.slice(0, midPoint);
rightList = list.slice(midPoint, list.length);
//console.log(leftList);
//console.log(rightList);

//now lets try to merge the two halves into a new array
let newMerged = [];

//the below is not the correct thing to do
//it simply compares the lists and appends the
//minimum of the comparism to the new list
/*for (let i = 0; i < leftList.length; i++) {
  if (leftList[i] < rightList[i]) {
    newMerged.push(leftList[i]);
  } else {
    newMerged.push(rightList[i]);
  }
}*/

z = 0;
let leftPointer = 0;
let rightPointer = 0;
while (z < 12) {
  if (leftList[leftPointer] < rightList[rightPointer]) {
    newMerged.push(leftList[leftPointer]);
    leftPointer += 1;
  } else {
    newMerged.push(rightList[rightPointer]);
    rightPointer += 1;
  }
  z++;
}
console.log(leftPointer);
console.log(leftList.length, rightList.length);
//console.log(newMerged);
