window.onload = function() {
    
    document.getElementById('registrationForm').onsubmit = function() {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var username = document.getElementById('username').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }
        if (!document.getElementById('terms').checked) {
            alert('You must agree to the terms and conditions.');
            return false;
        }
        
       
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful. You can now login.');
        return false; 
    };
    
};
window.onload = function() {
    document.getElementById('loginForm').onsubmit = function(event) {
        event.preventDefault(); // Stop the form from submitting normally
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            showModal();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    function showModal() {
        document.getElementById('loginSuccessModal').style.display = 'block';
    }

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('loginSuccessModal').style.display = 'none';
    });

    window.onclick = function(event) {
        var modal = document.getElementById('loginSuccessModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

