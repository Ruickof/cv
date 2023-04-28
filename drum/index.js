// basılan tuş takibi
var drumSayisi = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumSayisi; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    sesle(buttonInnerHTML);
    butonAnimasyon(buttonInnerHTML)
    
  });
}

// keyboard takibi

document.addEventListener("keydown", function (event) {
  sesle(event.key);
  butonAnimasyon(event.key)
});

function sesle(key) {
  switch (key) {
    case "q":
      var a1 = new Audio("sounds/tom-1.mp3");
      a1.play();
      break;

    case "w":
      var a2 = new Audio("sounds/tom-2.mp3");
      a2.play();
      break;

    case "e":
      var a3 = new Audio("sounds/tom-3.mp3");
      a3.play();
      break;

    case "r":
      var a4 = new Audio("sounds/tom-4.mp3");
      a4.play();
      break;

    case "t":
      var a5 = new Audio("sounds/crash.mp3");
      a5.play();
      break;

    case "y":
      var a6 = new Audio("sounds/kick-bass.mp3");
      a6.play();
      break;
     
    case "x":
        var a6 = new Audio("sounds/rick.mp3");
        a6.play();
        break; 

    case "u":
      var a7 = new Audio("sounds/snare.mp3");
      a7.play();
      break;
    default:
      break;
  }
}

function butonAnimasyon (currentkey){
    var activeButon = document.querySelector("."+currentkey);
    activeButon.classList.add("pressed");
    setTimeout(function(){
      activeButon.classList.remove("pressed")
    },150);
}
