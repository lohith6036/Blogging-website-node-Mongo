const express = require('express');
const app = express();
//register view engine
app.set('view engine','ejs');


//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
    //automatically sets content type, http code
    // res.send('<p>this is a paragraph</p>')
    res.sendFile('./views/index.html',{root: __dirname});

});

app.get('/about',(req,res)=>{
    //automatically sets content type, http code
    //res.send('<p>this is a about</p>')
    res.sendFile('./views/about.html',{root: __dirname});
});

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('/views/404.html',{root:__dirname})
});