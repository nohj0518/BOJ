/**
 * 그림 https://www.acmicpc.net/problem/1926
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const graph = input.map((v) => v.split(" ").map((p) => +p));

let visit = new Array(N).fill(new Array(M).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

console.log(N, M);
console.log(graph);
console.log(visit);

function bfs(x, y) {
  let queue = [];
  visit[x][y] += 1;
  queue.push([x, y]);

  while (queue.length > 0) {
    let [X, Y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = X + dx[dir];
      const ny = Y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visit[nx][ny] > 0 || graph[nx][ny] == 0) continue;

      visit[nx][ny] += 1;
      graph[nx][ny] += graph[x][y];
      queue.push([nx, ny]);
    }
  }
}

let pictures = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    bfs(i, j);
  }
}

console.log(graph);
