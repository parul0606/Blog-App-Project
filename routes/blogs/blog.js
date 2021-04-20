const express = require('express');
const router = express.Router();
const Blog = require('../../models/blog');
const { isLoggedIn } = require('../../middleware');


// Get all the products and display on index
router.get('/blogs', async(req, res) => {
    const blogs = await Blog.find({});
    res.render('blogs/index', { blogs: blogs });
})


// Getting a form for new product

router.get('/blogs/new',isLoggedIn, (req, res) => {
    res.render('blogs/new');
})



// Creating a new Product


router.post('/blogs',isLoggedIn, async(req, res) => {
    
    await Blog.create(req.body.blog);

    res.redirect('/blogs');
})

// Showing a particular product

router.get('/blogs/:id', async(req, res) => {
    
    const blog = await Blog.findById(req.params.id).populate('reviews');

    res.render('blogs/show', { blog: blog });
})

// Edit product


router.get('/blogs/:id/edit',isLoggedIn, async(req, res) => {
    try{
        const blog=await Blog.findById(req.params.id);
        
      
      if (!blog) {
        return res.render('error/404')
      }
  
       console.log(req.user);
        res.render('blogs/edit', {blog:blog})
        
      
    } 
    catch (err) {
        console.error(err)
        return res.render('error/500')
      }
    })
// patch request


router.patch('/blogs/:id', isLoggedIn, async(req, res) => {
    
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body.blog);

    res.redirect(`/blogs/${req.params.id}`);
})

// Delete Product 


router.delete('/blogs/:id', async(req, res) => {
    
    await Blog.findByIdAndDelete(req.params.id);

    res.redirect('/blogs');
})

module.exports = router;