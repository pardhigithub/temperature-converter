
var cal = document.querySelector('.c')
var far = document.querySelector('.f')

function convertTemp() {
  let celsius = parseFloat(document.getElementById("temp").value);
  let f = parseFloat(document.getElementById("temp").value);

  if(cal.innerHTML=='°C'){
    if (!isNaN(celsius)) {

      let fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("resultText").innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
  }
  else {

      document.getElementById("resultText").innerHTML = "Please enter a valid temperature in °C";
  }
  }
  else{
    if (!isNaN(f)) {

      let celsius = (f - 32) * 5/9;
      document.getElementById("resultText").innerHTML = f + "°F is " + celsius.toFixed(2) + "°C";
  }
  else {

      document.getElementById("resultText").innerHTML = "Please enter a valid temperature in °C";
  }
  }
  
}

function resetTemp() {
  document.getElementById("temp").value = "";
  document.getElementById("resultText").innerHTML = "";
}

function changeTemp(x) {
  if(cal.innerHTML=='°C'){
    cal.innerHTML = "°F"
    far.innerHTML = "°C"
  }
  else{
    cal.innerHTML = "°C"
    far.innerHTML = "°F"
  }
}

















