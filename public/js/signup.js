const signupFormHandler = async (event) => {
    event.preventDefault();
// Collect value from signup form
    try {
        const username = document.querySelector("#username-signup").value.trim();
        const password = document.querySelector("#password-signup").value.trim();
// Check that the username and password fields aren't blank
        if (username && password) {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
                headers: { "Content-Type": "application/json" },
            });
// Check if the response is ok, and if so, redirect to the dashboard
            if (response.ok) {
                console.log("success");
                document.location.replace("/dashboard");
            } else {
// If the signup was unsuccessful, throw an error
                throw new Error("Signup failed: There was an issue signing up. Please try again later.");
            }
        }
    } catch (err) {
        alert(err.message);
    }
};

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
