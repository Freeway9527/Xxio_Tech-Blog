const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Route to display post on homepage
router.get("/", withAuth, async (req, res) => {
    try {
//Fetch all posts associated with user
        const postData = await Post.findAll({
            attributes: ["id", "title", "content", "created_at"],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
// Format data and render homepage
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render login page if the user is not log in
router.get("/login", withAuth, async (req, res) => {
    try {
        if (req.session.loggedIn) {
            // If the user is already logged in, redirect the request to another route
            res.redirect("/");
            return;
        }
        res.render("login");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render signup page
router.get("/signup", withAuth, async (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Fetch all posts associated with user
router.get("/post/:id", async (req, res) => {
    try {
// Find post by 
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "content", "title", "created_at"],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        if (!postData) {
            res.status(404).json({ message: "No post found with this ID" });
            return;
        }

// Render single post
        const post = postData.get({ plain: true });
        console.log(post);
        res.render("single-post", { post, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;