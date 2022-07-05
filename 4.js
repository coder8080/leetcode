const checkCut = (smallArr, bigArr, smallLeft, bigLeft) => {
  if (
    smallLeft > 0 &&
    bigLeft < bigArr.length &&
    smallArr[smallLeft - 1] > bigArr[bigLeft]
  ) {
    return 'decrease'
  }
  if (
    bigLeft > 0 &&
    smallLeft < smallArr.length &&
    bigArr[bigLeft - 1] > smallArr[smallLeft]
  ) {
    return 'increase'
  }
  return 'ok'
}

// O(log(n))
const findMedianSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0 && arr2.length === 0) {
    return 0
  }
  const halfLength = Math.floor((arr1.length + arr2.length) / 2)
  let smallArr = arr1.length < arr2.length ? arr1 : arr2
  let bigArr = arr1.length < arr2.length ? arr2 : arr1

  let smallLeftPointer = 0
  let smallRightPointer = Math.min(halfLength, smallArr.length)
  let smallLeft = Math.round((smallLeftPointer + smallRightPointer) / 2)

  let bigLeft = halfLength - smallLeft

  let state = checkCut(smallArr, bigArr, smallLeft, bigLeft)
  while (state != 'ok') {
    if (state === 'decrease') {
      smallRightPointer = smallLeft - 1
    } else {
      smallLeftPointer = smallLeft + 1
    }
    smallLeft = Math.round((smallLeftPointer + smallRightPointer) / 2)
    bigLeft = halfLength - smallLeft
    state = checkCut(smallArr, bigArr, smallLeft, bigLeft)
  }

  if ((arr1.length + arr2.length) % 2 === 0) {
    let leftMax
    if (smallLeft > 0 && bigLeft > 0) {
      leftMax = Math.max(smallArr[smallLeft - 1], bigArr[bigLeft - 1])
    } else if (smallLeft > 0) {
      leftMax = smallArr[smallLeft - 1]
    } else {
      leftMax = bigArr[bigLeft - 1]
    }

    let rightMin
    if (smallLeft < smallArr.length && bigLeft < bigArr.length) {
      rightMin = Math.min(smallArr[smallLeft], bigArr[bigLeft])
    } else if (smallLeft < smallArr.length) {
      rightMin = smallArr[smallLeft]
    } else {
      rightMin = bigArr[bigLeft]
    }

    return (leftMax + rightMin) / 2
  } else {
    if (smallLeft + bigLeft > arr1.length + arr2.length - smallLeft - bigLeft) {
      if (smallLeft > 0 && bigLeft > 0) {
        return Math.max(smallArr[smallLeft - 1], bigArr[bigLeft - 1])
      } else if (smallLeft > 0) {
        return smallArr[smallLeft - 1]
      } else {
        return bigArr[bigLeft - 1]
      }
    } else {
      if (smallLeft < smallArr.length && bigLeft < bigArr.length) {
        return Math.min(smallArr[smallLeft], bigArr[bigLeft])
      } else if (smallLeft < smallArr.length) {
        return smallArr[smallLeft]
      } else {
        return bigArr[bigLeft]
      }
    }
  }
}
