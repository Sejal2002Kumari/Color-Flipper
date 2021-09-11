function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(btn) {
    var color = getRandomColor();
   document.getElementsByTagName("body")[0].style.backgroundColor = color;
 document.getElementsByClassName("containerPart1")[0].childNodes[1].childNodes[0].innerText = `Background Color : ${color}`; 
}
