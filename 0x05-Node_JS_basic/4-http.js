const http = require('http');

const app = http.createServer();
const port = 1245;
const host = 'localhost';
app.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton school!');
  res.end();
});
app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}: ${port}\n`);
});
module.exports = app;
