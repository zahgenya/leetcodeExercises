const sortColors = (nums: number[]): void => {
  let l: number = 0
  let r: number = nums.length - 1
  let i: number = 0

  const swap = (val1: number, val2: number) => {
    let tmp = nums[val1]
    nums[val1] = nums[val2]
    nums[val2] = tmp
  }

  console.log(nums[r])
  while (i <= r) {
    if (nums[i] == 0) {
      swap(i, l)
      l++
    } else if (nums[i] == 2) {
      swap(i, r)
      r--
      i--
    }
    i++
  }
};

let arr = [2,0,2,1,1,0]
sortColors(arr)
console.log(arr)