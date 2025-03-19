var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    let result = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path.join(""));
            return;
        }
        for (let letter of phoneMap[digits[index]]) {
            backtrack(index + 1, [...path, letter]);
        }
    }

    backtrack(0, []);
    return result;
};
