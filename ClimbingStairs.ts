function climbStairs(n: number): number {
  let one: number = 1
  let two: number = 1
  let temp: number = 0

  for (let i = 0; i < n - 1; i++) {
    temp = one
    one = one + two
    two = temp
  }
  return one
}