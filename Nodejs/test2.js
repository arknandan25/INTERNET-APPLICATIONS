//Creating a very basic web server; ES2016
const http = require('http');
const hostname  = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("Hello, this is Ark");
});
// listen takes port, hostname and a callback
server.listen(port, hostname, ()=>{
    console.log('Server started at port:'+port);
});