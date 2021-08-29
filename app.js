const http = require('http');
const host = "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
  res.write('Hello Po & Oil!');
  res.end();
});

server.listen(port, host, ()=> {
  console.log(`Server running on port .${port}`);
})