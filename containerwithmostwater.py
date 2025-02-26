from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_area = 0

        while left < right:
            # Calculate the current area
            area = (right - left) * min(height[left], height[right])
            max_area = max(max_area, area)
            
            # Move the pointer at the shorter height
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area

# Example usage
sol = Solution()
print(sol.maxArea([1,8,6,2,5,4,8,3,7]))  # Output: 49
