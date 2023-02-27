let list = [2, 4, 5, 7, 0, 1, 3, 6];
let midPoint = Math.floor(list.length / 2);
//console.log(midPoint);
leftList = list.slice(0, midPoint);
rightList = list.slice(midPoint, list.length);
console.log(leftList);
console.log(rightList);
