
//timer
let timerInterval;
let seconds = 60;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds--;
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
    var backButton = document.querySelector(".button[href='../menu/MENU.html']");
    var exitButton = document.querySelector(".button[href='../exit.js']");
    // Attach event listeners
    backButton.addEventListener("click", menu);
    exitButton.addEventListener("click", exitGame);

    // Start the timer when the page is loaded
    startTimer();
    drawLabel();
});

// word processor
function processFile() {
    const fs = require('fs')
    fs.readFile('allWords.txt', (err, inputD) => {
   
    })
    if (fs) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            const wordsList = readFileToList(content); // Process the content of the file
            console.log(wordsList); // Output the result or do something with it
        };

        reader.onerror = function(e) {
            console.error("Error reading file:", e);
        };

        reader.readAsText(file, 'UTF-8'); // Read the file as text
    } else {
        console.log("No file selected or file input not found.");
    }
}

function readFileToList(fileContent) {
    const lines = fileContent.split('\n');
    const wordsList = [];
    for (let line of lines) {
        const words = line.split(' ');
        let i = 0;
        let subline = '';
        for (let word of words) {
            if (i === 40) {
                wordsList.push(subline.trim());
                i = 0;
                subline = '';
            } else {
                subline += word + ' ';
                i++;
            }
        }
        if (subline.trim() !== '') {
            wordsList.push(subline.trim());
        }
    }
    return wordsList;
}

// Function to get a random line from the list and return it
function getString(filePath) {
    // Ensure the list is populated by reading the file again
    const lines = readFileToList(filePath);
    // Create an instance of Random to generate random numbers
    const rand = Math.floor(Math.random() * lines.length);
    // Retrieve the line at the random index
    let str = lines[rand];
    // Capitalize the first letter of the string and print it
    str = str.charAt(0).toUpperCase() + str.slice(1);
    // Print the capitalized string
    console.log(str);
    // Return the capitalized string
    return str;
}


// Simulating data fetch or other initialization
const generatedQueue = getString("../game/allWords.txt");  // Example data
const inputedQueue = ['H', 'e', 'l', 'p', 'o'];  // Example input data

document.addEventListener("DOMContentLoaded", function() {
    drawLabel();
});

function drawLabel() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "24px Comic Sans MS";
    const margin = 100;
    let x = margin;
    let y = margin + 50;
    const lineHeight = 60;
    const charSpace = 20;

    for (let i = 0; i < generatedQueue.length; i++) {
        const genChar = generatedQueue[i];
        const inpChar = inputedQueue[i] || null;

        ctx.fillStyle = inpChar === genChar ? 'green' : 'red';
        ctx.fillText(inpChar || genChar, x, y);

        const textWidth = ctx.measureText(genChar).width;
        x += textWidth + charSpace;

        if (x > canvas.width - margin) {
            x = margin;
            y += lineHeight;
        }
    }
}
