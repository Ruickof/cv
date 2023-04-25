function zaar() {
  var n = Math.random();
  n = n * 6;
  n = Math.floor(n);
  n = n + 1;
  if (n == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  } else if (n == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  } else if (n == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  } else if (n == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  } else if (n == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  } else if (n == 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }

  var c = Math.random();
  c = c * 6;
  c = Math.floor(c);
  c = c + 1;
  if (c == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  } else if (c == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  } else if (c == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  } else if (c == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  } else if (c == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  } else if (n == 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  if (n > c) {
    document.querySelector("h1").innerHTML = "🚩1. Oyuncu Kazandı";
  } else if (n < c) {
    document.querySelector("h1").innerHTML = "2. Oyuncu Kazandı🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩Berabere🚩";
  }
}
