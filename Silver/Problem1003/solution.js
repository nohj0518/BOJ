/**
 * 피보나치 함수 https://www.acmicpc.net/problem/1003
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();
const nums = input;

const fibo = [0, 1];

for (let i = 0; i <= 40; i++) {
  fibonacci(i);
}

function fibonacci(n) {
  if (n === 0) return fibo[0];
  if (n === 1) return fibo[1];
  fibo[n] = fibo[n - 2] + fibo[n - 1];
}

nums.map((num) => {
  if (num === 0) console.log(1, 0);
  else console.log(fibo[num - 1], fibo[num]);
});
