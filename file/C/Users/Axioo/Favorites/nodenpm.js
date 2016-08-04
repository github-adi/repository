-My build of DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad++ (HTML Editor):
-Hacked:Run:
file:///C:/Users/Axioo/Favorites/nodenpm.js
-Via Node.js:
> const http = require('http');
undefined
>
> const hostname = '127.0.0.1';
undefined
> const port = 3000;
undefined
>
> const server = http.createServer((req, res) => {
...   res.statusCode = 200;
...   res.setHeader('Content-Type', 'text/plain');
...   res.end('Hello World\n');
... });
undefined
>
> server.listen(port, hostname, () => {
...   console.log(`Server running at http://${hostname}:${port}/`);
... });
Server {
  domain:
   Domain {
     domain: null,
     _events: { error: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     members: [] },
  _events:
   { request: [Function],
     connection: [Function: connectionListener],
     listening: { [Function: g] listener: [Function] } },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingSlaves: false,
  _slaves: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  _pendingResponseData: 0 }
> Server running at http://127.0.0.1:3000/
-Run of the http above.
