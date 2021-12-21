/**
 * LESSON 2 - ARRAYS - CYLICROTATION
 * Rotate array A K times; that is, each element of A will be shifted to the right K times.
 * @param {array} A - an array A consisting of N integers.
 * @param {int} K - an integer K.
 * @return {array} The array A rotated K times.
 */
const solution = (A, K) => [...A.splice(-K), ...A];

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
console.log(solution([1, 1, 2, 3, 5], 42)); // [3, 5, 1, 1, 2]
console.log(solution([], 1)); // 0
