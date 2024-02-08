function isPalindrome(s: string): boolean {
  const lowerStr = s.toLowerCase();
  const clearStr = lowerStr.replace(/[^a-z0-9]/g, '');
  const reversedStr = clearStr.split('').reverse().join('');
  return reversedStr === clearStr;
}