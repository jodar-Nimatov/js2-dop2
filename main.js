
const colors = ['blue','red','yellow', 'green','black', 'pink', 'orange'];
let currentColor = 0;
 
const GO = setInterval((color)=> {
  document.body.style.background = colors[currentColor];
  currentColor++;
}, 1000)

