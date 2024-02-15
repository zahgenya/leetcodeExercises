function twoSum(numbers: number[], target: number): number[] {
  let l: number = 0;
  let r: number = numbers.length - 1;

  while (l < r) {
    let currSum: number
    currSum = numbers[l] + numbers[r]

    if (currSum > target) {
      r -= 1
    } else if (currSum < target) {
      l += 1
    } else {
      return [l + 1, r + 1]
    }
  }
  return [];
};