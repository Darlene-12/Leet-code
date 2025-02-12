/**
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} - The median of the two sorted arrays
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array to optimize binary search
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Swap to make nums1 the smaller array
    }

    let x = nums1.length;
    let y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        // Partition nums1 and nums2
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // Handling edge cases when partition is at the boundaries
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

        // If correct partition is found
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // If total length is even, median is average of two middle elements
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                // If total length is odd, median is max of left partition
                return Math.max(maxLeftX, maxLeftY);
            }
        }
        // If maxLeftX is greater, move partitionX left
        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        }
        // If maxLeftY is greater, move partitionX right
        else {
            low = partitionX + 1;
        }
    }
};
