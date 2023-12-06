const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET / route find all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "title", "content", "created_at"],
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

    const posts = postData.map((post) => post.get({ plain: true }));
    // Render homepage
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login route direct user to login page
router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET signup route direct user to signup page
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET post by ID route
router.get("/post/:id", (req, res) => {
  try {
    Post.findOne({
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
    })
      .then((postData) => {
        if (!postData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
        const post = postData.get({ plain: true });
        console.log(post);
        res.render("single-post", { post, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
