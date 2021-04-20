const express = require('express');
const router = express.Router();
const Blog = require('../../models/blog');
const Review = require('../../models/review');
const { isLoggedIn } = require('../../middleware');



router.post('/blogs/:id/review',isLoggedIn,async(req, res) => {

    const blog = await Blog.findById(req.params.id);

    const { rating, body } = req.body.review;

    const { username } = req.user;

    let review = new Review({rating:rating,body:body,username:username});

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
});


module.exports = router;