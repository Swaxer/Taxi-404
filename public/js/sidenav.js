/* Sets the width of the side navigation to 250px */
var nav_enable = false;

function openNav() {
  var nav = document.getElementById("mySidenav");
  nav.style.width = "300px";
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
