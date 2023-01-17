const fs = require('fs')

//reading asyn data

fs.readFile('txt.txt', 'utf-8', (err,dat)=>{
    if(!err){
        console.log(dat);
    }
})

//writing async
fs.writeFile('txt.txt', 'Hello again!', err=>{
    if(err){
        console.log(err);
    }
})