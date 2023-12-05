const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Routes to display post on dashboard
router.get("/", withAuth, async (req, res) => {
    try {
        // Retrive post created by user
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
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
// Render dashboard page with posts
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", { posts, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route fetches post by id 
router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "content", "created_at"],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        });
// If no post is found, an error message is sent to the client
        if (!postData) {
            res.status(404).json({ message: "No post found with this ID" });
            return;
        }
// Get object of post and render the edit post page
        const post = postData.get({ plain: true });
        res.render("edit-post", { post, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Creates new post
router.get("/new", (req, res) => {
    res.render("add-post");
});


module.exports = router;