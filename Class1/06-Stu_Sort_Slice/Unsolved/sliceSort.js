// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var descArray = numArray.sort(function compareFunction(firstNum, secondNum) {
    return secondNum - firstNum;
});

// Print the results to the console
console.log("Array sorted in descending order", descArray);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var descArrayArrow = numArray.sort((firstNum, secondNum) => secondNum - firstNum);

console.log("Array sorted in descending order w/ arrow funct.", descArrayArrow);

// Reverse the array order
var originalArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];
console.log("Original Array", originalArray)

originalArray.reverse();
console.log("Original array printed in reverse order", originalArray)

// Sort the array in ascending order using an arrow function
var ascArrayArrow = numArray.sort((firstNum, secondNum) => firstNum - secondNum);
console.log("Array sorted in ascending order w/ arrow funct.", ascArrayArrow);

// Slice the first five elements of the sortedAscending array, assign to a variable
var slicedArray = ascArrayArrow.slice(0,5)
console.log("Only first 5 elements of the ascending array", slicedArray)