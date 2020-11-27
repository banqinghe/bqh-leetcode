// 15. 三数之和
// https://leetcode-cn.com/problems/3sum/

// 使用双指针，空间复杂度为 O(n^2)
// 现将数组排序，然后 first 从头向后开始遍历，在 first之后的部分使用双指针搜索

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);

  let result = [];
  for (let first = 0; first < len; first++) {
    // first 位置上的值和上一个不同
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let target = -nums[first];
    for (let second = first + 1, third = len - 1; second < len; second++) {
      // second 位置上的值和上一个不同
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      // 保证 second 在 third 左侧，third 从末尾向前遍历
      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }
      // 指针重合了还未找到指定的 target，退出循环
      if (second == third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        result.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return result;
};