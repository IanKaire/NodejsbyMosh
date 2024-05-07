//Http Module
const http = require('http');

const server = http.createServer();
const webServer = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Hello World");
        res.end();
    }
    else if(req.url === '/api/courses'){
        res.write(JSON.stringify(['Cloud Computing', 'I.T Service Management']));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(3000);
webServer.listen(8000);
