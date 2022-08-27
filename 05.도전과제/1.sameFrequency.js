/**
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

힌트 : Frequency Counter
 */

//내 풀이
function sameFrequency(n, n2) {
  let str = n.toString();
  let str2 = n2.toString();
  if (str.length !== str2.length) {
    return false;
  }

  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    let num = str[i];
    strObj[num] ? (strObj[num] += 1) : (strObj[num] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let num = str2[i];
    if (!strObj[num]) {
      return false;
    } else {
      strObj[num] -= 1;
    }
  }

  return true;
}

//솔루션
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
