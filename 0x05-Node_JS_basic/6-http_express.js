const express = require('express');

const app = express();
const port = 1245;
const host = 'localhost';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, host, () => {
  console.log(`Server Listening on ${port}:${host}`);
});
module.exports = app;
