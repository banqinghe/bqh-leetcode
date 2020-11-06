/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // console.log()
  p = p.replace(/\*{2,}/g, '*');
  p = '^' + p + '$'
  const pattern = new RegExp(p);
  console.log(pattern);
  return pattern.test(s);
};

console.log(isMatch('aab', 'c*a**b'));