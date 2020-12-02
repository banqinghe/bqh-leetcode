// 17. 电话号码的字母组合
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

// 最基本的回溯

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }

  let dictory = new Map();
  dictory.set('2', ['a', 'b', 'c']);
  dictory.set('3', ['d', 'e', 'f']);
  dictory.set('4', ['g', 'h', 'i']);
  dictory.set('5', ['j', 'k', 'l']);
  dictory.set('6', ['m', 'n', 'o']);
  dictory.set('7', ['p', 'q', 'r', 's']);
  dictory.set('8', ['t', 'u', 'v']);
  dictory.set('9', ['w', 'x', 'y', 'z']);

  let result = [];
  recursive(digits, dictory, 0, '', result);
  return result;
};

function recursive(digits, dictory, pos, currentStr, result) {
  if (pos === digits.length) {
    result.push(currentStr);
    return;
  }
  let readyChar = dictory.get(digits[pos]);

  for (let i = 0, len = readyChar.length; i < len; i++) {
    recursive(digits, dictory, pos + 1, currentStr + readyChar[i], result);
  }
  pos++;
}