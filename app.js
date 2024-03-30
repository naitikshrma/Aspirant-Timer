// app.js

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timerDisplay');
const errorDisplay = document.getElementById('error');

let timerInterval;
let timerDuration = 0; // In milliseconds
let isTimerRunning = false;

startButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        recognition.start();
        errorDisplay.textContent = ''; // Clear any previous error messages
    }
});

recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    processVoiceCommand(result);
};

function processVoiceCommand(command) {
    if (command.includes('set a timer')) {
        // Extract time values from command (e.g., "5 minutes")
        // Convert to milliseconds and start the timer
        // Example: setTimer(300000); // 5 minutes
    } else if (command.includes('pause the timer')) {
        // Pause the timer
        // Example: pauseTimer();
    } else if (command.includes('reset the timer')) {
        // Reset the timer
        // Example: resetTimer();
    } else {
        // Unrecognized command
        errorDisplay.textContent = 'Sorry, I didn\'t understand. Please try again.';
    }
}

function setTimer(duration) {
    clearInterval(timerInterval);
    timerDuration = duration;
    isTimerRunning = true;
}