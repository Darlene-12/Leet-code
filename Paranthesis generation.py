from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []  # To store all valid combinations

        # This is a recursive helper function using backtracking
        def backtrack(current: str, open_count: int, close_count: int):
            # ✅ Base case: if the string is of the correct length
            if len(current) == 2 * n:
                result.append(current)
                return

            # ✅ Add '(' if we still have opening brackets left
            if open_count < n:
                backtrack(current + '(', open_count + 1, close_count)

            # ✅ Add ')' only if it won't exceed the number of '('
            if close_count < open_count:
                backtrack(current + ')', open_count, close_count + 1)

        # Start recursion with empty string
        backtrack('', 0, 0)
        return result
