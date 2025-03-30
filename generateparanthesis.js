/**
 * @param {number} n - Number of pairs of parentheses
 * @return {string[]} - All valid combinations of well-formed parentheses
 */
var generateParenthesis = function(n) {
    const result = []; // This will store our valid combinations

    // This helper function will recursively build the valid strings
    function backtrack(current, openCount, closeCount) {
        // ✅ Base case: if the string is complete (n opens + n closes)
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // ✅ If we can still add an opening bracket
        if (openCount < n) {
            backtrack(current + '(', openCount + 1, closeCount);
        }

        // ✅ If we can close a bracket (must have more opens than closes)
        if (closeCount < openCount) {
            backtrack(current + ')', openCount, closeCount + 1);
        }
    }

    // Start recursion with empty string and 0 counts
    backtrack('', 0, 0);
    return result;
};

// Example usage:
console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
