document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const consent = document.getElementById("consent").checked;
    const errorMessages = document.getElementById("errorMessages");

    errorMessages.innerHTML = ""; // Clear previous errors

    // Validate username
    if (username.length < 5) {
        errorMessages.innerHTML += "<p>Username must be at least 5 characters long.</p>";
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
        return;
    }

    // Validate password
    if (password.length < 8) {
        errorMessages.innerHTML += "<p>Password must be at least 8 characters long.</p>";
        return;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        errorMessages.innerHTML += "<p>Password must include uppercase, lowercase, number, and special character.</p>";
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        errorMessages.innerHTML += "<p>Passwords do not match.</p>";
        return;
    }

    // Validate consent
    if (!consent) {
        errorMessages.innerHTML += "<p>You must agree to the privacy policy.</p>";
        return;
    }

    alert("Registration successful!");
});
