const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    }
},{timestamps:true});


// inside model , takes name of the model, ('Blog'), 
//it is going to pluralize it and look for the collection in the database .
// Here it looks for 'blogs' collection in db.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
