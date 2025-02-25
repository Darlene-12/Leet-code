from functools import lru_cache

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        @lru_cache(None)  # Memoization to avoid recomputation
        def dp(i, j):
            if j == len(p):  # If pattern is exhausted, string must be too
                return i == len(s)
            
            first_match = i < len(s) and p[j] in {s[i], '.'}

            if j + 1 < len(p) and p[j + 1] == '*':  # '*' case
                return dp(i, j + 2) or (first_match and dp(i + 1, j))
            else:
                return first_match and dp(i + 1, j + 1)

        return dp(0, 0)
