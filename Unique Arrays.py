class Solution:
  def isArraySpecial(self, nums):
    for i in range(len(num) -1 ):
      if (nums[i] % 2) == (nums[i+1] % 2): #  Code to iterate over adjacent elements
        return False
    return True
