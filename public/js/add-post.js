const newFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  try {
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    // Check that the title and content fields aren't blank
    if (title && content) {
      // Send a POST request to create a new post
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Check if the response is ok, and if so, redirect to the dashboard
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        // If the post was unsuccessful, throw an error
        throw new Error("Posting failed.");
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

document
  .querySelector("#add-post-form")
  .addEventListener("submit", newFormHandler);
