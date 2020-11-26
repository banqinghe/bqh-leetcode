// 11.27 每日一题
// https://leetcode-cn.com/problems/4sum-ii/

// 分组 + 哈希

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let m = new Map();
  let len = A.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (!m.has(A[i] + B[j])) {
              m.set(A[i] + B[j], 1);
          } else {
              m.set(A[i] + B[j], m.get(A[i] + B[j]) + 1);    
          }
      }
  }
  let cnt = 0;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (m.has(-(C[i] + D[j]))) {
              cnt += m.get(-(C[i] + D[j])) || 0;
          }
      }
  }
  return cnt;
};