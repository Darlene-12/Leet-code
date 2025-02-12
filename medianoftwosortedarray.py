from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Ensure nums1 is the smaller array to optimize binary search
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1  # Swap to make nums1 the smaller array
        
        x, y = len(nums1), len(nums2)
        low, high = 0, x  # Binary search boundaries

        while low <= high:
            # Partition nums1 and nums2
            partitionX = (low + high) // 2
            partitionY = (x + y + 1) // 2 - partitionX  # Ensures left half has equal elements

            # Handling edge cases where partition crosses the array boundary
            maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
            minRightX = float('inf') if partitionX == x else nums1[partitionX]

            maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
            minRightY = float('inf') if partitionY == y else nums2[partitionY]

            # If the partition is correct
            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                # If total length is even, return the average of two middle elements
                if (x + y) % 2 == 0:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                # If total length is odd, return the max of left side
                else:
                    return max(maxLeftX, maxLeftY)
            
            # If maxLeftX is too large, move partitionX left
            elif maxLeftX > minRightY:
                high = partitionX - 1
            # If maxLeftY is too large, move partitionX right
            else:
                low = partitionX + 1

# Test driver function
def test_median():
    solution = Solution()
    
    # Example Test Cases
    test_cases = [
        ([1, 3], [2]),          # Median = 2.0
        ([1, 2], [3, 4]),       # Median = 2.5
        ([0, 0], [0, 0]),       # Median = 0.0
        ([], [1]),              # Median = 1.0
        ([2], []),              # Median = 2.0
        ([1, 3, 8], [7, 11, 18, 19, 21]),  # Median = 11.0
        ([1, 2, 3, 4], [5, 6, 7, 8, 9]),  # Median = 5.0
    ]
    
    for nums1, nums2 in test_cases:
        print(f"nums1 = {nums1}, nums2 = {nums2} -> Median: {solution.findMedianSortedArrays(nums1, nums2)}")

# Run the test function
test_median()
