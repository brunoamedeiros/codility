/**
 * LESSON 2 - ARRAYS - OddOccurrencesInArray
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element
 * of the array can be paired with another element that has the same value, except for one element that is left unpaired.
 * Given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element
 * @param {array} A - an non array A consisting of N integers.
 * @return {array} the value of the unpaired element
 */
const solution = (A) => {
  return A.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    console.log(previousValue.indexOf(currentValue));

    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }

    return previousValue;
  }, []);
};

console.log(solution([9, 3, 9, 3, 9, 7, 9])); // 7
