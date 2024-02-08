function search(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length - 1;

  while (l <= r) {
    let m: number = Math.round((l + r) / 2);
    if (nums[m] > target) {
      r = m - 1
    } else if (nums[m] < target) {
      l = m + 1
    } else {
      return m
    }
  }
  return -1
}