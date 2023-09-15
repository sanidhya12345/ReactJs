//Variables:- var-> functional scope,let and const->block scope.

let firstName="sanidhya varshney";
const pi=3.14;
console.log(firstName);
console.log(pi);

//Arrays:- An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

// How to create an empty array:-

const arr=Array(); // Array construtor
console.log(arr);

const array=[]; // using square brackets
console.log(array);

const numbers=[1,2,3,4,5,6];
console.log(numbers.length);

//create static values with fill.

const arr1=Array(8).fill('X');
console.log(arr1);

//concatenation of two lisrs:-

const list1=[1,2,3,4,5,6];
const list2=[6,4,5,6,7,8];
const ans=list1.concat(list2);
console.log(ans);

//getting index of element of an array:- to check whether an element is present or not.
console.log(list1.indexOf(2));

//checking array:-

console.log(Array.isArray(list1));

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

console.log(numbers.splice()) // -> remove all items
console.log(numbers.splice(0, 1)) // remove the first item
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//Push: adding item in the end. To add item to the end of an existing array we use the push method.
//pop: Removing item in the end.
//shift: Removing one array element in the beginning of the array.
//unshift:-Adding array element in the beginning of the array.
