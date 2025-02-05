class Solution:
    def maxAscendingSum(self, nums):  # Correct the parameter name to 'nums'
        max_sum = 0  # Variable to store the maximum possible sums
        current_sum = nums[0]  # Start with the first element of the array
        
        for i in range(1, len(nums)):  # Loop through the array starting from the second element
            if nums[i] > nums[i - 1]:  # Check if the current element is greater than the previous one
                current_sum += nums[i]  # Add the current element to the current sum
            else:
                max_sum = max(max_sum, current_sum)  # Update the maximum sum
                current_sum = nums[i]  # Reset the current sum to the current element
        
        max_sum = max(max_sum, current_sum)  # Final check for the last subarray
        return max_sum


solution = Solution()
print(solution.maxAscendingSum([10, 20, 30, 5, 10, 50]))  # Output: 65
print(solution.maxAscendingSum([10, 20, 30, 40, 50]))  # Output: 150
print(solution.maxAscendingSum([12, 17, 15, 13, 10, 11, 12]))  # Output: 33

