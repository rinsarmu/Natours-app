const fs = require('fs')
const http = require('http')
const path = require('path')
const httpUrl = require('url')

const port = '8000'
const host = '127.0.0.1'

const data = fs.readFileSync(`${__dirname}/Data/packData.json`)
const dataObj = JSON.parse(data)

const overview = fs.readFileSync(`${__dirname}/template/template__overview.html`, 'utf-8')
const productTemplate = fs.readFileSync(`${__dirname}/template/template__product.html`, 'utf-8')

const card = fs.readFileSync(`${__dirname}/template/card.html`, 'utf-8')

const replaceTemplate = (temp, element) =>{
    console.log("replace");
    let output = temp.replace(/{%PRODUCTNAME%}/g,element.productName )
     output = output.replace(/{%PRODUCTIMAGE%}/g,element.image )
     output = output.replace(/{%COUNTRY%}/g,element.from )
     output = output.replace(/{%NUTRIENTS%}/g,element.nutrients )
     output = output.replace(/{%QUANTITY%}/g,element.quantity )
     output = output.replace(/{%PRICE%}/g,element.price )
     output = output.replace(/{%DESCRIPTION%}/g,element.description )
     output = output.replace(/{%PRODUCTID%}/g,element.id )


     if(element.organic)
     output = output.replace(/{%NOTORGANIC%}/g,'not-organic' )

     return output;




}
const server = http.createServer((req, res)=>{
    const url = req.url;

    const {query, pathname} = httpUrl.parse(req.url, true)
console.log(query, pathname);
    //Routing

    //overview
    if(pathname === '/overview' || pathname === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        const cardsHtml = dataObj.map(el=> replaceTemplate(card, el)).join('')
        console.log(cardsHtml);
        const cardPlaceHolder = overview.replace(/{%CARD%}/g, cardsHtml)
        return res.end(cardPlaceHolder)
    } 

    //product
    else if(pathname==='/product'){
        console.log(query);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        const product = dataObj[query.id]
        console.log(product);
        const output = replaceTemplate(productTemplate, product)
        res.end(output)
    } 

    //api
    else if(pathname ==='/api') {
        fs.readFile(`${__dirname}/Data/packData.json`, 'utf-8', (err, data) =>{
            if(!err) {
                return res.end(data)
            } else {
                console.log("not file");
            }
        })
   
    } 
    
    //not found page
    else { 
        res.writeHead(404); // to add status code

        res.end("404 - Not found ")
    }
})

//reading asyn data

// fs.readFile('data.txt', 'utf-8', (err,data)=>{
//     if(!err){
//        fs.readFile(`${data}.txt`, 'utf-8', (err, data)=>{
//         console.log(data);
//         //writing async
//             fs.writeFile('txt.txt', `Hello again! \n ${data} \n Date : ${Date.now().toLocaleString()}`, err=>{
//                 if(err){
//                     console.log(err);
//                 }
//             })
//        })
//     }
// })
// console.log("after reading");

// console.log("after writing");

server.listen(port, host, (err)=>{
    console.log("listening...");
})