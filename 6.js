// O(N)
const convert = (s, numRows) => {
  if (s.length === 1) return s
  if (s.length === 0) return s
  if (numRows === 1) return s
  let result = ''
  basePlus = numRows * 2 - 2
  for (let i = 0; i < s.length; i += basePlus) {
    result = result + s[i]
  }
  for (let i = 1; i < numRows - 1; i++) {
    let plus2 = 2 * i
    let plus1 = basePlus - plus2
    for (let k = i; k < s.length; ) {
      result = result + s[k]
      k += plus1
      if (k < s.length) {
        result = result + s[k]
        k += plus2
      }
    }
  }
  for (let k = numRows - 1; k < s.length; k += basePlus) {
    result = result + s[k]
  }
  return result
}

console.log(convert('A', 1))
