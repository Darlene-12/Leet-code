class SpecialArray {
    constructor(nums) {
        this.nums = nums; // Store the array in the object
    }

    isSpecial() {
        // Check if the array is special
        for (let i = 0; i < this.nums.length - 1; i++) {
            if ((this.nums[i] % 2) === (this.nums[i + 1] % 2)) {
                return false; // Return false if adjacent elements have the same parity
            }
        }
        return true; // Return true if all adjacent elements have different parity
    }
}

// Test cases
const arr1 = new SpecialArray([1]);         // Create an object of SpecialArray
console.log(arr1.isSpecial());             // true

const arr2 = new SpecialArray([2, 1, 4]);  // Another object
console.log(arr2.isSpecial());             // true

const arr3 = new SpecialArray([4, 3, 1, 6]);
console.log(arr3.isSpecial());             // false

