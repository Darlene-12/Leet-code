/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // Corrected sorting syntax
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize with the first possible sum
    
    for (let i = 0; i < nums.length - 2; i++) { // Fix the first number
        let left = i + 1, right = nums.length - 1; // Two pointers
        
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            
            // If exact match is found, return immediately
            if (currentSum === target) return currentSum;
            
            // Update the closest sum if current sum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Adjust the pointers to move towards the target
            if (currentSum < target) {
                left++;  // Increase sum
            } else {
                right--; // Decrease sum
            }
        }
    }
    
    return closestSum;
};

// Example Usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1));  // Expected Output: 2
