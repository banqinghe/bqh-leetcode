s = "abcabcbb";
// s = "tmmzuxt";

// 方法是使用map将值和所以对应起来，当有相同的字符出现时，更改字串的起始索引start 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0
  }

  let max = 1;
  let map = new Map();
  map.set(s[0], 0);
  let arr = [];
  arr[0] = 1;

  let start = 0;

  for (let i = 1; i < s.length; i++) {
    if (map.has(s[i])) {
      start = map.get(s[i]) + 1 > start ? map.get(s[i]) + 1 : start; // 设当前index为之后的起始点
      // console.log(i + ' ' + start + ' ' + s[i]);
    }
    arr[i] = i - start + 1;

    max = Math.max(max, arr[i]);
    map.set(s[i], i);
  }
  // console.log(arr);
  return max;
};

// 讨论区有使用相同的方法，但是写法及其精简的：
function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;
  
  return s.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
  }, 0);
}

// 这是另一种思路
var lengthOfLongestSubstring = function(s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for( i = 0 ; i < sLen; i++ ){

    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    console.log(posIndex);

    if(posIndex > -1){
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    console.log('maxStr: ' + maxStr);
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring(s));
