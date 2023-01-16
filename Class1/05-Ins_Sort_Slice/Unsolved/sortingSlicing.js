var numArray = [3, 2, 1]
// TODO: Sort an array in ascending order

console.log('Sorted numArray', numArray.sort())

// Sort the array in descending order
var numArray2 = [1, 2, 3];
numArray2.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, 1)
  return secondNum - firstNum;
});

// Returns [3, 2, 1]
console.log('Descending sorted numArray2', numArray2); 

// Sort the array in ascending order with a callback function
var numArray3 = [3, 2, 1];
numArray3.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

console.log('Ascending sorted numArray3 with callback', numArray3); 

// TODO: Sort the array in descending order, using an arrow function
var numArray4 = [1, 2, 3, 4];
numArray4.sort((firstNum, secondNum) => (secondNum - firstNum));
console.log('Sorted with Arrow Function', numArray4); 

// TODO: Reverse the array
var numArray5 = [1, 2, 3, 4];
var reversedArray = numArray5.reverse()
console.log('Reversed Array', reversedArray);


// Array of names
var names = ["Jane", "John", "Jimbo", "Jebediah"];

// TODO: Slice the first two names
var left = names.slice(0, 2);
// Returns elements at index position 0 and 1, but not 2.
console.log(left);

// TODO Slice the last two names
var right = names.slice(2, 4);
// Returns elements at index position 2 and 3, but not 4.
console.log(right);