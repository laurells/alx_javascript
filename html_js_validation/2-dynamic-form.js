// Function to generate dynamic input fields based on the selected value
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const numFields = document.getElementById("numFields").value;
    const inputContainer = document.getElementById("inputContainer");
    const inputFields = inputContainer.querySelectorAll("input");

    // Check if any dynamically generated field is empty
    let isValid = true;
    inputFields.forEach((field) => {
        if (field.value.trim() === "") {
            isValid = false;
            return;
        }
    });

    // Display error message if any field is empty
    const errorElement = document.getElementById("error");
    if (!isValid) {
        errorElement.textContent = "Please fill in all fields.";
    } else {
        errorElement.textContent = ""; // Clear error message
        document.getElementById("dynamicForm").submit(); // Submit the form
    }
}

// Event listener for dropdown change
document.getElementById("numFields").addEventListener("change", function () {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

// Event listener for form submission
document.getElementById("dynamicForm").addEventListener("submit", validateForm);
