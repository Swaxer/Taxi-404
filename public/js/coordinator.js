
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

var showTrafficView = document.getElementById("inTraffic");
showTrafficView.onclick = function () {
    var orders = document.getElementById("orders");
    while (orders.firstChild) {
        orders.removeChild(orders.firstChild);
    }
    var cars = document.getElementById("cars");
    while (cars.firstChild) {
        cars.removeChild(cars.firstChild);
    }
    orders.style.width = "0%";
    cars.style.width = "100%";
    cars.style.borderStyle = "none";
    testInTraffic();
}

var showOrderView = document.getElementById("incoming");
showOrderView.onclick = function () {
    var orders = document.getElementById("orders");
    var cars = document.getElementById("cars");
    while (cars.firstChild) {
        cars.removeChild(cars.firstChild);
    }
    orders.style.width = "50%";
    cars.style.width = "50%";
    cars.style.borderStyle = "solid";
    testOrdersAndCars();
}

function makeCarPost(car) {
    var carSlot = document.getElementById("cars");
    var carBox = document.createElement("div");
    var timeBox = document.createElement("div");
    timeBox.className = "timeBox";
    var viewMoreBtn = document.createElement("button");
    viewMoreBtn.className = "viewMoreButton";

    var carNum = document.createTextNode("BilNr: " + car[0]);
    var carType = document.createTextNode(". Platser: " + car[1]);
    var viewMoreValue = document.createTextNode("Visa mer");
    viewMoreBtn.appendChild(viewMoreValue);
    carBox.appendChild(carNum);
    carBox.appendChild(carType);
    carBox.appendChild(viewMoreBtn);

    carBox.className = "carBox";
    if (car[2]) {
        carBox.style.backgroundColor = "#E1716E";
        var eta = document.createTextNode("ETA: " + car[3]);
        var destination = document.createTextNode(". " + car[4]);
        timeBox.appendChild(eta);
        timeBox.appendChild(destination);
        carBox.appendChild(timeBox);
    } else {
        carBox.style.backgroundColor = "#68BA5B";
    }
    carSlot.appendChild(carBox);
}

function makeOrderPost(order) {
    var orderSlot = document.getElementById("orders");
    var orderBox = document.createElement("div");
    var timeBox = document.createElement("div");
    timeBox.className = "timeBox";
    var viewMoreBtn = document.createElement("button");
    viewMoreBtn.className = "viewMoreButton";

    var from = document.createTextNode("Från: " + order[0]);
    var to = document.createTextNode("Till: " + order[1]);
    var time = document.createTextNode("Tid: " + order[2]);
    var viewMoreValue = document.createTextNode("Visa mer");
    viewMoreBtn.appendChild(viewMoreValue);
    orderBox.appendChild(viewMoreBtn);
    orderBox.appendChild(from);
    orderBox.appendChild(document.createElement("br"));
    orderBox.appendChild(to);
    timeBox.appendChild(time);
    orderBox.appendChild(timeBox);

    orderBox.className = "orderBox";
    orderSlot.appendChild(orderBox);
}

function makeInTrafficPost(car) {
    var carSlot = document.getElementById("cars");
    var carBox = document.createElement("div");
    var timeBox = document.createElement("div");
    timeBox.className = "timeBox";
    var viewMoreBtn = document.createElement("button");
    viewMoreBtn.className = "viewMoreButton";

    var carNum = document.createTextNode("BilNr: " + car[0]);
    var carType = document.createTextNode(". Platser: " + car[1]);
    var viewMoreValue = document.createTextNode("Visa mer");
    viewMoreBtn.appendChild(viewMoreValue);
    carBox.appendChild(carNum);
    carBox.appendChild(carType);
    carBox.appendChild(viewMoreBtn);

    carBox.className = "carBox";
    if (car[2]) {
        carBox.style.backgroundColor = "#E1716E";
        var eta = document.createTextNode("ETA: " + car[3]);
        var destination = document.createTextNode(". " + car[4]);
        timeBox.appendChild(eta);
        timeBox.appendChild(destination);
        carBox.appendChild(timeBox);
    } else {
        carBox.style.backgroundColor = "#68BA5B";
    }
    carSlot.appendChild(carBox);
}






function testCar1() {
    var carNum = 15;
    var carType = 4;
    var taken = true;
    var date = new Date();
    var eta = date.getHours() + ":" + (date.getMinutes() + 15);
    var destination = "Eriksberg";
    return [carNum, carType, taken, eta, destination]
}

function testCar2() {
    var carNum = 12;
    var carType = 7;
    var taken = false;
    return [carNum, carType, taken]
}

function testOrder1() {
    var from = "Studentvägen 26";
    var to = "Lägerhyddsvägen 4";
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    return [from, to, time];
}

function testOrder2() {
    var from = "Carolina Redeviva";
    var to = "Slottet";
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    return [from, to, time];
}

function testOrdersAndCars() {
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar2());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeCarPost(testCar1());
    makeOrderPost(testOrder1());
    makeOrderPost(testOrder1());
    makeOrderPost(testOrder2());
    makeOrderPost(testOrder2());
    makeOrderPost(testOrder1());
    makeOrderPost(testOrder1());
    makeOrderPost(testOrder2());
    makeOrderPost(testOrder2());
}

function testInTraffic() {
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
    makeInTrafficPost(testCar1());
}

testOrdersAndCars();

