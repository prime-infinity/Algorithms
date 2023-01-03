let list = [5, 2, 7, 4, 1, 6, 3, 0];

let pointer = 0;

function findLowest(start, array) {
  let smallest = array[start];

  for (let i = start; i < array.length; i++) {
    const e = list[i];
    if (e < smallest) {
      smallest = e;
    }
  }
  return smallest;
}

function swapValues(lowest) {
  let toSwap = list[pointer];
  let indexOfLowest = list.indexOf(lowest);

  list[pointer] = lowest;
  list[indexOfLowest] = toSwap;
}

while (pointer < list.length) {
  swapValues(findLowest(pointer, list));
  pointer += 1;
}

console.log(list);
