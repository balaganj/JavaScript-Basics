var button = document.querySelector('button');
var box = document.getElementById('changeMe');

button.onclick = function changeColor (){
  if (box.style.background == 'green') {
    box.style.background = 'blue';
  } else {
    box.style.background = 'green';
         }
  }