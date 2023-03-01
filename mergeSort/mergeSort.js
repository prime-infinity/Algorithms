let list = [2, 4, 5, 7, 0, 1, 3, 6];

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

function mergeSorted(list) {
  let midPoint = Math.floor(list.length / 2);
  leftList = list.slice(0, midPoint);
  rightList = list.slice(midPoint, list.length);

  let newMerged = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftList.length && rightPointer < rightList.length) {
    if (leftList[leftPointer] < rightList[rightPointer]) {
      newMerged.push(leftList[leftPointer]);
      leftPointer += 1;
    } else {
      newMerged.push(rightList[rightPointer]);
      rightPointer += 1;
    }
  }
  while (leftPointer < leftList.length) {
    newMerged.push(leftList[leftPointer]);
    leftPointer += 1;
  }

  while (rightPointer < rightList.length) {
    newMerged.push(rightList[rightPointer]);
    rightPointer += 1;
  }
  return newMerged;
}
