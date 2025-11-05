document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.login-button');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const signupLink = document.querySelector('.signup-link'); // Fixed class name

    function signup() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validation
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Check if user already exists
        const existingEmail = localStorage.getItem('userEmail');
        if (existingEmail === username) {
            alert('This email is already registered. Please login instead.');
            return;
        }

        // Save to localStorage
        localStorage.setItem('userEmail', username);
        localStorage.setItem('userPassword', password);

        // Show success message
        alert('Account created successfully! You can now login with your credentials.');

        // Clear form
        usernameInput.value = '';
        passwordInput.value = '';

        // Optional: Redirect to login page after successful signup
        setTimeout(function () {
            window.location.href = 'login.html'; // Change to your login page
        }, 2000);
    }

    // Update button text and functionality for signup
    if (button) {
        button.textContent = 'Sign Up';
    }

    // Update the header text if needed
    const loginHeader = document.querySelector('.login-header h1');
    if (loginHeader) {
        loginHeader.textContent = 'Create Account';
    }

    const loginSubheader = document.querySelector('.login-header p');
    if (loginSubheader) {
        loginSubheader.textContent = 'Create a new account to get started';
    }

    // Update signup link to redirect to login page
    if (signupLink) {
        signupLink.innerHTML = "Already have an account? <a href='#'>Sign In</a>";
        signupLink.addEventListener('click', function () {
            alert('Redirecting to login page...');
            setTimeout(function () {
                window.location.href = 'login.html'; // Change to your login page
            }, 1000);
        });
    }

    // Remove forgot password section for signup page
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
        forgotPassword.style.display = 'none';
    }

    // Add event listener to the form to handle submission
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        signup(); // Changed from login() to signup()
    });
});