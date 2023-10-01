// Define a function to validate the email format
function validateEmail(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the value entered in the email input field
    const email = document.getElementById("email").value;

    // Define a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get the HTML element where error messages will be displayed
    const errorElement = document.getElementById("error");

    // Check if the email format is correct
    if (emailRegex.test(email)) {
        // Clear any previous error message
        errorElement.innerHTML = "";

        // Allow the form submission
        document.getElementById("emailForm").submit();
    } else {
        // Display an error message
        errorElement.innerHTML = "Please enter a valid email address.";
    }
}

// Add an event listener to the form to trigger email validation when the form is submitted
document.getElementById("emailForm").addEventListener("submit", validateEmail);
