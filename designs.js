// Select color input
const chooseColor = document.getElementById('#colorPicker')

// Select size input
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')

const chooseSize = document.querySelector('#sizePicker')
const canvas = document.querySelector('#pixelCanvas')

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  canvas.innerHTML = '';
  let tr, td;

  //create the table, for loops for creating the table rows and cells,
  // then appending
   for (let i=0; i<height.value; i++) {
     tr = document.createElement('tr');
     canvas.appendChild(tr);
     for (let k=0; k<width.value; k++) {
       td = document.createElement('td');
       tr.appendChild(td)
     }
   }
/**
oh, by the way, each time when the button is clicked, the user should
see a new grid. So the first line in the function’s body is used
for clean up existing grid,
The user needs to change the color of a cell, how to make it happen?
Ok, so here’s a thing, because every element inherits properties
from the Node Interface, which means each td has the .nodeName
property of “TD”, and I use event.target to reach the exact element,
and use if function to determine whether the condition is fulfilled
**/
canvas.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.nodeName==='TD') {
    e.target.style.backgroundColor = color.value;
  }
})
}
