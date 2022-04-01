const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    // blocking code!!!!git s
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}+${j}`);
      }
    }
    res.end("about page");
  }
  res.end(`
    <h1>Oops!</h>
    <p> we can't seem to find the page you are looking for </p>
    <a href="/" > back home</a>
    `);
});

server.listen(8888, () => {
  console.log("server is running on port 8888");
});
const items= [1,[3,[4,5]],[8],9,7];
const newItems= _.flattenDeep(items)
console.log(newItems)
