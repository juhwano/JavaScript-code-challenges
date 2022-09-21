/**
  Write a function called "productOfArray" which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr){
  let result = 1;
  let numArray = [...arr];

  function helper(numArray){
    if (Array.isArray(numArray) && numArray.length === 0) return;

    result *= numArray[0];

    let newArray = numArray.slice(1);

    helper(newArray);
  }
  helper(numArray);

  return result;
}

console.log(productOfArray([1,2,3,10]));