let nums1 = [3];
let nums2 = [-2, -1];

// 试图逐步生成一个有序数组

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let result = [],
    length1 = nums1.length,
    length2 = nums2.length,
    sum = length1 + length2,
    isOdd = Math.floor(sum / 2) === sum / 2 ? false : true;

  // console.log(Math.floor(sum / 2));
  // console.log(sum);
  // console.log(isOdd);

  for (let i = 0; i < sum / 2 + 1; i++) {
    if (nums1.length && nums2.length) {
      if(nums1[0] < nums2[0]) {
        result.push(nums1.shift());
      } else {
        result.push(nums2.shift());
      }
    } else if (nums1.length > 0) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }

  if (isOdd) {
    return result[result.length - 2];
  } else {
    return (result[result.length - 1] + result[result.length - 2]) / 2;
  }

  // return result;
};

// 仅仅排序来解决的话似乎也不慢（和上面一种速度竟然一样）
// sort函数有一个小小的语法坑，默认的compareFunction是按照字典序排序的，即使是数字数组，也会先转化为字符串数组再排序

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  const sum = nums1.length + nums2.length;
  console.log(array);
  if (Math.floor(sum / 2) === sum / 2) { // even
    return (array[sum / 2] + array[sum / 2 - 1]) / 2;
  } else { // odd
    return array[Math.floor(sum / 2)];
  }
};

// 一样的方法放进去速度可以有两倍的差别，有点不信这个速度判定了


console.log(findMedianSortedArrays(nums1, nums2));
