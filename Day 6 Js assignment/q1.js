
var color = ["gray", "blue", "brown", "green","red","white"];
var i = 0;
function change() {
  document.body.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
}
setInterval(change, 5000);