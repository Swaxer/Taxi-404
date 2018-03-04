var alt_enable = false;
function toggleAlternativ(){
    var elem = document.getElementById("alt-form");
    var button = document.getElementById("alternativ");
    if (alt_enable == true) {
        elem.style.display ='none';
        button.innerHTML = "Fler alternativ"
        alt_enable = false;
    }
    else {
        elem.style.display ='inherit';
        button.innerHTML = "Färre alternativ";
        alt_enable = true;
    }
}

// Timer. Delay = Minuter
// <p id="ptimer"></p> för användning
var delay = 15;
var future = new Date().getTime() + delay*60000;

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = future - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("ptimer").innerHTML = + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ptimer").innerHTML = "Framme!";
  }
}, 1000);
