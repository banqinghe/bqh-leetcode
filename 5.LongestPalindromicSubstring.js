// 暴力 Time limited

// 精简dp
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;

  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
  }

  let ans = "";

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {      
      dp[i][j] = s.charAt(i) == s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1]);

      if (dp[i][j] && (ans == null || j - i + 1 > ans.length)) {
        ans = s.substring(i, j + 1);
      }
    }
  }

  return ans;
}

// 普通的dp

// dp O(n^2)
// 604 ms, faster than 18.86% 

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;

  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  let start = 0;
  let end = 0;
  let max = 1;

  for (let i = 0; i < len - 1; i++) {
    dp[i][i] = true;
    // console.log(dp);
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      if (max < 2) {
        max = 2;
        start = i;
        end = i + 1;
      }
    }
  }
  dp[len - 1][len - 1] = true;
  
  // console.log(dp);

  for (let k = 3; k <= len; k++) {
    for (let i = 0; i + k - 1 < len; i++) {
      let j = i + k - 1;
      // console.log('k: ' + k + ' i: ' + i + '  j: ' + j);
      // console.log(s[i] + ' ' + s[j]);
      if (s[i] === s[j] && dp[i + 1][j - 1] === true) {
        dp[i][j] = true;
        max = k;
        start = i;
        end = j;
        // break;
      }
    }
  }

  // console.log(start + ' ' + end);
  // console.log(max);
  return s.substring(start, end + 1);
}

// 中心扩展的方法，时间复杂度也是O(n^2)，但空间复杂度是O(n)
// 136 ms, faster than 58.91%

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) {
    return "";
  }
  
  let start = 0, end = 0;
  
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  
  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let L = left, R = right;
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
}

let s = "babaaaaaaaaaaaaaaad";
// let s = 'aa'

console.log(longestPalindrome(s));

// console.log(isPalindromic('abccba'));
// console.log(isPalindromic('abc'));
// console.log(isPalindromic('baba'));
