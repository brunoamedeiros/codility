/**
 * LESSON 3 - TIME COMPLEXITY - PermMissingElem
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)],
 * which means that exactly one element is missing.
 *
 * Your goal is to find that missing element.
 *
 * @param {array} A - array of integers all distinct
 * @return {int} value of the missing element
 */

const solution = (A) => {
  A.sort();

  let sum = A.reduce((a, b) => a + b, 0),
    lenght = A.length,
    // sum of n natural numbers
    total = Math.floor(((lenght + 1) * (lenght + 2)) / 2);

  return total - sum;
};

console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([])); // 0
console.log(solution([42])); // 0
console.log(solution([2, 3, 4, 5])); // 1
console.log(solution([1, 2, 3, 4, 5])); // 6
console.log(solution([3, 1])); // 2
