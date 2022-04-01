const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short hostory");
  }
  res.end(`
<h1>Oops!</h>
<p> we can't seem to find the page you are looking for </p>
<a href="/" > back home</a>
`);
});

server.listen(8888);
const _ = require("lodash");

const items = [1, [3, [4, 5]], [8]];
const newItems = _.flattenDeep(items);
console.log(newItems);

const http = require("http");
