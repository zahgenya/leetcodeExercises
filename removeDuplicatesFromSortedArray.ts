function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let l: number = 1
  let r: number = 1
  while (r < nums.length) {
      if (nums[r] !== nums[r - 1]) {
          nums[l] = nums[r]
          l++
      }
      r++
  }
  return l
};