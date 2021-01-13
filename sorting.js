// Array to swap
let turnme = [255, 32354, 5643, 8654, 54, 84365, 54, 514];

// bubble sort
let bubbleSort = (input) => {
  let len = input.length;
  if (input.length <= 1) {
    return input;
  } else {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (input[j] > input[j + 1]) {
          let tmp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = tmp;
        }
      }
    }
    return input;
  }
};

// merge Sort
function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  } else {
    const middle = Math.floor(input.length / 2),
      left = input.slice(0, middle),
      right = input.slice(middle);

    function merge(left, right) {
      let result = [],
        leftI = 0,
        rightI = 0;

      while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
          result.push(left[leftI]);
          leftI++;
        } else {
          result.push(right[rightI]);
          rightI++;
        }
      }
      return result.concat(left.slice(leftI)).concat(right.slice(rightI));
    }
    return merge(mergeSort(left), mergeSort(right));
  }
}

// Selection sort
const swap = (input, i, j) => ([input[i], input[j]] = [input[j], input[i]]);

const selectionSort = (input) => {
  for (let i = 0; i < input.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[minimum]) minimum = j;
    }
    i !== minimum && swap(input, i, minimum);
  }
  return input;
};

// Quick Sort
const quickSort = (input) => {
  if (input.length <= 1) {
    return input;
  } else {
    const left = [];
    const right = [];
    const sorted = [];
    const pivot = input.pop();
    const length = input.length;

    for (let i = 0; i < length; i++) {
      if (input[i] <= pivot) {
        left.push(input[i]);
      } else {
        right.push(input[i]);
      }
    }

    return sorted.concat(quickSort(left), pivot, quickSort(right));
  }
};

// Consoles
console.log(`The Bubble sort of array is: ${bubbleSort(turnme)}`);
console.log(`The Merge sort of array is: ${mergeSort(turnme)}`);
console.log(`The Selection sort of array is: ${selectionSort(turnme)}`);
console.log(`The Quick sort of array is: ${quickSort(turnme)}`);
