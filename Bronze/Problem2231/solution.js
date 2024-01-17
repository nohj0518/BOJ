const fs = require("fs");
/*
const input = fs
.readFileSync("/dev/stdin")
.toString()
.trim()
*/

const input = fs.readFileSync("input.txt").toString().trim();

const N = input;
let n = N - 1;
let constructors;
const result = [];

while (n > 0) {
  constructors = n;
  const constructor = constructors.toString().split("");
  const sum_constructor = constructor.reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
  if (N == n + sum_constructor) {
    result.push(constructors);
  }
  n--;
}
result.length > 0 ? console.log(result.at(-1)) : console.log(0);
