class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}  # Closed brackets mapped to their opening brackets

        for char in s:
            if char in mapping:  # If it's a closing bracket
                top_element = stack.pop() if stack else '#'  # Check if stack is empty before popping
                if mapping[char] != top_element:
                    return False  # Ensure "return False" is correctly formatted
            else:
                stack.append(char)  # Push opening bracket onto the stack

        return not stack  # Stack should be empty if valid

# Example Test Cases
sol = Solution()
print(sol.isValid("()"))      # True
print(sol.isValid("()[]{}"))  # True
print(sol.isValid("(]"))      # False
print(sol.isValid("([)]"))    # False
print(sol.isValid("{[]}"))    # True
