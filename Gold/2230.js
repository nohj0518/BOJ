/**
 * 수 고르기 https://www.acmicpc.net/problem/2230
 */
const fs = require("fs");
/*
const input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ");
const arr = input.map(Number).sort((a, b) => a - b);

const lower_bound = (target, st, ed) => {
  let mid;
  let answer = -1;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    const diff = Math.abs(target - arr[mid]);
    if (diff == M) {
      answer = mid;
      ed = mid - 1;
    } else if (diff > M) {
      answer = mid;
      st = mid + 1;
    } else {
      ed = mid - 1;
      diffs.push(diff);
    }
  }
  return answer;
};

let diffs = [];
let minDiff = 2000000000;
let checker = false;
arr.map((target) => {
  let st = 0;
  let ed = arr.length - 1;
  const t = lower_bound(target, st, ed);
  if (t > -1) {
    const diff = Math.abs(target - arr[t]);
    if (minDiff > diff) minDiff = diff;
    checker = true;
  }
});

checker ? console.log(minDiff) : console.log(Math.min(...diffs));
