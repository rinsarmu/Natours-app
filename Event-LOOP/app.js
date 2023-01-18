const fs = require('fs');

setTimeout(() =>{
    console.log("Timer 1 is finished");
}, 0)

setImmediate(()=>{
    console.log("Immeditate  is running...");
})


fs.readFile('text.txt', ()=>{
    console.log("IO finished");
})


fs.readFile('text.txt', ()=>{
    console.log("IO finished");

    setTimeout(() =>{
        console.log("Timer 2 is finished");
    }, 0)
    
    setImmediate(()=>{
        console.log("Immeditate  2 is running...");
    })

    process.nextTick(()=>console.log("Next tick"))
    
})
console.log("Hello form top level code");