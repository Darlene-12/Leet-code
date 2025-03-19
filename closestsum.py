from typing import List

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()  # Step 1: Sort the array
        closest_sum = nums[0] + nums[1] + nums[2]  # Initialize with the first three elements

        for i in range(len(nums) - 2):  # Fixing the first number
            left, right = i + 1, len(nums) - 1  # Two pointers

            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]

                # If exact match is found, return immediately
                if current_sum == target:
                    return current_sum

                # Update the closest sum if the current sum is closer to the target
                if abs(current_sum - target) < abs(closest_sum - target):
                    closest_sum = current_sum

                # Adjust the pointers to move towards the target
                if current_sum < target:
                    left += 1  # Move left pointer to increase sum
                else:
                    right -= 1  # Move right pointer to decrease sum

        return closest_sum  # Return the best found closest sum

# Example Test
solution = Solution()
print(solution.threeSumClosest([-1, 2, 1, -4], 1))  # Expected Output: 2
