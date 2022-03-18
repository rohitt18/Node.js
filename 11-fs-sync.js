const { readFileSync, writeFileSync } = require("fs");
// this would be the same as =>
// const fs = require("fs");
// fs.readFileSync();
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } // to create a new value in the same file also called as { signal } or options
);
console.log("done with this task");
console.log("starting the next one");