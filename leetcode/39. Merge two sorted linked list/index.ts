// https://leetcode.com/problems/merge-two-sorted-lists/submissions/1990119618/

// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy: ListNode = { val: 0, next: null };
  let node = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return dummy.next;
}

console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4, null))),
    new ListNode(1, new ListNode(3, new ListNode(4, null))),
  ),
);
