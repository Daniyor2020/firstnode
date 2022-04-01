const { readFile } = require("fs");

console.log("start a first task");
// check file path!!

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("end a first task");
});

console.log("starting next task");
