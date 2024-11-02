// Define arrays of prompts for odd and even minutes
const oddMinutePrompts = [
    "Draw something that feels like it’s floating.",
    "Sketch an imaginary creature using only triangles.",
    "Create a shape that could come to life.",
    "Doodle a landscape in a single stroke."
    // Add more prompts as needed
];

const evenMinutePrompts = [
    "Observe an object and sketch it with a twist.",
    "Draw a place you’d like to be right now.",
    "Start with a circle and transform it into something unexpected.",
    "Create a repeating pattern from one shape."
    // Add more prompts as needed
];

// Function to select and display a prompt based on the current minute
function updatePrompt() {
    const currentMinute = new Date().getMinutes();
    let prompt;

    // Select from odd or even prompts based on the current minute
    if (currentMinute % 2 === 0) {
        prompt = evenMinutePrompts[Math.floor(Math.random() * evenMinutePrompts.length)];
    } else {
        prompt = oddMinutePrompts[Math.floor(Math.random() * oddMinutePrompts.length)];
    }

    // Update the display element with the new prompt
    document.getElementById("promptDisplay").innerText = prompt;
}

// Initialize the first prompt and update every minute
updatePrompt();
setInterval(updatePrompt, 60000); // Refresh prompt every 60 seconds
