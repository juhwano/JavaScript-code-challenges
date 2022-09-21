/**
  Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
  where every number there after is equal to the sum of the previous two numbers.
 */
function fib(num){
  let prev = 1;
  let curr = 1;
  let index = 2;
  let target = num;

  function helper(num1, num2){
    let sum = num1 + num2;
    if (sum === target) return;

    prev = num2;
    
    index++;

    helper(prev, num2+1);
  }

  helper(prev, curr)

  return index;
}

console.log(fib(4));