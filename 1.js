// O(n)
var twoSum = function (nums, target) {
  const resultMap = new Map()
  for (let [i, num] of nums.entries()) {
    if (resultMap.has(num)) {
      return [resultMap.get(num), i]
    } else {
      resultMap.set(target - num, i)
    }
  }
  return null
}
