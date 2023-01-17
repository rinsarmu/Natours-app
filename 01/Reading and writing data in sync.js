const fs = require('fs')

//Reading in sync. sync means synchrounos
const data = fs.readFileSync('txt.txt', 'utf-8')

//write data in synch
fs.writeFileSync('txt.txt', 'Nice to meet u')
console.log(data);