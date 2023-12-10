const editFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the edit post form
  try {
    const title = document
      .querySelector('input[name="post-title"]')
      .value.trim();
    const content = document
      .querySelector('textarea[name="content"]')
      .value.trim();

    // Extract the post id from the URL
    const id = window.location.toString().split("/").pop();

    // Check that the title and content fields aren't blank
    if (title && content) {
      // Send a PUT request to update the post
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          post_id: id,
          title,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is ok, and if so, redirect to the dashboard
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        // If the edit was unsuccessful, throw an error
        throw new Error("Editing failed.");
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
