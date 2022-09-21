/**
  Write a function factorial which accepts a number and retruns the factorial of that number.
  A factorial is the product of an integer and all the integers below it;
  e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
  factorial zero (0!) is always 1
 */

function factorial(num){
  //저장소
  let result = 1;

  //헬퍼
  function helper(num){
    //종료조건
    if (num === 0) return;

    result *= num;
    
    //재귀
    helper(num-1);
  }

  helper(num);

  return result;
}

console.log(factorial(6));