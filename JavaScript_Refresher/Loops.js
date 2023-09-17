for(let i=0;i<10;i++){
    console.log(i);
}

/**
 * forEach
If we are interested in the index of the array forEach is preferable to for of loop. The forEach array method takes a callback function, the callback function takes three arguments: the item, the index and the array itself.
 */

const numbers=[1,2,3,4,5,6];
numbers.forEach((number,i)=>console.log(number))