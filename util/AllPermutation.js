function allPermutation(array, left, right) {
  if (left == right) {
    console.log(array);
  }
  for (let i = left; i < right; i++) {
    console.log('left ', left, 'right', right);
    swap(array, i, left);
    allPermutation(array, left + 1, right);
    swap(array, i, left);
  }
}

function swap(array, aIndex, bIndex) {
  let tmp = array[aIndex];
  array[aIndex] = array[bIndex];
  array[bIndex] = tmp;
}

let array = [1, 2, 3];

allPermutation(array, 0, array.length);
