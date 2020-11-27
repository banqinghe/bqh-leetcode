// 1370. 上升下降字符串

// 桶排序

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let len = s.length,
      res = [],
      bucket = new Array(26).fill(0);
      bucketSize = 0;
  
  for (let i = 0; i < len; i++) {
      bucket[s.charCodeAt(i) - 97]++;
      bucketSize++;
  }
  
  while (bucketSize > 0) {
      for (let i = 0; i < 26; i++) {
          if (bucket[i] > 0) {
              res.push(String.fromCharCode(i + 97));
              bucketSize--;
              bucket[i]--;
          }
      }
      for (let i = 25; i >= 0; i--) {
          if (bucket[i] > 0) {
              res.push(String.fromCharCode(i + 97));
              bucketSize--;
              bucket[i]--;
          }
      }
      
  }

  return res.join('');
};