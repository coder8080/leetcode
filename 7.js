// O(n)
const reverse = (x) => {
  let isNegative = false
  if (x < 0) {
    isNegative = true
    x *= -1
  }
  let str = x.toString()
  let result = 0
  let mul = 10 ** (str.length - 1)
  for (let i = str.length - 1; i >= 0; i--) {
    result += Number(str[i]) * mul
    mul /= 10
  }
  if (result >= 2147483648) return 0
  return isNegative ? result * -1 : result
}

console.log(reverse(-321))
