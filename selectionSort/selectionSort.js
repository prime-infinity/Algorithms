let list = [5, 2, 7, 4, 1, 6, 3, 0];

//we define an intial pointer and set it to zero(0)
let pointer = 0;

/**
 * this below function finds and returns the
 * lowers value of the array, at every iteration,
 * the pointer is moved to another index, and that
 * portion of the array is then considered and the
 * lowest value still returned
 */

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

/**
 * the below function swaps the lowest value
 * with the value at the index position where
 * the lowest value was found.the lowest value
 * for that particular iteration is taken to the
 * index position of the pointer
 */

function swapValues(lowest) {
  let toSwap = list[pointer];
  let indexOfLowest = list.indexOf(lowest);

  list[pointer] = lowest;
  list[indexOfLowest] = toSwap;
}

/**
 * we do this for all elements
 */

while (pointer < list.length) {
  swapValues(findLowest(pointer, list));
  pointer += 1;
}

console.log(list);

/**
 * with pointer at zero(0), all the elements of the
 * array are considered, we find the lowest value starting from
 * pointer zero, we set
 * the lowest value to the index position of the pointer
 * and swap it with the index position of where it was found
 *
 * the pointer is then increased and this operation again
 * repeats itself
 */
