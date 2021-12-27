/**
 * LESSON 2 - ARRAYS - OddOccurrencesInArray
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element
 * of the array can be paired with another element that has the same value, except for one element that is left unpaired.
 * Given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element
 * @param {array} A - an non array A consisting of N integers.
 * @return {array} the value of the unpaired element
 */
const solution = (A) => {
  const set = new Set([]);

  for (const item of A) {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  }

  return Array.from(set)[0];
};

// Other solution:
// const solution = (A) => {
//   let result = 0;

//   for (let element of A) {
//     result ^= element;
//   }

//   return result;
// };

console.log(solution([9, 3, 9, 3, 9, 7, 9])); // 7
console.log(solution([1, 2, 1, 3, 5, 2, 3])); // 5
console.log(solution([1, 2, 1, 3, 5, 2, 3, 1, 1, 2, 2])); // 5
console.log(solution([42])); // 42
console.log(
  solution([1000000, 2000000, 1000000, 30000000, 5000000, 2000000, 30000000])
); // 5000000
