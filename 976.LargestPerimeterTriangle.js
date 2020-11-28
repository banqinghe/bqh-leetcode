// 976. 三角形的最大周长
// https://leetcode-cn.com/problems/largest-perimeter-triangle/

// 贪心算法，要意识到三遍周长在排序后一定是挨着的

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => b - a);
  let max = 0;
  for (let i = 0, len = A.length; i < len && max === 0; i++) {
      if (A[i] < A[i + 1] + A[i + 2]) {
          max = A[i] + A[i + 1] + A[i + 2]
      }
  }
  return max;
};
