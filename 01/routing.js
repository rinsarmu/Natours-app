const fs = require('fs')
const http = require('http')

const port = '8000'
const host = '127.0.0.1'

const server = http.createServer((req, res)=>{
    const url = req.url;

    //Routing
    if(url === '/overview' || url === '/'){
        return res.end("Overview")
    } 
    else if(url==='/products'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        return res.end("<h1> Product </h1>");
    } 
    else if(url ==='/api') {
        return res.end("end")
    }
    
    else { 
        res.writeHead(404); // to add status code

        res.end("404 - Not found ")
    }
})

server.listen(port, host, (err)=>{
    console.log("listening...");
})