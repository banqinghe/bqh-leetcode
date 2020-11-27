// dp[i][j] 表示长度为 n，以第 j 个元音字母结尾的字符串数

// 使用递推公式更快

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
      dp[i] = new Array(5).fill(0);
  }
  for (let i = 0; i < 5; i++) {
      dp[1][i] = 1;
  }
  for (let i = 2; i <=n; i++) {
      for (let j = 0; j < 5; j++) {
          for (let k = 0; k <=j; k++) {
              dp[i][j] += dp[i - 1][k];
          }
      }
  }
  return dp[n].reduce((a, c) => a + c);
};

console.log(countVowelStrings(2));