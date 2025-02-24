class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Negative numbers are not palindromes
        if x < 0:
            return False

        # Store the original number to compare later
        original = x
        reversed_num = 0

        # Reversing the integer
        while x > 0:
            last_digit = x % 10  # Extracting the last digit
            reversed_num = reversed_num * 10 + last_digit  # Appending to reversed number
            x = x // 10  # Removing the last digit from the original number

        # Checking if the number is the same as the original
        return original == reversed_num
