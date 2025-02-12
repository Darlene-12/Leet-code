/**
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @return {number} - The median of the two sorted arrays
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // If nums1 is larger than nums2, swap them to ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let x = nums1.length;
    let y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        // Partition nums1 and nums2
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // Handle edge cases when partition is at the boundaries
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

        // If the correct partition is found
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // If total length is even, return the average of two middle elements
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
            } else {
                // If total length is odd, return the max of the left partition
                return Math.max(maxLeftX, maxLeftY);
            }
        }
        // If maxLeftX is too large, move partitionX left
        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        }
        // If maxLeftY is too large, move partitionX right
        else {
            low = partitionX + 1;
        }
    }

    // Handle edge case when one array is empty
    if (nums1.length === 0) {
        if (y % 2 === 0) {
            return (nums2[y / 2 - 1] + nums2[y / 2]) / 2;
        } else {
            return nums2[Math.floor(y / 2)];
        }
    }
    if (nums2.length === 0) {
        if (x % 2 === 0) {
            return (nums1[x / 2 - 1] + nums1[x / 2]) / 2;
        } else {
            return nums1[Math.floor(x / 2)];
        }
    }

    // If the code reaches here, something went wrong
    throw new Error("Input arrays are not sorted properly.");
};

// Driver function to test the implementation
function testMedian() {
    let testCases = [
        { nums1: [1, 3], nums2: [2], expected: 2.0 },
        { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
        { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
        { nums1: [], nums2: [1], expected: 1.0 },
        { nums1: [2], nums2: [], expected: 2.0 },
        { nums1: [1, 3, 8], nums2: [7, 11, 18, 19, 21], expected: 11.0 },
        { nums1: [1, 2, 3, 4], nums2: [5, 6, 7, 8, 9], expected: 5.0 }
    ];

    testCases.forEach(({ nums1, nums2, expected }) => {
        let result = findMedianSortedArrays(nums1, nums2);
        console.log(`nums1 = [${nums1}], nums2 = [${nums2}] -> Median: ${result} (Expected: ${expected})`);
    });
}

// Run tests
testMedian();
