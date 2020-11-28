// 493. 翻转对
// https://leetcode-cn.com/problems/reverse-pairs/

// 分治算法，利用归并排序

// 一开始在“跨两部分翻转对”这一操作中由于使用递增操作而不是 n3 += j - (mid + 1) 而超时
// merge 操作使用slice操作会拖慢速度（这是《算法导论》上比较直白的方法），要加快速度最好只使用一个数组
// 但是代码不够简洁明了（见末尾）

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length === 0) {
      return 0;
  }
  return reversePairsRecursive(nums, 0, nums.length - 1);
};

function reversePairsRecursive(nums, left, right) {
  if (left === right) {
      return 0;
  }

  let mid = Math.floor((left + right) / 2);
  // 左半部分中翻转对的数量
  let n1 = reversePairsRecursive(nums, left, mid);
  // 右半部分中翻转对的数量
  let n2 = reversePairsRecursive(nums, mid + 1, right);

  // 跨两部分的翻转对
  let n3 = 0;
  for (let i = left, j = mid + 1; i <= mid; i++) {
      for (; j <= right && nums[i] > 2 * nums[j]; j++);
      n3 += j - (mid + 1);
  }

  merge(nums, left, mid, right);

  return n1 + n2 + n3;
}

function merge(nums, left, mid, right) {
  let leftPart = nums.slice(left, mid + 1).concat(Infinity),
      rightPart = nums.slice(mid + 1, right + 1).concat(Infinity);
  
  for (let k = left, i = 0, j = 0; k <= right; k++) {
      if (leftPart[i] <= rightPart[j]) {
          nums[k] = leftPart[i++];
      } else {
          nums[k] = rightPart[j++];
      }
  }
}

// 更快的 merge
// function merge(nums, left, mid, right) {
//   const sorted = new Array(right - left + 1);
//   let p1 = left,
//     p2 = mid + 1;
//   let p = 0;
//   while (p1 <= mid || p2 <= right) {
//     if (p1 > mid) {
//       sorted[p++] = nums[p2++];
//     } else if (p2 > right) {
//       sorted[p++] = nums[p1++];
//     } else {
//       if (nums[p1] < nums[p2]) {
//         sorted[p++] = nums[p1++];
//       } else {
//         sorted[p++] = nums[p2++];
//       }
//     }
//   }
//   for (let k = 0; k < sorted.length; k++) {
//     nums[left + k] = sorted[k];
//   }
// }