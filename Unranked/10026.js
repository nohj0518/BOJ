/**
 * 적록색약 https://www.acmicpc.net/problem/10026
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((v) => v.split(""));
const visited_a = new Array(N).fill(new Array(N).fill(0));
const visited_b = new Array(N).fill(new Array(N).fill(0));
const weak_color_graph = graph.map((v) => v.map((c) => (c == "G" ? "R" : c)));

const d_x = [-1, 1, 0, 0];
const d_y = [0, 0, -1, 1];

const bfs = (sx, sy) => {
  const q = [];
  const color = graph[sx][sy];
  q.push([sx, sy]);

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const dx = x + d_x[i];
      const dy = y + d_y[i];
      if (dx < 0 || dx >= N || dy < 0 || dy >= N) continue;
      if (visited_a[dx][dy] == 0 && graph[dx][dy] === color) {
        q.push([dx, dy]);
        visited_a[dx][dy] += 1;
      }
    }
  }
};

const bfs_weak = (sx, sy) => {
  const q = [];
  const color = weak_color_graph[sx][sy];
  q.push([sx, sy]);

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const dx = x + d_x[i];
      const dy = y + d_y[i];
      if (dx < 0 || dx >= N || dy < 0 || dy >= N) continue;
      if (visited_b[dx][dy] == 0 && weak_color_graph[dx][dy] === color) {
        q.push([dx, dy]);
        visited_b[dx][dy] += 1;
      }
    }
  }
};

let cnt_a = 0;
let cnt_b = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited_a[i][j] == 0 && graph[i][j]) {
      bfs(i, j);
      cnt_a++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited_b[i][j] == 0 && weak_color_graph[i][j]) {
      bfs_weak(i, j);
      cnt_b++;
    }
  }
}

console.log(cnt_a, cnt_b);
