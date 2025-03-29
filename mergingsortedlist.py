// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Merge Two Sorted Linked Lists
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(); // Dummy node to simplify merging
    let current = dummy; // Pointer to track position in new list

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach any remaining nodes from the non-empty list
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // Return the merged sorted list (skip dummy)
};
