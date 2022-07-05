const getPalindrome = (s, leftPointer, rightPointer) => {
  while (
    leftPointer > 0 &&
    rightPointer < s.length - 1 &&
    s[leftPointer] === s[rightPointer]
  ) {
    leftPointer--
    rightPointer++
  }
  if (s[leftPointer] !== s[rightPointer]) {
    leftPointer++
    rightPointer--
  }
  return s.slice(leftPointer, rightPointer + 1)
}

// O(n ** 2)
const longestPalindrome = (s) => {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    let test1 = getPalindrome(s, i, i)
    if (test1.length > result.length) result = test1
    if (i < s.length - 1) {
      let test2 = getPalindrome(s, i, i + 1)
      if (test2.length > result.length) result = test2
    }
  }
  return result
}

console.log(longestPalindrome('a'))
