function groupAnagrams(strs: string[]): string[][] {
  const res = new Map<string, string[]>()

  for (let s = 0; s < strs.length; s++) { // every string in strs
    const count: number[] = Array(26).fill(0) // map for every lowerCase alphabetic character

    for (let c = 0; c < strs[s].length; c++) { // every character in each string
      count[strs[s].charCodeAt(c) - "a".charCodeAt(0)] += 1 // adding value for each time we see a character and storing it in map
    }

    const key = count.toString();
    if (!res.has(key)) {
      res.set(key, []);
    }

    res.get(key)!.push(strs[s]) // getting each string by the key value
  }

  return Array.from(res.values())
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))