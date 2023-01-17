in SYnch 
process is executed one aftert the other.
that means waiting each other. 

Asynch
but here the process run in the background and when the running completed the callback function is called.

in nodejs there is only a single thread.

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