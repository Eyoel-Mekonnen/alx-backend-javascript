const express = require('express');

const app = express();
const host = 'localhost';
const port = 1245;

const route = require('./routes/index');

app.use('/', route);
app.listen(port, host, () => {
  console.log(`Server listening on ${port}: ${host}`);
});
module.exports = app;
