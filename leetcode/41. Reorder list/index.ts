// @ts-nocheck

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// ! [1, 4, 5, 7]

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // * cut the linked list in to two, the first of l2 is determined by prev slow val

  let slow = head;
  let fast = head?.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // * cut list into 2

  let l1 = head,
    l2 = slow.next;

  slow.next = null;

  // * lets reverse the l2

  let prev;
  let curr = l2;

  while (curr) {
    let next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  l2 = prev;

  while (l2) {
    const next1 = l1.next;
    const next2 = l2.next;

    l1.next = l2;
    l2.next = next1;

    l1 = next1;
    l2 = next2;
  }
}

const list1 = new ListNode(
  1,
  new ListNode(4, new ListNode(5, new ListNode(7))),
);
const list2 = new ListNode(
  1,
  new ListNode(4, new ListNode(5, new ListNode(7, new ListNode(8)))),
);

reorderList(list1);
reorderList(list2);
