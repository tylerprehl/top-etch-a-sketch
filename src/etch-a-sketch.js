function createSketchBoxes(numberOfBoxesWide) {
    const sketchBoxContainer = document.querySelector('.sketch-container');
    let boxDimension = 960/numberOfBoxesWide;
    for (let i=0; i<numberOfBoxesWide*numberOfBoxesWide; i++) {
        const newSketchBox = document.createElement('button');
        newSketchBox.classList.add('sketch-box');
        newSketchBox.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px`;
        sketchBoxContainer.appendChild(newSketchBox);
    }

    const allSketchBoxes = document.querySelectorAll('button.sketch-box');
    allSketchBoxes.forEach(sketchBox => sketchBox.addEventListener("mouseover", addHoveredClass));
}

function getGridBoxWidth() {
    let gridBoxWidth = 0;
    do {
        gridBoxWidth = prompt('Please provide a grid-width: ');
        if (gridBoxWidth > 100) {
            alert('Please enter a number less than or equal to 100');
            continue;
        }
        if (gridBoxWidth < 1) {
            alert('Please enter a number greater than 0');
            continue;
        }
    } while (gridBoxWidth < 1 || gridBoxWidth > 100)

    return gridBoxWidth;
}

function removeOldGrid() {
    const sketchBoxContainer = document.querySelector('.sketch-container');
    Array.from(sketchBoxContainer.childNodes).forEach(sketchBox => {
        sketchBoxContainer.removeChild(sketchBox);
    })
}

function createGrid() {
    removeOldGrid();
    let gridBoxWidth = getGridBoxWidth();
    createSketchBoxes(gridBoxWidth);
}

function activateColoring() {
    this.classList.add('sketch-box-hovered');
    const sketchBoxes = document.querySelectorAll('button.sketch-box');
    sketchBoxes.forEach(sketchBox => sketchBox.addEventListener("mouseover", addHoveredClass));
}

function addHoveredClass() {
    this.classList.add('sketch-box-hovered');
}

const createGridButton = document.querySelector('button.setup-choice');
createGridButton.addEventListener("click", createGrid);

const allSketchBoxes = document.querySelectorAll('button.sketch-box');
allSketchBoxes.forEach(sketchBox => sketchBox.addEventListener("click", activateColoring));



