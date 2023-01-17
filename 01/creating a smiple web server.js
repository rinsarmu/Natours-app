const fs = require('fs')
const http = require('http')

const port = '8000'
const host = '127.0.0.1'

const server = http.createServer((req, res)=>{

    res.end("Hello romm the server ")
})

server.listen(port, host, (err)=>{
    console.log("listening...");
})