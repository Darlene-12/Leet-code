def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    rows = [''] * min(numRows, len(s))
    cur_row, direction = 0, -1

    for char in s:
        rows[cur_row] += char
        if cur_row == 0 or cur_row == numRows - 1:
            direction *= -1  # Change direction
        cur_row += direction

    return ''.join(rows)

# Test cases
print(convert("PAYPALISHIRING", 3))  # Output: "PAHNAPLSIIGYIR"
print(convert("PAYPALISHIRING", 4))  # Output: "PINALSIGYAHRPI"
print(convert("A", 1))               # Output: "A"
