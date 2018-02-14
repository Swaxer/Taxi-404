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

var smallTaxi = 1;
var largeTaxi = 0;

function addSmallTaxi(){
  var elem = document.getElementById('smallTaxiAmount');
  ++smallTaxi;
  elem.innerHTML = smallTaxi;
}
function removeSmallTaxi(){
  var elem = document.getElementById('smallTaxiAmount');
  if (smallTaxi != 0){
    --smallTaxi;
    elem.innerHTML = smallTaxi;
  }
}

function addLargeTaxi(){
  var elem = document.getElementById('largeTaxiAmount');
  ++largeTaxi;
  elem.innerHTML = largeTaxi;
}
function removeLargeTaxi(){
  var elem = document.getElementById('largeTaxiAmount');
  if (largeTaxi > 0){
    --largeTaxi;
    elem.innerHTML = largeTaxi;
  }
}

function chooseTaxiLarge(){
  var elem = document.getElementById('largeTaxi');

}
