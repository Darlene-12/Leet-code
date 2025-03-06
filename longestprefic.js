var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    // Sort the array
    strs.sort();

    let first = strs[0], last = strs[strs.length - 1], i = 0;

    // Compare characters of first and last word
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
};

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
