/**
 * 뱀과 사다리 게임 https://www.acmicpc.net/problem/16928
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

let ladder = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input.shift().split(" ").map(Number);
  ladder.push([x, y]);
}
let snake = [];
for (let i = 0; i < M; i++) {
  const [u, v] = input.shift().split(" ").map(Number);
  snake.push([u, v]);
}
ladder = ladder.sort((a, b) => a[0] - b[0]);
snake = snake.sort((a, b) => a[0] - b[0]);
let queue = [[1, 0]];
const visited = Array(101).fill(0);
let q = [];
while (queue.length > 0) {
  q = queue.shift();
  if (q[0] == 100) {
    console.log(q[1]);
    break;
  }
  bfs(q);
}

function bfs(q) {
  let node = q[0];
  const count = q[1];
  if (visited[node] > 0) return;
  if (node > 100) return;
  visited[node] = count + 1;
  // move by ladder or snake
  ladder.map((l) => {
    if (l[0] === node) {
      node = l[1];
    }
  });
  snake.map((s) => {
    if (s[0] === node) {
      node = s[1];
    }
  });
  // move by dice
  for (let dice = 1; dice <= 6; dice++) {
    queue.push([node + dice, count + 1]);
  }
}

//console.log("visited 100 : ", visited[100]);
