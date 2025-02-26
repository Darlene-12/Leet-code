var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);

        // Move the pointer with the shorter height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Example usage
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // Output: 49
