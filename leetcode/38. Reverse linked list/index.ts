// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null,
    curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

console.log(
  reverseList(
    new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, null)))),
    ),
  ),
);
