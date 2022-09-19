/**
  Write a function called power which accepts a base and an exponent. The function should return the power
  of the base to the exponent. This function should mimic the functionality of "Math.pow()"
  - do not worry about negative bases and exponents.
 */

function power(num1, num2){
  let result = 1;

  function helper(num1, num2){
    //종료 조건
    if (num2 === 0 ) return;

    result *= num1

    helper(num1, num2-1);
  }

  helper(num1, num2);

  return result;
}

console.log(power(2,4))