// Define a function to validate the password
function validatePassword() {
    // Retrieve the value entered in the password input field
    const password = document.getElementById("password").value;

    // Define an array of validation criteria, each with a regular expression and a corresponding error message
    const validations = [
        { regex: /.{8,}/, message: "at least 8 characters" },
        { regex: /[A-Z]/, message: "one uppercase letter" },
        { regex: /[a-z]/, message: "one lowercase letter" },
        { regex: /\d/, message: "one digit" },
        { regex: /[!@#$%^&*]/, message: "one special character" }
    ];

    // Check each validation criterion for the password
    const errorMessages = validations
        .filter(validation => !validation.regex.test(password)) // Filter criteria that the password doesn't meet
        .map(validation => `Missing ${validation.message}`) // Map each criterion to an error message
        .join(", "); // Join multiple error messages into a single string with commas

    // Get the HTML element where error messages will be displayed
    const errorElement = document.getElementById("error");

    // Display the error message(s) if any criteria are not met, or clear the error message if all criteria are met
    errorElement.innerHTML = errorMessages
        ? `Password must meet all criteria: ${errorMessages}.` // Display error message(s)
        : ""; // Clear the error message

    // Return true if all criteria are met (no error messages), or false otherwise
    return !errorMessages;
}
