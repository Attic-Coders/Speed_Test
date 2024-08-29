
//timer
let timerInterval;
let seconds = 60;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds--;
    console.log(seconds);
    document.getElementById("seconds").innerText = pad(seconds);
    if (seconds <= 0) {
        clearInterval(timerInterval);
        // Add any actions you want to perform when the timer reaches 0 here
        console.log("Timer has reached 0!");
    }
}
function pad(value) {
    return value < 10 ? "0" + value : value;
}

// layout

function menu() {
    window.location.href = "../menu/MENU.html"; // Redirect to MENU.html;
}

// Function to handle the action when the EXIT button is clicked
function exitGame() {
    window.close(); // Close the current window
}

// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons
    var backButton = document.querySelector(".button[href='../src/menu/MENU.html']");
    var exitButton = document.querySelector(".button[href='../src/exit.js']");
    // Attach event listeners
    backButton.addEventListener("click", menu);
    exitButton.addEventListener("click", exitGame);

    fetch('/words')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); // Check what data looks like
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '16px Arial';
        ctx.fillStyle = '#000';
        data.words.forEach((word, index) => {
            ctx.fillText(word, 10, 30 * (index + 1));
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    // Start the timer when the page is loaded
    startTimer();
    drawLabel();
});