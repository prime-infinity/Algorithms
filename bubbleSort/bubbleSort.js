let list = [5, 2];

let forward = 1;
let follower = forward - 1;

function swap(a, b) {
  let c = list[a];
  list[a] = list[b];
  list[b] = c;
}

//swap(follower, forward);

console.log(list);
