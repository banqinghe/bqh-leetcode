// 767. 重构字符串
// https://leetcode-cn.com/problems/reorganize-string/

// 贪心算法，使用 map 对每个字符出现的次数计数
// 如果某个字符出现的次数大于 (length + 1) / 2，则必不可能有符合条件的重构结果
// 利用奇数偶数位置放置字符串
// 题解中有更快的方法（不使用 sort），优先放在奇数下标，如果某个字符出现次数为 (length + 1) / 2，则一定要放在偶数下标

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  let len = S.length;
  let m = new Map();
  for (let i = 0; i < len; i++) {
      m.set(S[i], m.has(S[i]) ? m.get(S[i]) + 1 : 1);
  }
  let sorted = Array.from(m);
  // sorted.sort((a, b) => b[1] - a[1]);
  
  // 出现次数最多的字符，出现次数若大于 (len + 1) / 2，则不可能使相邻字符不同
  if (sorted[0][1] > Math.floor((len + 1) / 2)) {
      return "";
  }

  let result = new Array(len);
  let current = 0;
  for (let i = 0, l = sorted.length; i < l; i++) {
      let j = current;
      while (sorted[i][1] > 0) {
          result[current] = sorted[i][0];
          current = current + 2 >= len ? 1 : current + 2;
          sorted[i][1]--;
      }
  }
  
  return result.join('');
};