const fs = require('fs')
const http = require('http')

const port = '8000'
const host = '127.0.0.1'

const server = http.createServer((req, res)=>{

    res.end("Hello romm the server ")
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