const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hollo Po & Oil to new house!');
})

// const server = http.createServer((req,res) => {
//   res.write('Hello Po & Oil!');
//   res.end();
// });

app.listen(port, ()=> {
  console.log(`Server running on port .${port}`);
})
