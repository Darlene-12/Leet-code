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

            # Handling edge cases when partition is at the boundaries
            maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
            minRightX = float('inf') if partitionX == x else nums1[partitionX]

            maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
            minRightY = float('inf') if partitionY == y else nums2[partitionY]

            # If the correct partition is found
            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                # If total length is even, return the average of two middle elements
                if (x + y) % 2 == 0:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                # If total length is odd, return the max of left partition
                else:
                    return max(maxLeftX, maxLeftY)

            # If maxLeftX is too large, move partitionX left
            elif maxLeftX > minRightY:
                high = partitionX - 1
            # If maxLeftY is too large, move partitionX right
            else:
                low = partitionX + 1

        # Handle edge case when one array is empty
        if len(nums1) == 0:  # nums1 is empty
            if y % 2 == 0:
                return (nums2[y // 2 - 1] + nums2[y // 2]) / 2
            else:
                return nums2[y // 2]
        if len(nums2) == 0:  # nums2 is empty
            if x % 2 == 0:
                return (nums1[x // 2 - 1] + nums1[x // 2]) / 2
            else:
                return nums1[x // 2]

        # If the code reaches here, something went wrong
        raise ValueError("Input arrays are not sorted properly.")

# Driver function to test the implementation
def test_median():
    solution = Solution()
    
    # Example test cases
    test_cases = [
        ([1, 3], [2], 2.0),
        ([1, 2], [3, 4], 2.5),
        ([0, 0], [0, 0], 0.0),
        ([], [1], 1.0),
        ([2], [], 2.0),
        ([1, 3, 8], [7, 11, 18, 19, 21], 11.0),
        ([1, 2, 3, 4], [5, 6, 7, 8, 9], 5.0)
    ]

    for nums1, nums2, expected in test_cases:
        result = solution.findMedianSortedArrays(nums1, nums2)
        print(f"nums1 = {nums1}, nums2 = {nums2} -> Median: {result} (Expected: {expected})")

# Run the tests
test_median()

