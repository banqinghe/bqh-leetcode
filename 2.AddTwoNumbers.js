// Definition for singly-linked list.

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 对js数据结构的写法还摸不着脑袋 

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    current.next = new ListNode(sum);
    current = current.next;
    sum = carry;
    carry = 0;
  }
  return head.next;
};

// 更快的写法，使用递归
var addTwoNumbers = function(l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
      const val1 = l1 ? l1.val : 0
      const val2 = l2 ? l2.val : 0
      const next1 = l1 ? l1.next : null
      const next2 = l2 ? l2.next : null
      const val = carry ? val1 + val2 + 1 : val1 + val2
      node = new ListNode(val % 10)
      node.next = addTwoNumbers(next1, next2, val >= 10)  
  } else if (carry) {
      node = new ListNode(1)
      node.next = null
  }
  return node
};
