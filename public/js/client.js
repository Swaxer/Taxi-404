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
