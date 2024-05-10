function lengthOfLastWord(s: string): number {
  let arr = []
  arr = s.split(' ')
  arr = arr.filter((word) => word.length > 0)
  let lastWord = arr.pop()
  if (lastWord) {
      return lastWord.length;
  } else {
      return 0;
  }
};