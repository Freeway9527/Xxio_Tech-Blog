const deleteFormHandler = async (event) => {
  event.preventDefault();

  // Send a DELETE request to delete the post
  try {
    const id = window.location.toString().split("/").pop();
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        post_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the deletion was successful and redirect to the dashboard
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      // Thow an error if the deletion was unsuccessful
      throw new Error("Deletion failed.");
    }
  } catch (error) {
    // Display the error message
    alert(error.message);
  }
};

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
