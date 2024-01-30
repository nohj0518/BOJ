/**
 * AC https://www.acmicpc.net/problem/5430
 */
const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  const [CMD, n, ARR] = input.splice(0, 3);
  calcAC(CMD, n, ARR);
}

function calcAC(CMD, n, ARR) {
  var regex = /[^0-9,]/g;
  let arr = n > 0 ? ARR.replace(regex, "").split(",").map(Number) : [];
  let check_error = true;
  let check_reverse = false;
  let [l_pivot, r_pivot] = [0, arr.length];
  for (var cmd of CMD.split("")) {
    if (cmd == "R") {
      check_reverse = !check_reverse;
    } else {
      if (l_pivot < arr.length && r_pivot > 0) {
        if (check_reverse) {
          r_pivot--;
        } else {
          l_pivot++;
        }
      } else {
        check_error = false;
        break;
      }
    }
  }

  if (check_error) {
    const result = arr.slice(l_pivot, r_pivot);
    if (check_reverse) {
      console.log("[" + result.reverse().join(",") + "]");
    } else {
      console.log("[" + result.join(",") + "]");
    }
  } else console.log("error");
}
