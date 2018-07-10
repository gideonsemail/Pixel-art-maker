// Select color input
const chooseColor = document.querySelector('#colorPicker')

// Select size input
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')

const chooseSize = document.querySelector('#sizePicker')
const canvas = document.querySelector('#pixelCanvas')

// When size is submitted by the user, call makeGrid()

function clearOldGrid() {
  canvas.innerHTML = '';
}

  function makeGrid() {
  let tr, td;
  //create the table, for loops for creating the table rows and cells,
  // then appending
   for (let i = 0; i < height.value; i++) {
     tr = document.createElement('tr');
     canvas.appendChild(tr);
     for (let k = 0; k < width.value; k++) {
       td = document.createElement('td');
       tr.appendChild(td)
     }}
   }
/**
The user needs to change the color of a cell, and I use event.target to reach the exact element,
and use if function to determine whether the condition is fulfilled
**/
function changeCellColor() {
canvas.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.nodeName === 'TD') {
    e.target.style.backgroundColor = chooseColor.value;
  }
})
}

//react to the submit button
chooseSize.addEventListener('submit', function(e) {
  e.preventDefault();
  clearOldGrid();
  makeGrid();
  changeCellColor();
})
