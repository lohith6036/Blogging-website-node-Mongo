const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    //req has all information about the request including type of request and client address
    // console.log(req.url,req.method);

    // lodash
    const num = _.random(0,20);
    console.log(num);

    //set header content type
    res.setHeader('Content-Type','text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end();
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);
            
        }   
    }
    )
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests from 3000 post number')
});

