// Get a reference to the canvas element and its 2D drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Load the sad and smiley face images
const sadFace = new Image();
sadFace.src = 'image1.jpg'; // Replace 'sad-face.png' with your image URL
const smileyFace = new Image();
smileyFace.src = 'image2.jpg'; // Replace 'smiley-face.png' with your image URL

// Set the initial state to sad face
let isSmiley = false;
let scale = .7;

// Function to draw the current face
function drawFace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(isSmiley ? smileyFace : sadFace, 0, 0, canvas.width * scale, canvas.height * scale);
}

// Handle mouse down event
canvas.addEventListener('mousedown', () => {
    isSmiley = true;
    scale = 1.12;
    drawFace();
});

// Handle mouse up event
canvas.addEventListener('mouseup', () => {
    isSmiley = false;
    scale = 1;
    drawFace();
});

// Initial drawing
drawFace();
