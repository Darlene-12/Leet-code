# Defining for singly-linked lists
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()  # Initialize a dummy node
        current = dummy
        carry = 0
        
        while l1 or l2 or carry:
            # Get values from l1 and l2 or use 0 if they are None
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            # Calculate the sum of the values and the carry
            total = val1 + val2 + carry
            carry = total // 10  # Update carry
            value = total % 10   # Value for the current node
            
            # Add the value as a new node in the result linked list
            current.next = ListNode(value)
            current = current.next  # Move to the next node
            
            # Move to the next nodes in l1 and l2 if they exist
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next  # Return the result starting from the next node

# Helper function to convert a linked list to a Python list (for testing)
def linked_list_to_list(node):
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

# Helper function to convert a Python list to a linked list (for testing)
def list_to_linked_list(lst):
    dummy = ListNode()
    current = dummy
    for value in lst:
        current.next = ListNode(value)
        current = current.next
    return dummy.next

# Test the function
l1 = list_to_linked_list([2, 4, 3])
l2 = list_to_linked_list([5, 6, 4])

solution = Solution()
result = solution.addTwoNumbers(l1, l2)

# Convert the linked list result to a list for easy verification
print(linked_list_to_list(result))  # Output: [7, 0, 8]
