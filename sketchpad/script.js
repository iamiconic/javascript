const container = document.querySelector('.container');
const button = document.querySelectorAll('.rainbow-button');
const body = document.body;
const audio = new Audio('rainbow.mp3');

let isLeftMouseDown = false;
let isRightMouseDown = false;

let rainbowMode = false;

// function that will take in user defined dimensions and systematically create a row n times and appenend n cells to each row to make a perfect grid
function gridBuild(dimension) {

    for (let i = 0; i < dimension; i += 1) {
        let row = document.createElement('div');
        row.classList.add('grid-row');


        for (let j = 0; j < dimension; j += 1) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');

            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
// ask for user input for sketchpad dimensions
function userInput() {
    userDimension = null;
    while (userDimension === null || userDimension < 0 || userDimension > 100 || isNaN(userDimension)) {
        userDimension = prompt('Pick a number that is less than 100 for your dimensions', 16);
    }
    alert('Please use your left mouse button to draw and your right mouse to erase. Enjoy!')
    gridBuild(userDimension)
}

// functions to apply changes to both buttons
function changeButton() {

    if (rainbowMode === false) {
        body.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo)';
        body.style.backgroundSize = '200% 200%';
        body.style.animation = 'gradientShift 15s linear infinite';

        playAudio()

        button.forEach(button => {
            button.textContent = "RAINBOW MODE: ACTIVATED!";
        });

        rainbowMode = true;
    } else {
        body.style.background = 'white';
        body.style.backgroundSize = '100%';
        body.style.animation = 'none';

        button.forEach(button => {
            button.textContent = 'DO NOT PRESS!';
        });

        rainbowMode = false;
    }
}

//Function to play audio on button click
function playAudio() {
    audio.play()
}

// Create a series of mouse events, mousedown, mouseover and mouseup to begin drawing and end drawing and right clicking to return the cell back to white.
container.addEventListener('mousedown', event => {
    if (event.button === 0 && event.target.classList.contains('grid-cell')) {
        if (rainbowMode === false) {
            event.target.style.backgroundColor = 'black';
            isLeftMouseDown = true;
        } else {
            let randomColorR = Math.floor(Math.random() * 256);
            let randomColorG = Math.floor(Math.random() * 256);
            let randomColorB = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
            isLeftMouseDown = true;
        }
    }
    event.preventDefault();
});
container.addEventListener('mouseover', event => {
    if (isLeftMouseDown && event.target.classList.contains('grid-cell')) {
        if (rainbowMode === false) {
            event.target.style.backgroundColor = 'black';
        } else {
            let randomColorR = Math.floor(Math.random() * 256);
            let randomColorG = Math.floor(Math.random() * 256);
            let randomColorB = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
        }
    }
});
document.addEventListener('mouseup', event => {
    if (event.button === 0) {
        isLeftMouseDown = false;
    }
});

// Right click events
container.addEventListener('mousedown', event => {
    if (event.button === 2 && event.target.classList.contains('grid-cell')) {
        event.target.style.backgroundColor = 'white';
        isRightMouseDown = true;
    }
    event.preventDefault();
});
container.addEventListener('mouseover', event => {
    if (isRightMouseDown && event.target.classList.contains('grid-cell')) {
        event.target.style.backgroundColor = 'white';
    }
});
document, addEventListener('mouseup', event => {
    if (event.button === 2) {
        isRightMouseDown = false;
    }
});
container.addEventListener('contextmenu', event => {
    event.preventDefault();
})
button.forEach(button => {
    button.addEventListener('click', changeButton);
});



userInput()


/*
instead of pop ups display instructions and a button to start on page with dimension selector
*/ 