var twoSum = function(nums, target) {
    let hashmap = {}; // To store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashmap.hasOwnProperty(complement)) {
            return [hashmap[complement], i];
        }
        hashmap[nums[i]] = i;
    }
};
