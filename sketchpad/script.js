const container = document.querySelector('.container');
const button = document.querySelectorAll('.rainbow-button');
const body = document.body;
const audio = new Audio('rainbow.mp3');
const smallButton = document.querySelector('.small-button');
const mediumButton = document.querySelector('.medium-button');
const largeButton = document.querySelector('.large-button');
const introHeader = document.querySelector('.intro-header');
const introPara = document.querySelector('.intro-para');

let isLeftMouseDown = false;
let isRightMouseDown = false;
let rainbowMode = false;

button.forEach(buttons => {
    buttons.style.display = 'none';
});


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

// Event listeners for small,medium, large grid sizes to start the game

smallButton.addEventListener('click', () => {
    smallButton.style.display = 'none';
    mediumButton.style.display = 'none';
    largeButton.style.display = 'none';
    introHeader.style.display = 'none';
    introPara.style.display = 'none';
    container.style.flexDirection = 'column';
    container.style.minWidth = '600px';
    container.style.minHeight = '600px';
    button.forEach(buttons => {
        buttons.style.display = "inline";
    });
    gridBuild(10);
})
mediumButton.addEventListener('click', () => {
    smallButton.style.display = 'none';
    mediumButton.style.display = 'none';
    largeButton.style.display = 'none';
    introHeader.style.display = 'none';
    introPara.style.display = 'none';
    container.style.flexDirection = 'column';
    container.style.minWidth = '600px';
    container.style.minHeight = '600px';
    button.forEach(buttons => {
        buttons.style.display = "inline";
    });
    gridBuild(20);
})
largeButton.addEventListener('click', () => {
    smallButton.style.display = 'none';
    mediumButton.style.display = 'none';
    largeButton.style.display = 'none';
    introHeader.style.display = 'none';
    introPara.style.display = 'none';
    container.style.flexDirection = 'column';
    container.style.minWidth = '600px';
    container.style.minHeight = '600px';
    button.forEach(buttons => {
        buttons.style.display = "inline";
    });
    gridBuild(40);
})

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



