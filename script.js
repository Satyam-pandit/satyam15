document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation (for demonstration purposes)
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
        
        loginForm.reset();
    });
});
