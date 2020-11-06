// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//   let total = s.length;

//   if (total === 0) {
//     return "";
//   }

//   if (numRows === 1) {
//     return s;
//   } 

//   // let height = numRows - 1;
//   let block = total / (2 * numRows - 2);
//   let width = Math.floor(block) * (numRows - 1);
//   console.log(block + ' ' + width);
//   let last = total - Math.floor(block) * (2 * numRows - 2);
//   // console.log(last);

//   console.log(width);

//   width += 1 + last === 0 ? -1 : last <= numRows ? 0 : last - numRows;
//   // if (last <= numRows && last > 0) {
//   //   width += 1;
//   // } else if (last > numRows) {
//   //   width += 1 + last - numRows;
//   // }
  
//   let matrix = new Array(numRows);
//   for (let i = 0; i < numRows; i++) {
//     matrix[i] = new Array(width);
//   }
//   for (let i = 0; i < numRows; i++) {
//     for (let j = 0; j < width; j++) {
//       matrix[i][j] = ' ';
//     }
//   }
  
//   let di = 1;
//   let dj = 0;
//   let i = 0, j = 0;
//   for (let k = 0; k < total; k++) {
//     if (i + di === numRows || i + di < 0) {
//       di = -di;
//       dj = dj === 0 ? 1 : 0;
//     }
//     matrix[i][j] = s[k];
//     i += di;
//     j += dj;
//   }
  
//   // console.log(matrix);

//   let result = "";

//   for (let i = 0; i < numRows; i++) {
//     // console.log(matrix.filter(c => c !== ' '));
//     result += matrix[i].filter(c => c !== ' ').join('');
//     // console.log(matrix[i]);
//   }

//   // console.log(result);
//   return result;
// };


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  
  let rows = new Array(Math.min(numRows, s.length));
  for (let i = 0; i < rows.length; i++) {
    rows[i] = "";
  }
  let curRow = 0;
  let goingDown = false;
  
  for (let c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) {
      goingDown = !goingDown;
    }
    curRow += goingDown ? 1 : -1;
  }
  
  let ret = "";
  for (let row of rows) {
    ret += row;
  }
  return ret;
};

// let s = "a";
let s = "PAYPALISHIRING"
let  numRows = 3;
// convert(s, numRows)
console.log(convert(s, numRows));