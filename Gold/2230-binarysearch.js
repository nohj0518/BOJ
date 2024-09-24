/**
 * 수 고르기 https://www.acmicpc.net/problem/2230
 */
const fs = require("fs");
/*
const input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
*/

/**
 * 수열의 임의의 요소 target을 선택하고
 * target + M보다 크거나 같은 값 중 가장 작은 값을 X라고 하면,
 * X(X 는 target+M 보다 크거나 같음) - target의 최솟값을 찾으면 됩니다.
 * |ㅁ-ㅇ| >= M
 */

const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let minDiff = Infinity;
arr.map((X, idx) => {
  let st = idx + 1;
  let ed = N;
  let target = X + M;
  while (st < ed) {
    let mid = Math.floor((st + ed) / 2);
    if (arr[mid] >= target) {
      ed = mid;
    } else {
      st = mid + 1;
    }
  }
  if (st < N) {
    minDiff = Math.min(minDiff, arr[st] - X);
  }
});

console.log(minDiff);
