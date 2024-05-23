// import module
const http = require('http');
const app = require('./app');
const { error } = require('console');

// normalize port
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

//define port 
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// error manage 
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    //get adress server 
    const adress = server.adress();
    const bind = typeof adress === 'string' ? 'pipe' + adress : 'port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated priviligies');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + 'already use');
            process.exit(1);
            break;

        default:
            throw error
    }
} ;

// create HTTP server 
const server = http.createServer(app);

//event manage on the server 
server.on(error, errorHandler) ;
server.on('listening', ()=>{
    const address = server.address() ;
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port ;
    console.log('listened on' + bind)
})

server.listen(port) ;


