
var mapHidden = false;
var hideMap = document.getElementById("hide");
hideMap.onclick = function () {
    var overview = document.getElementById("overview");
    if (mapHidden) {
        overview.style.top = "80%";
        mapHidden = false;
    } else {
        overview.style.top = "5%";
        mapHidden = true;
    }
}

function testCar1() {
    var carNum = 15;
    var carType = "Svart Mercedes AMG";
    var driver = "Bengt";
    var taken = true;
    var eta = "13:42";
    return [carNum, carType, driver, taken, eta]
}

function testCar2() {
    var carNum = 7;
    var carType = "Svart BMW 525";
    var driver = "Uffe";
    var taken = false;
    return [carNum, carType, driver, taken]
}

function makeCarPost(car) {
    var carSlot = document.getElementById("cars");
    var carBox = document.createElement("div");

    var carNum = document.createTextNode("Bil: " + car[0]);
    var carType = document.createTextNode(". Typ: " + car[1]);
    var driver = document.createTextNode(". Chaufför: " + car[2]);
    carBox.appendChild(carNum);
    carBox.appendChild(carType);
    carBox.appendChild(driver);

    carBox.className = "carBox";
    if (car[3]) {
        carBox.style.backgroundColor = "#E1716E";
        var eta = document.createTextNode(". ETA: " + car[4]);
        carBox.appendChild(eta);
    } else {
        carBox.style.backgroundColor = "#68BA5B";
    }

    carSlot.appendChild(carBox);
}

makeCarPost(testCar1());
makeCarPost(testCar2());