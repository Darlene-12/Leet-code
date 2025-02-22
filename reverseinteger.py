class Solution:
    def reverse(self, x: int) -> int:
        """
        Reverse the digits of an integer while handling 32-bit integer constraints.
        """
        # Define the limits for a 32-bit signed integer
        INT_MIN, INT_MAX = -2**31, 2**31 - 1
        
        # Convert the integer to string, reverse it, and remove leading zeroes
        str_x = str(abs(x))  # Convert to string and remove the negative sign if present
        reversed_str_x = str_x[::-1]  # Reverse the string
        reversed_x = int(reversed_str_x)  # Convert back to integer

        # Restore the negative sign if x was negative
        if x < 0:
            reversed_x = -reversed_x

        # Check if reversed integer is within 32-bit range
        if reversed_x < INT_MIN or reversed_x > INT_MAX:
            return 0  # Return 0 if overflow occurs

        return reversed_x
