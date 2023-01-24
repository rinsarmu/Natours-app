const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) =>{

    const readable = fs.createReadStream('../text.txt')
    readable.on('data', chunk=>{
        res.end(chunk)
    })

})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening");
})