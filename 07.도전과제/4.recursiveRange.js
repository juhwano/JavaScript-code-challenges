/**
  Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */
function recursiveRange(num){

  let sum = 0;
  let target = num;

  function helper(num){

    if (num > target) return;

    sum += num;

    helper(num+1)
  }

  helper(sum);

  return sum;
}

console.log(recursiveRange(6));