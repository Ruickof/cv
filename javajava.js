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
