const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  try {
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    // Check that the username and password fields aren't blank
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      // Check if the response is ok, and if so, redirect to the dashboard
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        // If the login was unsuccessful, throw an error
        throw new Error("Login failed.");
      }
    }
  } catch (err) {
    alert(err.message);
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
