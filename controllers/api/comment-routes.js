const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({});
    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get a single comment
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a comment
router.post("/", withAuth, async (req, res) => {
  try {
    if (req.session) {
      const commentData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(commentData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update a comment
router.put("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(
      { comment_text: req.body.comment_text },
      { where: { id: req.params.id } }
    );

    if (!commentData[0]) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }

    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }

    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
