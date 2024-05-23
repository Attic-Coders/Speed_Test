// creditsScript.js

// Function to handle the action when the PLAY button is clicked
function playGame() {
    window.location.href = "../game/GAME.html"; // Redirect to GAME.html
}

// Function to handle the action when the BACK button is clicked
function goBack() {
    window.location.href = "../menu/MENU.html"; // Redirect to MENU.html;
}

// Function to handle the action when the EXIT button is clicked
function exitGame() {
    window.close(); // Close the current window
}

// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons
    var playButton = document.querySelector(".button[href='../game/GAME.html']");
    var backButton = document.querySelector(".button[href='../menu/MENU.html']");
    var exitButton = document.querySelector(".button[href='EXIT.js']");

    // Attach event listeners
    playButton.addEventListener("click", playGame);
    backButton.addEventListener("click", goBack);
    exitButton.addEventListener("click", exitGame);
});
