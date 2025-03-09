var romanToInt = function(s) {
    const romanMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {  // Process from right to left
        let currentValue = romanMap[s[i]];
        if (currentValue < prevValue) {
            total -= currentValue;  // Subtract when a smaller value comes before a larger one
        } else {
            total += currentValue;
        }
        prevValue = currentValue;  // Update previous value
    }

    return total;
};

// Example usage:
console.log(romanToInt("MCMXCIV"));  // Output: 1994
