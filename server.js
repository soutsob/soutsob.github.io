const http = require('http');
const fs = require('fs');
const path = require('path');

const directoryPath = path.resolve('./'); // absolute root for serving

// simple mime map for common types
const mime = {
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8'
};

function send404(res) {
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('File not found');
}

function serveFile(filePath, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            send404(res);
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const type = mime[ext] || 'application/octet-stream';
        res.writeHead(200, {'Content-Type': type});
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    try {
        // decode URL and prevent malformed sequences
        const decoded = decodeURIComponent(req.url.split('?')[0] || '/');

        // build safe filesystem path
        let safeRequested = path.normalize(path.join(directoryPath, decoded));

        // prevent path traversal outside directoryPath
        if (!safeRequested.startsWith(directoryPath)) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Bad request');
            return;
        }

        // If request ends with '/', treat as directory + index.html
        if (decoded.endsWith('/')) {
            safeRequested = path.join(safeRequested, 'index.html');
            fs.stat(safeRequested, (err, stats) => {
                if (!err && stats.isFile()) {
                    serveFile(safeRequested, res);
                } else {
                    send404(res);
                }
            });
            return;
        }

        // Check what the requested path points to
        fs.stat(safeRequested, (err, stats) => {
            if (!err) {
                // exists
                if (stats.isFile()) {
                    serveFile(safeRequested, res);
                } else if (stats.isDirectory()) {
                    // requested '/backend-services' but it's a directory -> serve index.html inside it
                    const idx = path.join(safeRequested, 'index.html');
                    fs.stat(idx, (ie, istats) => {
                        if (!ie && istats.isFile()) serveFile(idx, res);
                        else send404(res);
                    });
                } else {
                    send404(res);
                }
            } else {
                // doesn't exist as given path: try directory index candidate: path + '/index.html'
                const indexCandidate = path.join(safeRequested, 'index.html');
                fs.stat(indexCandidate, (ie, istats) => {
                    if (!ie && istats.isFile()) {
                        serveFile(indexCandidate, res);
                        return;
                    }
                    // optional convenience: try adding .html extension (e.g. /about -> about.html)
                    const htmlCandidate = safeRequested + '.html';
                    fs.stat(htmlCandidate, (he, hstats) => {
                        if (!he && hstats.isFile()) {
                            serveFile(htmlCandidate, res);
                        } else {
                            send404(res);
                        }
                    });
                });
            }
        });
    } catch (e) {
        // decodeURIComponent or other errors
        res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Bad request');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
