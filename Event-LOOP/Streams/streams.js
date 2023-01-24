const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) =>{
    console.log("Requesting");
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening");
})