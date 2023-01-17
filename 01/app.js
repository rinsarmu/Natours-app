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
    else if(url==='/product'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        return res.end("<h1> not Product </h1>");
    } 
    else if(url ==='/api') {
        fs.readFile(`${__dirname}/Data/packData.json`, 'utf-8', (err, data) =>{
            if(!err) {
                return res.end(data)
            } else {
                console.log("not file");
            }
        })
   
    }
    
    else { 
        res.writeHead(404); // to add status code

        res.end("404 - Not found ")
    }
})

//reading asyn data

fs.readFile('data.txt', 'utf-8', (err,data)=>{
    if(!err){
       fs.readFile(`${data}.txt`, 'utf-8', (err, data)=>{
        console.log(data);
        //writing async
            fs.writeFile('txt.txt', `Hello again! \n ${data} \n Date : ${Date.now().toLocaleString()}`, err=>{
                if(err){
                    console.log(err);
                }
            })
       })
    }
})
console.log("after reading");

console.log("after writing");

server.listen(port, host, (err)=>{
    console.log("listening...");
})