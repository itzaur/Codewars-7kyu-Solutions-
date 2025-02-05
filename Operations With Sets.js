/*
Description:

We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

    Number of elements that are present in both arrays
    Number of elements that are present in only one array
    Number of remaining elements in arr1 after extracting the elements of arr2
    Number of remaining elements in arr2 after extracting the elements of arr1

Example

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]

The result is: [4, 8, 5, 3]

    4 elements present in both arrays: 2, 4, 6, 8
    8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
    5 elements remaning in arr1: 1, 3, 5, 7, 9
    3 elements remaning in arr2: 10, 12, 14

No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!
*/
function process2Arrays(arr1, arr2) {
  // Modern Solution
  // const intersectionSize = new Set(arr1).intersection(new Set(arr2)).size;
  // const differenceSize = new Set(arr1).symmetricDifference(new Set(arr2)).size;
  // const uniqueArr1Size = new Set(arr1).difference(new Set(arr2)).size;
  // const uniqueArr2Size = new Set(arr2).difference(new Set(arr1)).size;

  // return [intersectionSize, differenceSize, uniqueArr1Size, uniqueArr2Size];
  const intersectionSize = arr1.filter((el) => arr2.includes(el)).length;
  const uniqueArr1Size = arr1.filter((el) => !arr2.includes(el)).length;
  const uniqueArr2Size = arr2.filter((el) => !arr1.includes(el)).length;
  const differenceSize = uniqueArr1Size + uniqueArr2Size;

  return [intersectionSize, differenceSize, uniqueArr1Size, uniqueArr2Size];
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [2, 4, 6, 8, 10, 12, 14];
console.log(process2Arrays(arr1, arr2)); //[4, 8, 5, 3]

arr1 = [
  33, 2, 3, 37, 38, 40, 12, 10, 43, 44, 47, 49, 8, 19, 22, 24, 26, 28, 29, 30,
];
arr2 = [1, 34, 17, 7, 9, 10, 43, 49, 22, 27, 28];
console.log(process2Arrays(arr1, arr2)); //[5, 21, 15, 6]

arr1 = [32, 34, 3, 4, 39, 10, 43, 13, 11, 18, 21, 22, 7, 25, 26, 36];
arr2 = [32, 5, 38, 8, 41, 42, 12, 48, 40, 21, 22, 26, 10, 30];
console.log(process2Arrays(arr1, arr2)); //[5, 20, 11, 9]

arr1 = [0, 33, 37, 6, 10, 44, 13, 47, 16, 18, 22, 25];
arr2 = [1, 38, 48, 8, 41, 7, 12, 47, 16, 40, 20, 23, 25];
console.log(process2Arrays(arr1, arr2)); //[3, 19, 9, 10]

arr1 = [0, 19, 34, 35, 5, 7, 45, 13, 3, 20, 26, 29, 30];
arr2 = [33, 4, 38, 1, 8, 13, 47, 23, 28, 30, 31];
console.log(process2Arrays(arr1, arr2)); //[2, 20, 11, 9]

arr1 = [0, 35, 17, 6, 7, 10, 11, 46, 47, 16, 49, 20, 14, 23, 25, 26, 29];
arr2 = [0, 6, 17, 42, 43, 47, 16, 49, 50, 21, 28, 30];
console.log(process2Arrays(arr1, arr2)); //[6, 17, 11, 6]
