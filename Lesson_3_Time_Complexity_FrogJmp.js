/**
 * LESSON 3 - TIME COMPLEXITY - FrogJmp
 * A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to
 * Y. The small frog always jumps a fixed distance, D.
 * Count the minimal number of jumps that the small frog must perform to reach its target. That, given three integers X, Y and D, returns the minimal number of
 * jumps from position X to a position equal to or greater than Y.
 * @param {int} X - first position.
 * @param {int} Y - end position.
 * @param {int} D - fixed distance.
 * @return {int} The minimal number of jumps.
 */

const solution = (X, Y, D) => {
  let distance = Y - X;
  return Math.ceil(distance / D);
};

console.log(solution(10, 85, 30)); // 3
// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
