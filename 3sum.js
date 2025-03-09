var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicate elements

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;  // Skip duplicates
                while (left < right && nums[right] === nums[right + 1]) right--;  // Skip duplicates
            } else if (total < 0) {
                left++;  // Move left pointer to increase sum
            } else {
                right--;  // Move right pointer to decrease sum
            }
        }
    }

    return res;
};

// Example Usage
console.log(threeSum([-1,0,1,2,-1,-4]));  // Output: [[-1, -1, 2], [-1, 0, 1]]
