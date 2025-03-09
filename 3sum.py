from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()  # Step 1: Sort the array
        res = []

        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:  # Skip duplicate elements
                continue

            left, right = i + 1, len(nums) - 1  # Two-pointer initialization
            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total == 0:
                    res.append([nums[i], nums[left], nums[right]])  # Found a triplet
                    left += 1
                    right -= 1

                    # **Corrected duplicate skipping logic**
                    while left < right and nums[left] == nums[left - 1]:  
                        left += 1  # Skip duplicate left elements
                    while left < right and nums[right] == nums[right + 1]:  
                        right -= 1  # Skip duplicate right elements

                elif total < 0:
                    left += 1  # Move left pointer to increase sum
                else:
                    right -= 1  # Move right pointer to decrease sum

        return res

# Example Usage
solution = Solution()
print(solution.threeSum([-2,0,1,1,2]))  # Output: [[-2,0,2], [-2,1,1]]
