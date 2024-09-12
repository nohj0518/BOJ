/**
 * 수들의 합 5  https://www.acmicpc.net/problem/2018
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
const ARR = new Array(N).fill().map((_, i) => i + 1);
let result = 1;

for (let i = 2; i < ARR.length / 2; i++) {
  // pointer 들이 생김. 2포인터 3포인터 4포인터.... 늘어남
  // pointer 들을 초기화함
  let pointer = new Array(i).fill().map((_, i) => i);
  for (let j = 0; j < ARR.length / 2; j++) {
    // x 포인터들이 ARR 을 돌면서 연속하는 합이 N 이 되는걸 찾음
    const sum = pointer.reduce((acc, cur) => {
      return (acc += ARR[cur]);
    }, 0);
    // console.log("test >> ", pointer, sum);

    if (sum === N) {
      result += 1;
      break;
      // console.log("찾았다 >> ", sum, result);
    }
    // pointer 들을 옮겨준다
    pointer = pointer.map((p) => (p += 1));
  }
}

console.log(result);
