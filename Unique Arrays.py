class Solution:
    def isArraySpecial(self, nums):
        """Check if the array is special based on parity conditions"""
        for i in range(len(nums) - 1):  # Iterate over adjacent elements
            if (nums[i] % 2) == (nums[i + 1] % 2):  # Check same parity
                return False
        return True

# Test cases
sol = Solution()
print(sol.isArraySpecial([1]))         # True
print(sol.isArraySpecial([2, 1, 4]))   # True
print(sol.isArraySpecial([4, 3, 1, 6])) # False
