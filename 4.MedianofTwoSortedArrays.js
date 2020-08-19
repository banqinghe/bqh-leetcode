let nums1 = [1, 2, 3, 4];
let nums2 = [2, 3, 4, 5, 6];

// 试图逐步生成一个有序数组

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   let result = [],
//     length1 = nums1.length,
//     length2 = nums2.length,
//     sum = length1 + length2,
//     isOdd = Math.floor(sum / 2) === sum / 2 ? false : true;

//   // console.log(Math.floor(sum / 2));
//   // console.log(sum);
//   // console.log(isOdd);

//   for (let i = 0; i < sum / 2 + 1; i++) {
//     if (nums1.length && nums2.length) {
//       if(nums1[0] < nums2[0]) {
//         result.push(nums1.shift());
//       } else {
//         result.push(nums2.shift());
//       }
//     } else if (nums1.length > 0) {
//       result.push(nums1.shift());
//     } else {
//       result.push(nums2.shift());
//     }
//   }

//   if (isOdd) {
//     return result[result.length - 2];
//   } else {
//     return (result[result.length - 1] + result[result.length - 2]) / 2;
//   }

//   // return result;
// };

// // 仅仅排序来解决的话似乎也不慢（和上面一种速度竟然一样）
// // sort函数有一个小小的语法坑，默认的compareFunction是按照字典序排序的，即使是数字数组，也会先转化为字符串数组再排序

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const array = nums1.concat(nums2).sort((a, b) => {
//     return a - b;
//   });
//   const sum = nums1.length + nums2.length;
//   console.log(array);
//   if (Math.floor(sum / 2) === sum / 2) { // even
//     return (array[sum / 2] + array[sum / 2 - 1]) / 2;
//   } else { // odd
//     return array[Math.floor(sum / 2)];
//   }
// };


// 一样的方法放进去速度可以有两倍的差别，有点不信这个速度判定了

// 二分查找法，也就是题目里说明的时间复杂度为 O(log(m+n))
// 该方法每次都会淘汰掉一定小于等于中位数的子数组
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let total = nums1.length + nums2.length;
  //偶数时中位数为最中间两个数的平均数
  if (total % 2 == 0) {
    let left = find(nums1, 0, nums2, 0, Math.floor(total / 2));
    let right = find(nums1, 0, nums2, 0, Math.floor(total / 2) + 1);
    return (left + right) / 2.0;
  } else {
    return find(nums1, 0, nums2, 0, Math.floor(total / 2) + 1);
  }
}

//find为查找中位数的函数，其中i,j表示计算计算中位数的
function find(nums1, i, nums2, j, k) {
  console.log("nums1: "+ nums1.slice(i));
  console.log("nums2: "+ nums2.slice(j));
  console.log('k: ' + k);
  
  if (nums1.length - i > nums2.length - j) {
    return find(nums2, j, nums1, i, k); //默认第一个数组为长度较短的数组
  }

  //如果只有一个数，第一个数组为空，返回第二个数组的第一个元素；否则返回两个数组中第一个数的较小值
  if (k == 1) {
    if (nums1.length == i) return nums2[j];
    else return Math.min(nums1[i], nums2[j]);
  }

  //因为第一个数组默认长度较短，如果为空，直接返回第二个数组中的第k个元素
  if (nums1.length == i) return nums2[j + k - 1];

  //si，sj记录两个数组删除后的第一个元素位置
  let si = Math.min(i + Math.floor(k / 2), nums1.length),
    sj = j + Math.floor(k / 2);

  console.log('i: ' + i + '  j: ' + j);
  console.log('si: ' + si + '  sj: ' + sj);
  console.log();
  if (nums1[si - 1] > nums2[sj - 1]) {
    return find(nums1, i, nums2, sj, k - (sj - j)); //每次删除后更新数组的开始位置并将查找的k-已删除的元素
  } else {
    return find(nums1, si, nums2, j, k - (si - i));
  }
}


console.log(findMedianSortedArrays(nums1, nums2));