function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  nums = nums.sort((a, b) => a - b); // sort in ascending order

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l: number = i + 1;
    let r: number = nums.length - 1;

    while (l < r) {
      let sum: number = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] == nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return res;
}
