// O(n)
var romanToInt = function (s) {
  const lettersTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  if (s.length === 0) return 0
  let sum = lettersTable[s[s.length - 1]]
  let lastValue = lettersTable[s[s.length - 1]]
  for (let i = s.length - 2; i >= 0; i--) {
    let current = lettersTable[s[i]]
    if (current >= lastValue) {
      sum += current
    } else {
      sum -= current
    }
    lastValue = current
  }
  return sum
}
