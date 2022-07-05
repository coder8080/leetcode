// O(n)
const lengthOfLongestSubstring = function (s) {
  let leftPointer = 0
  let rightPointer = 0
  let max = 0
  let sym_set = new Set()
  sym_set.add(s[leftPointer])
  while (rightPointer < s.length) {
    while (leftPointer < rightPointer && sym_set.has(s[rightPointer])) {
      sym_set.delete(s[leftPointer])
      leftPointer++
    }
    max = Math.max(max, rightPointer - leftPointer + 1)
    sym_set.add(s[rightPointer])
    rightPointer++
  }
  return max
}
