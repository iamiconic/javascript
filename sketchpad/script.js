const container = document.querySelector('.container');
let isLeftMouseDown = false;
let isRightMouseDown = false;

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

// Create a series of mouse events, mousedown, mouseover and mouseup to begin drawing and end drawing and right clicking to return the cell back to white.
container.addEventListener('mousedown', event => {
    if (event.button === 0 && event.target.classList.contains('grid-cell')) {
        event.target.style.backgroundColor = 'black';
        isLeftMouseDown = true;
    }
    event.preventDefault();
});

container.addEventListener('mouseover', event => {
    if (isLeftMouseDown && event.target.classList.contains('grid-cell')) {
        event.target.style.backgroundColor = 'black';
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


userInput()

