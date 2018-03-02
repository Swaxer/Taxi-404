/* Sets the width of the side navigation to 250px */
var nav_enable = false;

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
