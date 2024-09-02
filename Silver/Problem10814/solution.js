/**
 * 나이순 정렬 https://www.acmicpc.net/problem/10814
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = input.shift().split(" ");

let member = Array(N).fill([0, ""]);
for (let i = 0; i < N; i++) {
  const [age, name] = input[i].split(" ");
  member[i] = [Number(age), name];
}

member
  .sort((a, b) => a[0] - b[0])
  .map((member) => {
    console.log(member[0], member[1]);
  });
