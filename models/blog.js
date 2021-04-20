const mongoose = require('mongoose');
const Review = require('./review');
const User=require('./user');
const blogSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        minLength:10
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }  
    ]

})
const Blog=mongoose.model('Blog',blogSchema);
module.exports = Blog;