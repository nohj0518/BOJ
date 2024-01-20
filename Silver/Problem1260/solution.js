/**
 * DFS와 BFS https://www.acmicpc.net/problem/1260
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
  .map((num) => num.split(" "));
const [N, M, start] = input.shift().map((x) => parseInt(x));
const graph = input.map((x) => [Number(x[0]), Number(x[1])]);
// console.log(N, M, start);
console.log(graph);

/**
 * DFS
 */

const dfs_route = Array(N + 1).fill(0);
dfs(start);
function dfs(i) {
  if (dfs_route[i] > 0) return;
  dfs_route[i] += 1;
  process.stdout.write(i + " ");
  const available = [];
  for (g of graph) {
    if (g[0] == i) available.push(parseInt(g[1])); // 연결된 노드를 찾고 가능 배열에 push
    if (g[1] == i) available.push(parseInt(g[0])); // 연결된 노드를 찾고 가능 배열에 push
  }
  const sort = available.sort((a, b) => a - b);
  sort.map((a) => dfs(a));
  // 이동 가능한 노드를 저장한 배열 available에서 더 작은 곳을 먼저 방문하도록 sort. 한뒤 dfs 로 방문
}
console.log("");
/**
 * BFS
 */
const bfs_route = Array(N + 1).fill(0);
const que = [];
que.push(Number(start));
while (que.length > 0) {
  const node = que.shift();
  bfs(node);
}

function bfs(i) {
  if (bfs_route[i] > 0) return;
  bfs_route[i] += 1;
  process.stdout.write(i + " ");
  const available = [];
  for (g of graph) {
    if (g[0] == i) available.push(parseInt(g[1]) * 1); // 연결된 노드를 찾고 가능 배열에 push
    if (g[1] == i) available.push(parseInt(g[0]) * 1); // 연결된 노드를 찾고 가능 배열에 push
  }
  const sort = available.sort((a, b) => a - b);
  que.push(...sort);
}
