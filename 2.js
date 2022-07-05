function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// O(n + m)
const addTwoNumbers = function (l1, l2) {
  let node1 = l1
  let node2 = l2
  let result_node = undefined
  let carried = 0
  let initial_node = undefined
  while (node1 || node2) {
    let sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + carried
    let new_node = new ListNode(sum % 10, undefined)
    if (result_node !== undefined) {
      result_node.next = new_node
    } else {
      initial_node = new_node
    }
    result_node = new_node
    carried = Math.floor(sum / 10)
    if (node1) node1 = node1.next
    if (node2) node2 = node2.next
  }
  if (carried > 0) {
    let new_node = new ListNode(carried, undefined)
    if (result_node !== undefined) {
      result_node.next = new_node
    } else {
      initial_node = new_node
    }
    result_node = new_node
  }
  return initial_node
}
