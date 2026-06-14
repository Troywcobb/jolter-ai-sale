const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.ico': 'image/x-icon'
};

function safeFilePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const requested = clean === '' ? 'index.html' : clean;
  const full = path.resolve(root, requested);
  if (!full.startsWith(root)) return null;
  return fs.existsSync(full) && fs.statSync(full).isFile() ? full : path.join(root, 'index.html');
}

const server = http.createServer((req, res) => {
  const filePath = safeFilePath(req.url || '/');
  if (!filePath) {
    res.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const body = fs.readFileSync(filePath);
  res.writeHead(200, {
    'content-type': types[ext] || 'application/octet-stream',
    'cache-control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
  });
  res.end(body);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Jolter.ai sale page listening on ${port}`);
});
