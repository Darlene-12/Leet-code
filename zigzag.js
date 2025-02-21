/**
 * Converts a string into a zigzag pattern and reads it row-by-row.
 * 
 * @param {string} s - The input string.
 * @param {number} numRows - The number of rows for the zigzag pattern.
 * @return {string} - The transformed string read row-by-row.
 */
var convert = function(s, numRows) {
    // Edge case: If numRows is 1 or string length is less than numRows, return the original string.
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Create an array to store characters for each row
    let rows = new Array(numRows).fill(""); // Each row is initialized as an empty string.

    let curRow = 0;  // Tracks the current row we are writing to
    let goingDown = false; // Determines if we are moving downward or upward

    // Loop through each character in the string
    for (let char of s) {
        // Append the character to the current row
        rows[curRow] += char;

        // If we reach the top or bottom row, change direction
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown; // Toggle direction
        }

        // Move to the next row: either down (+1) or up (-1)
        curRow += goingDown ? 1 : -1;
    }

    // Join all rows to form the final zigzag converted string
    return rows.join("");
};

// Test cases
console.log(convert("PAYPALISHIRING", 3));  // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4));  // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));               // Output: "A"
console.log(convert("HELLO", 2));           // Output: "HLOEL"
console.log(convert("JAVASCRIPT", 5));      // Output: "JCTVSRAIPA"
