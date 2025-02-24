/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are NOT palindromes
    if (x < 0) return false;

    // If the last digit is 0, the first digit must also be 0 (only 0 itself is a palindrome)
    if (x % 10 === 0 && x !== 0) return false;

    let reversedNum = 0;
    let original = x;

    // Reverse half of the number
    while (x > reversedNum) {
        let lastDigit = x % 10;  // Extract last digit
        reversedNum = reversedNum * 10 + lastDigit; // Append to reversedNum
        x = Math.floor(x / 10); // Remove last digit
    }

    // Check if the first half equals the reversed second half
    return x === reversedNum || x === Math.floor(reversedNum / 10);
};
