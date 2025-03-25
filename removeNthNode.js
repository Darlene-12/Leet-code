// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both fast and slow pointers until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Skip the target node
    slow.next = slow.next.next;

    return dummy.next;
};
