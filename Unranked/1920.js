/**
 * 수 찾기 https://www.acmicpc.net/problem/1920
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

const ARR = input
  .shift()
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

const M = input.shift();

const num = input
  .shift()
  .split(" ")
  .map((v) => +v);

num.map((target) => {
  let st = 0;
  let ed = N - 1;
  let mid = Math.floor((st + ed) / 2);
  let result = -1;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    if (target == ARR[mid]) {
      result = mid;
      break;
    }
    if (target > ARR[mid]) {
      st = mid + 1;
    } else if (target < ARR[mid]) {
      ed = mid - 1;
    }
  }
  result == -1 ? console.log(0) : console.log(1);
});
