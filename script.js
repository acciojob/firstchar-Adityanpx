function firstChar(text) {
    let newText = text.trim(); // Remove leading/trailing spaces

    if (newText.length === 0) {
        return ""; // Return empty string if no valid characters
    }

    return newText[0]; // Return the first non-space character
}

// Do not change the code below
const text = prompt("Enter text:"); // Get user input
alert(firstChar(text)); // Display output
