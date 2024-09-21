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

function bfs(x, y, area) {
  let queue = [];
  visit[x][y] += 1;
  area += 1;
  queue.push([x, y]);

  while (queue.length > 0) {
    let [X, Y] = queue.shift();
    area += 1;

    for (let dir = 0; dir < 4; dir++) {
      const nx = X + dx[dir];
      const ny = Y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visit[nx][ny] > 0 || graph[nx][ny] == 0) continue;

      visit[nx][ny] += 1;
      graph[nx][ny] += graph[X][Y];
      queue.push([nx, ny]);
    }
  }
  if (max_area <= area) max_area = area;
}

let cnt_pic = 0;
let max_area = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] == 0 || visit[i][j] > 0) continue;
    if (graph[i][j] == 1) {
      cnt_pic += 1;
      bfs(i, j, 0);
    }
  }
}

console.log(cnt_pic);
console.log(max_area);
