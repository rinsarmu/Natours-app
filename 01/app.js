const fs = require('fs')

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