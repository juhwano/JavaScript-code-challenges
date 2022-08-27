/**
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates 
among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

힌트 : Frequency Counter / Multiple Pointers

 */

//내 풀이1. frequency counter
// function areThereDuplicates(...rest) {
//   let obj = {}
//   for (let i = 0; i < rest.length; i++) {
//     let ele = rest[i];
//     obj[ele] ? obj[ele] += 1 : obj[ele] = 1
//     if(obj[ele] >= 2){
//       return false
//     }
//   }
//   return true
// }

//솔루션(빈도 수 세기)
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

//내 풀이2. multiple pointers
function areThereDuplicates(...rest) {
  let left = 0;
  let right = rest.length - 1;
  while (left < right) {
    console.log(left, right);
    if (rest[left] !== rest[right]) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}
//솔루션(다중 포인터)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//솔루션(One Liner)
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

//arguments -> ...rest
function areThereDuplicates(...rest) {
  console.log(rest.length);
  return new Set(rest).size !== rest.length;
}
