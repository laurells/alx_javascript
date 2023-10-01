// Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Check if required fields are filled
    if (!name || !email) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Please fill in all required fields.";
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = ""; // Clear success message
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = ""; // Clear error message
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Form submitted successfully!";
        // You can add code here to submit the form data to a server if needed.
    }
}

// Event listener for form submission
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
