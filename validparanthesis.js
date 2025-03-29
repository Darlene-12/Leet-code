var isValid = function(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    
    // Mapping of closing brackets to their corresponding opening brackets
    let mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the input string
    for (let char of s) {
        // Check if the character is a closing bracket
        if (char in mapping) {
            // Pop the top element from the stack if it's not empty, otherwise assign '#'
            let topElement = stack.length ? stack.pop() : '#';

            // If the popped element does not match the expected opening bracket, return false
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty at the end, the brackets are balanced
    return stack.length === 0;
};

// ✅ Test Cases
console.log(isValid("()"));      // true (valid)
console.log(isValid("()[]{}"));  // true (valid)
console.log(isValid("(]"));      // false (mismatched closing bracket)
console.log(isValid("([)]"));    // false (incorrect order)
console.log(isValid("{[]}"));    // true (properly nested)
