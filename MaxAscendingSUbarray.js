/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0; // To store the maximum sum
    let currentSum = nums[0]; // Start with the first element of the code
    // Loop to iterate through and find the maximum sum

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i -1]) {
            currentSum += nums[i];
        } else{
            maxSum = Math.max(maxSum, currentSum);
            currentSum = nums[i]; // Starting a new subarray if the the loop broke
        }
    }
    // Final Check for the last subarray
    maxSum = Math.max(maxSum, currentSum)
    return maxSum
};

// TestCases
console.log(maxAscendingSum([10,20,30,5,10,50])); // Expected output: 65
console.log(maxAscendingSum([10, 20, 30, 40, 50]));    // Output: 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // Output: 33
