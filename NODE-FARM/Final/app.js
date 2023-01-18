const fs = require('fs')
const http = require('http')
const httpUrl = require('url')
const replaceTemplate = require('./module/replaceTemplate')

const port = '8000'
const host = '127.0.0.1'

const data = fs.readFileSync(`${__dirname}/Data/packData.json`)
const dataObj = JSON.parse(data)

const overview = fs.readFileSync(`${__dirname}/template/template__overview.html`, 'utf-8')
const productTemplate = fs.readFileSync(`${__dirname}/template/template__product.html`, 'utf-8')

const card = fs.readFileSync(`${__dirname}/template/card.html`, 'utf-8')


const server = http.createServer((req, res)=>{

const {query, pathname} = httpUrl.parse(req.url, true)
// console.log(query, pathname);

    //overview page
    if(pathname === '/overview' || pathname === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        const cardsHtml = dataObj.map(el=> replaceTemplate(card, el)).join('')
        console.log(cardsHtml);
        const cardPlaceHolder = overview.replace(/{%CARD%}/g, cardsHtml)
        return res.end(cardPlaceHolder)
    } 

    //product page
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

    //api Page
    else if(pathname ==='/api') {
        fs.readFile(`${__dirname}/Data/packData.json`, 'utf-8', (err, data) =>{
            if(!err) {
                return res.end(data)
            } else {
                console.log("not file");
            }
        })
   
    } 
    
    //404 Page
    else { 
        res.writeHead(404); // to add status code

        res.end("404 - Not found ")
    }
})

server.listen(port, host, (err)=>{
    console.log("listening...");
})