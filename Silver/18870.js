/**
 * 좌표압축 https://www.acmicpc.net/problem/18870
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const N = input[0];
const X = input[1].split(" ").map(Number);

const setX = Array.from(new Set(X)).sort((a, b) => a - b);
const result = [];

X.map((target) => {
  let st = 0;
  let ed = setX.length - 1;
  let mid;
  let answer = -1;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    if (target == setX[mid]) {
      answer = mid;
      break;
    } else if (target < setX[mid]) {
      ed = mid - 1;
    } else {
      st = mid + 1;
    }
  }
  result.push(answer);
});

console.log(result.join(" "));
