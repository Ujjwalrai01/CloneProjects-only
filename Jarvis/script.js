// Start button
const startBtn = document.getElementById('start');
const output = document.getElementById('output');

// Check if browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    output.textContent = "Listening...";
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.textContent = `You said: ${transcript}`;
    respondToCommand(transcript);
};

// Simple responses to commands
function respondToCommand(command) {
    const synth = window.speechSynthesis;
    let response = "Sorry, I don't understand.";

    if (command.includes('hello')) {
        response = "Hello! How can I assist you today?";
    } else if (command.includes('time')) {
        const now = new Date();
        response = `The time is ${now.getHours()} : ${now.getMinutes()}`;
    } else if (command.includes('weather')) {
        response = "I can check the weather for you, but you'll need an API!";
    }
    
    const utterance = new SpeechSynthesisUtterance(response);
    synth.speak(utterance);
}

// Start listening when the button is clicked
startBtn.addEventListener('click', () => {
    recognition.start();
});
