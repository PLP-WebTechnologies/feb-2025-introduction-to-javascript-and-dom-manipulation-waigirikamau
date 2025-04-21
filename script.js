const greetingElement = document.getElementById('greeting');
greetingElement.textContent = 'Greetings from JavaScript!';

const styleButton = document.getElementById('styleButton');
styleButton.addEventListener('click', () => {
    greetingElement.style.color = 'blue';
    greetingElement.style.fontSize = '1.5em';
    styleButton.textContent = 'Style Changed!';
});

const elementContainer = document.getElementById('elementContainer');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
let newElementCounter = 1;
let lastAddedElement = null;

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Dynamically added element #${newElementCounter}`;
    newParagraph.classList.add('dynamicElement');
    elementContainer.appendChild(newParagraph);
    lastAddedElement = newParagraph;
    newElementCounter++;
});

removeElementButton.addEventListener('click', () => {
    if (lastAddedElement && elementContainer.contains(lastAddedElement)) {
        elementContainer.removeChild(lastAddedElement);
        lastAddedElement = null;
    } else {
        alert('No dynamically added element to remove!');
    }
});