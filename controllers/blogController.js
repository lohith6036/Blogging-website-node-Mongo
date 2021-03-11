// Naming of the methods should be used which lets us understand which vies and model we are binding
const Blog = require('../models/blog');

const blog_index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        //here we wanted to send list of blogs to index
        res.render('index',{title:'All blogs',blogs:result});

    }).catch((err)=>{console.log(err)});
}

const blog_create_get = (req,res)=>{
    res.render('create',{title: 'Create Blog'});
}

const blog_details = (req,res)=>{
    //params.id because blog/:{id}
    const id = req.params.id;

    Blog.findById(id)
    .then((result)=>{
    res.render('details',{blog:result,title:'Blog Details'});
    }).catch((err)=>{
    res.status(404).render('404',{title: 'Blog not found'});
    });
}

const blog_delete = (req,res)=>{
    const id = req.params.id;

Blog.findByIdAndDelete(id)
.then((result)=>{
    res.json({redirect:'/blogs'})
})
.catch((err)=>{
    console.log(err);
})
}

const blog_create_post = (req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports={
    blog_index,
    blog_details,
    blog_create_get,
    blog_delete,
    blog_create_post
};
