class Solution:
    def romanToInt(self, s: str) -> int:
        roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        prev_value = 0  # Keeps track of the last processed value

        for char in reversed(s):  # Process from right to left
            current_value = roman_map[char]
            if current_value < prev_value:
                total -= current_value  # Subtract if smaller value comes before a larger one
            else:
                total += current_value  # Otherwise, add it
            prev_value = current_value  # Update previous value

        return total

# Example usage:
solution = Solution()
print(solution.romanToInt("MCMXCIV"))  # Output: 1994
