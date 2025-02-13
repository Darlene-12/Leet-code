class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expandAroundCenter(left: int, right: int) -> str:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left+1:right]  # Extract the palindrome substring
        
        longest = ""
        for i in range(len(s)):
            # Odd-length palindrome (single character center)
            odd_palindrome = expandAroundCenter(i, i)
            if len(odd_palindrome) > len(longest):
                longest = odd_palindrome
            
            # Even-length palindrome (adjacent character center)
            even_palindrome = expandAroundCenter(i, i + 1)
            if len(even_palindrome) > len(longest):
                longest = even_palindrome
        
        return longest

# Example usage
sol = Solution()
print(sol.longestPalindrome("babad"))  # Output: "bab" or "aba"
