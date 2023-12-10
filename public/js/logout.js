const logout = async () => {
    try {
    // Send a POST request to log the user out
      const response = await fetch("/api/users/logout", {
        method: "post",
        headers: { "Content-Type": "application/json" },
      });
  
      // Check if the log out was successful
      if (response.ok) {
        // Redirect the user to the homepage
        document.location.replace("/");
      } else {
        // If the logout was unsuccessful, throw an error
        throw new Error("Loutout failed.");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  
  document.querySelector("#logout").addEventListener("click", logout);
  