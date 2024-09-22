/**
 * 숫자 카드2 https://www.acmicpc.net/problem/10816
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
const cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = input[2];
const num = input[3].split(" ").map(Number);

const lower_idx = (cards, target, st, ed) => {
  let mid;
  let answer = -1;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    if (target === cards[mid]) {
      answer = mid;
      ed = mid - 1;
    } else {
      if (target > cards[mid]) {
        st = mid + 1;
      } else if (target < cards[mid]) {
        ed = mid - 1;
      } else break;
    }
  }
  return answer;
};

const higher_idx = (cards, target, st, ed) => {
  let mid;
  let answer = -1;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    if (target === cards[mid]) {
      answer = mid;
      st = mid + 1;
    } else {
      if (target > cards[mid]) {
        st = mid + 1;
      } else if (target < cards[mid]) {
        ed = mid - 1;
      } else break;
    }
  }
  return answer;
};

const result = [];

num.map((target) => {
  let st = 0;
  let ed = N - 1;
  let binary_first_idx = lower_idx(cards, target, st, ed);
  let binary_last_idx = higher_idx(cards, target, st, ed);

  if (binary_first_idx > -1 && binary_last_idx > -1)
    result.push(binary_last_idx - binary_first_idx + 1);
  else result.push(0);
});

console.log(result.join(" "));
