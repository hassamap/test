document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
    } else if (username !== "admin" || password !== "password123") {
        errorMessage.textContent = "Invalid username or password.";
    } else {
        errorMessage.textContent = "";
        alert('Login successful!');
        // Redirect or perform other actions here
    }
});