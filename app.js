const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require('path');
const Blog= require('./models/blog');
const seedDB = require('./seedDB');
const methodOverride = require('method-override')
const blogRoutes = require('./routes/blogs/blog');
const reviewRoutes = require('./routes/reviews/review');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const authRoutes = require('./routes/auth/auth');

mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((e) => {
        console.log("ERROR! DATABASE NOT CONNECTED");
        console.log(e);
    })

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'))
//seedDB();
app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
    res.render('landingPage');
})



app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use(blogRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

app.listen(3000, () => {
    console.log("Server Running At port 3000");
})

