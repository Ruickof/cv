function calculateBMI() {
  var weight = prompt("Kilonuz ?");
  var height = prompt("Boyunuz ?");

  function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    if (bmi < 18.5) {
      alert("Your BMI is " + bmi + " , so you are underweight.");
    }
    if (bmi > 18.5 && bmi < 24.9) {
      alert("Your BMI is " + bmi + " , so you have a normal weight.");
    }
    if (bmi > 24.9) {
      alert("Your BMI is " + bmi + " ,  so you are overweight.");
    }
  }
  bmiCalculator(weight, height);
}
function zar2() {
  var i = prompt("Kaçlık Zar İstiyorsun ?");
  var n = Math.random();
  n = n * i;
  n = Math.floor(n);
  n = n + 1;
  alert(n);
}
function zar6li() {
  var n = Math.random();
  n = n * 6;
  n = Math.floor(n);
  n = n + 1;
  alert(n);
}
function fibonacciGenerator() {
  var n = prompt("İstenilen Fibonacci Dizisi?");
  var dizi = [0, 1];
  for (var i = 0; i < n; i++) {
    var a = dizi[i] + dizi[i + 1];
    dizi.push(a);
  }
  alert("Sonuç= " + a + "  " + "Dizi Şu Şekildedir = " + dizi);
}

function isLeap() {
  var year = prompt("Yil Gir");
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        alert(year+" Yılı Artık Yıldır.");
      } else {
        alert(year+" Yılı Artık Yıl Değildir.");
      }
    } else {
      alert(year+" Yılı Artık Yıldır.");
    }
  } else {
    alert(year+" Yılı Artık Yıl Değildir.");
  }
}

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
