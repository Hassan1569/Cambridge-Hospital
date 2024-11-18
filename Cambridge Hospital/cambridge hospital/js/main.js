// JavaScript to create typewriter effect
const text = "Welcome to the Cambridge Hospital Website";
let index = 0;
let typewriterText = '';

function type() {
    if (index < text.length) {
        typewriterText += text.charAt(index);
        document.getElementById('typewriter').innerHTML = typewriterText;
        index++;
        setTimeout(type, 100); // Adjust typing speed here (lower value for faster typing)
    } else {
        index = 0;
        typewriterText = '';
        setTimeout(type, 2000); // Adjust pause between cycles here (2000ms = 2 seconds)
    }
}

type(); // Start typewriter effect
