/**
 * 숫자카드 https://www.acmicpc.net/problem/10815
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
const arr = input[3].split(" ").map(Number);

const result = [];

arr.map((target) => {
  let st = 0;
  let ed = cards.length - 1;
  let checker = false;
  while (st <= ed) {
    mid = Math.floor((st + ed) / 2);
    if (target == cards[mid]) {
      checker = true;
      break;
    } else if (target > cards[mid]) {
      st = mid + 1;
    } else {
      ed = mid - 1;
    }
  }
  checker ? result.push(1) : result.push(0);
});
console.log(result.join(" "));
