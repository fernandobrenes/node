// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Docker World!\n');
});

const PORT = process.env.PORT || 8082

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
