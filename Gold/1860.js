/**
 * 부분합 https://www.acmicpc.net/problem/1806
 *
 */
const fs = require("fs");
/*
const input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
*/
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = Infinity;
let en = 0;
let sum = 0;

for (let st = 0; st < arr.length; st++) {
  while (en < arr.length && sum < S) {
    sum += arr[en];
    en++;
  }

  if (sum >= S) {
    answer = Math.min(answer, en - st);
  }
  // st가 증가하므로 해당 값을 sum에서 빼줌
  sum -= arr[st];
}
answer = answer === Infinity ? 0 : answer;

console.log(answer);

/**
 * TLI
 * 배열의 합을 구할때는
 * arr.slice(st, en).reduct((acc, cur) => {return acc+cur},0)
 * 말고 sliding window 로 합을 구해야 효율적이다
 */
