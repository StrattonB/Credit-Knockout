document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can perform client-side validation here if needed

        // Simulate authentication (replace with actual authentication logic)
        // For demonstration purposes, let's assume a valid email and password
        const validEmail = 'user@example.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            // Redirect user to dashboard page upon successful login
            window.location.href = 'dashboard.html';
        } else {
            // Display error message or handle unsuccessful login
            alert('Invalid email or password. Please try again.');
        }
    });
});
