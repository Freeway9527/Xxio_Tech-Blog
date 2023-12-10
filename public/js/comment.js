const commentFormHandler = async (event) => {
  event.preventDefault();

  // Get the comment text from the form
  try {
    const comment_text = document
      .querySelector('textarea[name="comment-body"]')
      .value.trim();

    const post_id = window.location.toString().split("/").pop();
    // Check that the comment text isn't blank
    if (comment_text) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          post_id,
          comment_text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Check if the response is ok, and if so, reload the page
      if (response.ok) {
        document.location.reload();
      } else {
        // If the comment was unsuccessful, throw an error
        throw new Error("Comment failed.");
      }
    }
  } catch (error) {
    alert(error.message);
    document.querySelector("#comment-form").style.display = "block";
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
