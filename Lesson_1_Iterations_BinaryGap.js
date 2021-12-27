/**
 * LESSON 1 - ITERATIONS - BinaryGap
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N. Given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
 * @param {int} N - an integer within the range [1..2,147,483,647]
 * @return {int} longest binary gap
 */

const solution = (N) => {
  let binary = N.toString(2),
    // Positive Lookbehind and Positive Lookahead
    matches = binary.match(/(?<=1)(.*?)(?=1)/g)?.filter(String);

  if (!matches || matches.length == 0) {
    return 0;
  }

  let lengths = matches.map((gap) => gap.length),
    index = lengths.indexOf(Math.max(...lengths));

  return lengths[index];
};

console.log(solution(1041)); // 1041 = 10000010001; longest gap = 5
console.log(solution(32)); // 32 = 100000; longest gap = 0
console.log(solution(9)); // 2
console.log(solution(529)); // 4
console.log(solution(51272)); // 4
console.log(solution(15)); // 0
console.log(solution(53)); // 1
console.log(solution(2147483647)); // 0
console.log(solution(2147483648)); // 0
console.log(solution(6)); // 0
console.log(solution(15)); // 0
console.log(solution(328)); // 2
console.log(solution(51712)); // 2
console.log(solution(20)); // 1
