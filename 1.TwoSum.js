/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = new Map();
  for (let i = 0; i < nums.length; i++) {
    result.set(target - nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if (result.has(nums[i]) && i != result.get(nums[i])) {
      return new Array(i, result.get(nums[i]));
    }
  }
};

// 更好的方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], [i]);
    }
  }
};

// Map，Array和Object都可以使用，效果相同