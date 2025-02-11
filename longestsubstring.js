/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndex = new Map(); // Stores last seen index of each character
    let maxLength = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charIndex.has(s[end]) && charIndex.get(s[end]) >= start) {
            start = charIndex.get(s[end]) + 1; // Move start past the duplicate
        }
        charIndex.set(s[end], end); // Update last seen index
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
