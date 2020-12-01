/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const len = nums.length;
    if (len === 0) {
        return [-1, -1];
    }
    return [lowerBound(nums, target, 0, len - 1), upperBound(nums, target, 0, len - 1)];
};

function lowerBound(nums, target, left, right) {
    if (left === right) {
        return nums[left] === target ? left : -1;
    }
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
        return lowerBound(nums, target, left, mid);
    } else {
        return lowerBound(nums, target, mid + 1, right);
    }
}

function upperBound(nums, target, left, right) {
    if (left === right) {
        return nums[left] === target ? left : -1;
    }
    const mid = Math.floor((left + right + 1) / 2);

    if (nums[mid] <= target) {
        return upperBound(nums, target, mid, right);
    } else {
        return upperBound(nums, target, left, mid - 1);
    }
}