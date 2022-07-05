// O(n)
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return 0
  let res = strs[0]
  mainloop: for (let s of strs.slice(1)) {
    if (res.length > s.length) {
      res = res.slice(0, s.lenth)
    }
    while (s.slice(0, res.length) != res) {
      res = res.slice(0, res.length - 1)
      if (res === '') break mainloop
    }
  }
  return res
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
