const http = require('http') ;
const port = 3000 ;

const server = http.createServer((req, res)=> {
    res.end('you have create your server') 
}) ;

server.listen(process.env.PORT || port) ;
console.log('server is listen on port', port);
