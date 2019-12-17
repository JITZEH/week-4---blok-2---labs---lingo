var container = document.getElementById("container");
var kleuren = ["green","red", "blue", "purple"]
var buttons = []




for (var i = 0; i < 30; i++) {
 var buttonw = document.createElement("BUTTON");	
 buttonw.innerHTML = (i+1)
 buttons.push(0);
 buttonw.style.backgroundColor = kleuren[0];
 buttonw.id = i;
 container.appendChild(buttonw);
 buttonw.onclick = function() {
  buttons[this.id]++;

  if (buttons[this.id] == kleuren.length) {
 	container.removeChild(this);
  }else{
  this.style.backgroundColor = kleuren[buttons[this.id]]
 this.style.border = '15px solid grey';	
  }

  }
}
