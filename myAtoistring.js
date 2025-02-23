/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Step 1: Remove leading whitespace
    s = s.trim();

    // Step 2: Check for sign
    let sign = 1, index = 0;
    if (s[index] === '-' || s[index] === '+') {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    // Step 3: Read digits
    let num = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        num = num * 10 + (s[index] - '0'); // Convert char to digit
        index++;
    }

    // Step 4: Apply sign
    num *= sign;

    // Step 5: Handle 32-bit integer constraints
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
};
