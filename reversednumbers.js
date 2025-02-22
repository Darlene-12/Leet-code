/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Define the 32-bit integer range
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    // Convert absolute value of x to string, reverse it, and convert back to number
    let reversedStr = Math.abs(x).toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10); // Convert string to integer

    // Restore negative sign if x was negative
    if (x < 0) {
        reversedNum = -reversedNum;
    }

    // Check for overflow and return 0 if out of bounds
    if (reversedNum < INT_MIN || reversedNum > INT_MAX) {
        return 0;
    }

    return reversedNum;
};
