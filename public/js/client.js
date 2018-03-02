var alt_enable = false;
var nav_enable = false;
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
/* Sets the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Sets the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleNav(){
  if (nav_enable) {
      closeNav();
      nav_enable = false;
  }
  else {
    openNav();
    nav_enable = true;

  }
}
