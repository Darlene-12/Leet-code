class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}  # Dictionary to store the last seen index of each character
        max_length = 0
        start = 0  # Left pointer of the sliding window

        for end in range(len(s)):
            if s[end] in char_index and char_index[s[end]] >= start:
                start = char_index[s[end]] + 1  # Move start past the duplicate

            char_index[s[end]] = end  # Update the last seen index
            max_length = max(max_length, end - start + 1)  # Update max length

        return max_length

# Example usage:
solution = Solution()
print(solution.lengthOfLongestSubstring("abcabcbb"))  # Output: 3
print(solution.lengthOfLongestSubstring("bbbbb"))     # Output: 1
print(solution.lengthOfLongestSubstring("pwwkew"))    # Output: 3
