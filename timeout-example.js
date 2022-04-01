// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// end operating system process

setInterval(() => {
  console.log("Hello world");
}, 2000);

console.log("i will run first");

// process stays alive unless we kill it with ctrl+c
// unexpect error
