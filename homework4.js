function updateSlider() {
    document.getElementById("sliderValue").innerText =
        document.getElementById("healthScale").value;
}

function validateFirstName() {
    const value = document.getElementById("firstName").value;
    const error = document.getElementById("firstNameError");

    if (!/^[A-Za-z'-]{1,30}$/.test(value)) {
        error.innerText = "Enter 1 to 30 letters only.";
    } else {
        error.innerText = "";
    }
}

function validateMiddleInitial() {
    const value = document.getElementById("middleInitial").value;
    const error = document.getElementById("middleInitialError");

    if (value === "") {
        error.innerText = "";
    } else if (!/^[A-Za-z]{1}$/.test(value)) {
        error.innerText = "Enter 1 letter only.";
    } else {
        error.innerText = "";
    }
}

function validateLastName() {
    const value = document.getElementById("lastName").value;
    const error = document.getElementById("lastNameError");

    if (!/^[A-Za-z'-]{1,30}$/.test(value)) {
        error.innerText = "Enter 1 to 30 letters only.";
    } else {
        error.innerText = "";
    }
}

function validateDOB() {
    const value = document.getElementById("dob").value;
    const error = document.getElementById("dobError");

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        error.innerText = "Use MM/DD/YYYY format.";
        return;
    }

    const parts = value.split("/");
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const enteredDate = new Date(year, month - 1, day);
    const today = new Date();
    const oldestYear = today.getFullYear() - 120;

    if (enteredDate > today) {
        error.innerText = "Date cannot be in the future.";
    } else if (year < oldestYear) {
        error.innerText = "Date cannot be over 120 years ago.";
    } else {
        error.innerText = "";
    }
}

function formatSSN() {
    let value = document.getElementById("ssn").value.replace(/\D/g, "");

    if (value.length > 3 && value.length <= 5) {
        value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 5) {
        value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 9);
    }

    document.getElementById("ssn").value = value;
}

function validateSSN() {
    const value = document.getElementById("ssn").value;
    const error = document.getElementById("ssnError");

    if (!/^\d{3}-\d{2}-\d{4}$/.test(value)) {
        error.innerText = "Use 9 digits in SSN format.";
    } else {
        error.innerText = "";
    }
}

function validateAddr1() {
    const value = document.getElementById("addr1").value;
    const error = document.getElementById("addr1Error");

    if (value.length < 2 || value.length > 30) {
        error.innerText = "Address must be 2 to 30 characters.";
    } else {
        error.innerText = "";
    }
}

function validateAddr2() {
    const value = document.getElementById("addr2").value;
    const error = document.getElementById("addr2Error");

    if (value === "") {
        error.innerText = "";
    } else if (value.length < 2 || value.length > 30) {
        error.innerText = "Address must be 2 to 30 characters.";
    } else {
        error.innerText = "";
    }
}

function validateCity() {
    const value = document.getElementById("city").value;
    const error = document.getElementById("cityError");

    if (value.length < 2 || value.length > 30) {
        error.innerText = "City must be 2 to 30 characters.";
    } else {
        error.innerText = "";
    }
}

function validateZip() {
    const value = document.getElementById("zip").value;
    const error = document.getElementById("zipError");

    if (!/^\d{5}$/.test(value)) {
        error.innerText = "Zip must be 5 digits.";
    } else {
        error.innerText = "";
    }
}

function validateEmail() {
    const field = document.getElementById("email");
    const value = field.value.toLowerCase();
    const error = document.getElementById("emailError");

    field.value = value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error.innerText = "Enter a valid email.";
    } else {
        error.innerText = "";
    }
}

function validatePhone() {
    const value = document.getElementById("phone").value;
    const error = document.getElementById("phoneError");

    if (value === "") {
        error.innerText = "";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
        error.innerText = "Use 000-000-0000 format.";
    } else {
        error.innerText = "";
    }
}

function validateUserId() {
    const field = document.getElementById("userId");
    const value = field.value.toLowerCase();
    const error = document.getElementById("userIdError");

    field.value = value;

    if (!/^[A-Za-z][A-Za-z0-9_-]{4,19}$/.test(value)) {
        error.innerText = "User ID must be 5 to 20 chars and start with a letter.";
    } else {
        error.innerText = "";
    }
}

function validatePassword() {
    const value = document.getElementById("password").value;
    const error = document.getElementById("passwordError");

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) {
        error.innerText = "Password needs uppercase, lowercase, number, and 8+ characters.";
    } else {
        error.innerText = "";
    }
}

function checkPasswordMatch() {
    const pw1 = document.getElementById("password").value;
    const pw2 = document.getElementById("password2").value;
    const userId = document.getElementById("userId").value.toLowerCase();
    const error = document.getElementById("password2Error");

    document.getElementById("userId").value = userId;

    if (pw2 === "") {
        error.innerText = "";
    } else if (pw1 !== pw2) {
        error.innerText = "Passwords do not match.";
    } else if (pw1.toLowerCase().includes(userId)) {
        error.innerText = "Password cannot contain user ID.";
    } else {
        error.innerText = "";
    }
}

function validateAll() {
    validateFirstName();
    validateMiddleInitial();
    validateLastName();
    validateDOB();
    validateSSN();
    validateAddr1();
    validateAddr2();
    validateCity();
    validateZip();
    validateEmail();
    validatePhone();
    validateUserId();
    validatePassword();
    checkPasswordMatch();

    const errors = document.querySelectorAll(".errorMsg");
    let hasErrors = false;

    errors.forEach(function(error) {
        if (error.innerText !== "") {
            hasErrors = true;
        }
    });

    if (!hasErrors) {
        document.getElementById("submitBtn").style.display = "inline";
        alert("No errors found. You can now submit.");
    } else {
        document.getElementById("submitBtn").style.display = "none";
        alert("Please fix the errors before submitting.");
    }
}

function reviewForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    document.getElementById("reviewArea").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +
        "<p>Name: " + firstName + " " + lastName + "</p>" +
        "<p>Email: " + email + "</p>";
}
