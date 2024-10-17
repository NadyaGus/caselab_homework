let count = 0;

function getLength(array) {
  if (array[0]) {
    count++;
    array.pop();
    getLength(array);
  }

  return count;
}

const arr = [1, 2, 3, 4, 5, 5];
console.log(getLength(arr));
