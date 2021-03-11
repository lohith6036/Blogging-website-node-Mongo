const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

//mongoose and mongo sandbox routes
router.get('/',blogController.blog_index);

router.get('/create',blogController.blog_create_get);

router.get('/:id',blogController.blog_details);
    
router.post('/',blogController.blog_create_post);

// router.get('/all-blogs',(req,res)=>{
// //when saving, we use save on instance of blog object but while searching, we use directly on the object
// Blog.find()
// .then((result)=>{
//     res.send(result);
// }).catch((err)=>{console.log(err)});
// });

router.delete('/:id',blogController.blog_delete);

module.exports = router;