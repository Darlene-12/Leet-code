from heapq import heappush, heappop
from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []

        # Add head of each list into the heap
        for i, node in enumerate(lists):
            if node:
                heappush(heap, (node.val, i, node))

        dummy = ListNode(0)
        current = dummy

        # Pop smallest node and push next of that node into the heap
        while heap:
            val, i, node = heappop(heap)
            current.next = node
            current = current.next
            if node.next:
                heappush(heap, (node.next.val, i, node.next))

        return dummy.next
