const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const blogRoutes = require('./routes/blogRoutes');
const Blog = require('./models/blog');

const app = express();
//connect to mongo db
const dbURI = 'mongodb+srv://lohith6036:123123123@node-blog.4iiic.mongodb.net/node-blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=> app.listen(3000))
.catch((err)=>console.log(err));

//register view engine
app.set('view engine','ejs');

// //listen for requests
// app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    //automatically sets content type, http code
    // res.send('<p>this is a paragraph</p>')

res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    //automatically sets content type, http code
    //res.send('<p>this is a about</p>')
    res.render('about',{title: 'About Blog'});
});

//Blog routes 
//This scopes only if request starts with /blogs/??
app.use('/blogs',blogRoutes);

app.post('/',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err);
    });
    });

//404 page
app.use((req,res)=>{
    res.status(404).render('404')
});