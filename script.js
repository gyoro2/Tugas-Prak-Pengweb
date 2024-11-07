function validateUsername() {
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("username-error");

    if (username.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long.";
        return false;
    } else {
        usernameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    const passwordStrength = document.getElementById("password-strength");

    // Reset error message
    passwordError.textContent = "";

    // Check password strength
    let strength = 0;
    if (password.length >= 8) strength++; // Minimal panjang
    if (/[A-Z]/.test(password)) strength++; // Huruf besar
    if (/[0-9]/.test(password)) strength++; // Angka
    if (/[\W_]/.test(password)) strength++; // Karakter khusus

    // Tampilkan tingkat kekuatan
    if (strength === 0) {
        passwordStrength.textContent = "";
        passwordStrength.className = "strength-message";
    } else if (strength === 1) {
        passwordStrength.textContent = "Weak";
        passwordStrength.className = "strength-message weak";
    } else if (strength === 2) {
        passwordStrength.textContent = "Medium";
        passwordStrength.className = "strength-message medium";
    } else if (strength >= 3) {
        passwordStrength.textContent = "Strong";
        passwordStrength.className = "strength-message strong";
    }

    // Return false jika tidak memenuhi minimal panjang
    return password.length >= 8;
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const confirmPasswordError = document.getElementById("confirm-password-error");

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

function validateForm() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please correct the errors in the form.");
        return false;
    }
}
