class Solution:
    def myAtoi(self, s: str) -> int:
        # Step 1: Remove leading whitespace
        s = s.lstrip()

        # Step 2: Check for sign
        sign = 1
        if s and (s[0] == '-' or s[0] == '+'):
            sign = -1 if s[0] == '-' else 1
            s = s[1:]

        # Step 3: Read digits
        num = 0
        for char in s:
            if char.isdigit():
                num = num * 10 + int(char)
            else:
                break

        # Step 4: Apply sign
        num *= sign

        # Step 5: Handle 32-bit integer constraints
        INT_MIN, INT_MAX = -(2**31), 2**31 - 1
        return max(INT_MIN, min(num, INT_MAX))

# Example Usage
solution = Solution()
print(solution.myAtoi("42"))  # Output: 42
print(solution.myAtoi("   -042"))  # Output: -42
print(solution.myAtoi("1337c0d3"))  # Output: 1337
print(solution.myAtoi("0-1"))  # Output: 0
print(solution.myAtoi("words and 987"))  # Output: 0
