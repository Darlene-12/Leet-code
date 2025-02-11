/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // Create a dummy node to simplify the logic for creating the result linked list
    let dummy = new ListNode();
    let current = dummy; // Pointer to build the resulting linked list
    let carry = 0; // Initialize the carry to 0

    // Iterate as long as there are nodes in l1 or l2, or there's a carry to process
    while (l1 !== null || l2 !== null || carry > 0) {
        // Get the values of the current nodes (or 0 if a list has ended)
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        // Calculate the sum of the values and the carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Update the carry
        let value = sum % 10; // Single digit to store in the node

        // Add the calculated value as a new node to the result list
        current.next = new ListNode(value);
        current = current.next; // Move the pointer to the next node

        // Advance l1 and l2 if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Return the head of the resulting linked list (skipping the dummy node)
    return dummy.next;
};
