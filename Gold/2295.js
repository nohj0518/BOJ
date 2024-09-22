/**
 * 세수의합 https://www.acmicpc.net/problem/2295
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const N = input.shift();
const ARR = input.map(Number).sort((a, b) => a - b);

// ARR[i] + ARR[j] + ARR[k] = ARR[l]
// twoSum ARR[i] + ARR[j] = twoDiff ARR[l]-ARR[k]
// i,j,k,l 는 같아도 된다.
let twoSumArr = [];

for (let i = 0; i < ARR.length; i++) {
  for (let j = 0; j < ARR.length; j++) {
    twoSumArr.push(ARR[i] + ARR[j]);
  }
}
twoSumArr = Array.from(new Set(twoSumArr)).sort((a, b) => a - b);

let maxL = -1;
for (let i = 0; i < ARR.length; i++) {
  for (let j = 0; j < ARR.length; j++) {
    let l = i;
    let k = j;
    let twoDiff = ARR[l] - ARR[k];
    // twoDiff 가 twoSumArr 에 있는지 이분탐색으로 찾기
    let st = 0;
    let ed = twoSumArr.length - 1;
    let mid;
    while (st <= ed) {
      mid = Math.floor((st + ed) / 2);
      if (twoDiff == twoSumArr[mid]) {
        if (maxL < ARR[l]) maxL = ARR[l];
        break;
      } else if (twoDiff > twoSumArr[mid]) {
        st = mid + 1;
      } else {
        ed = mid - 1;
      }
    }
  }
}

console.log(N, ARR, maxL);
