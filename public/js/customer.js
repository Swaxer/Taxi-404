/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#container',
    data: {
        orderId: null,
        map: null,
        fromMarker: null,
        destMarker: null,
        taxiMarkers: {},
        smallTaxi: 1,
        largeTaxi: 0,
        checkboxes: {
            wheelchair: false,
            animals: false,
            kids: false,
        },
        pickupTime: null,
        additionalInfo: "",
        placeQueryFrom: "",
        placeQueryDest: "",
        orderItems: {},
        confirmView: false,
        name: "",
        phone: "",
    },
    created: function () {
        socket.on('orderId', function (orderId) {
            this.orderId = orderId;
        }.bind(this));
    },
    mounted: function () {
        // set up the map
        this.map = L.map('my-map').setView([59.8415, 17.648], 13);

        // create the tile layer with correct attribution
        var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        L.tileLayer(osmUrl, {
            attribution: osmAttrib,
            maxZoom: 18
        }).addTo(this.map);
        this.map.on('click', this.handleClick);

        var searchDestControl = L.esri.Geocoding.geosearch({
            allowMultipleResults: false,
            zoomToResult: false,
            placeholder: "Destination"
        }).addTo(this.map);
        var searchFromControl = L.esri.Geocoding.geosearch({
            allowMultipleResults: false,
            zoomToResult: false,
            placeholder: "From"
        });
        // listen for the results event and add the result to the map
        searchDestControl.on("results", function (data) {
            this.destMarker = L.marker(data.latlng, {draggable: true}).addTo(this.map);
            this.destMarker.on("drag", this.moveMarker);
            searchFromControl.addTo(this.map);
        }.bind(this));

        // listen for the results event and add the result to the map
        searchFromControl.on("results", function (data) {
            this.fromMarker = L.marker(data.latlng, {icon: this.fromIcon, draggable: true}).addTo(this.map);
            this.fromMarker.on("drag", this.moveMarker);
            this.connectMarkers = L.polyline([this.fromMarker.getLatLng(), this.destMarker.getLatLng()], {color: 'blue'}).addTo(this.map);
        }.bind(this));
    },
    methods: {
        searchAddressFrom: function () {
            var southWest = L.latLng(57, 20),
                northEast = L.latLng(63, 14),
                bounds = L.latLngBounds(southWest, northEast);
            L.esri.Geocoding.geocode().address(this.placeQueryFrom).city("Uppsala").country("Sweden").run(function (err, response) {
                this.fromMarker = response.results;
            }.bind(this));
        },
        searchAddressDest: function () {
            var southWest = L.latLng(57, 20),
                northEast = L.latLng(63, 14),
                bounds = L.latLngBounds(southWest, northEast);
            L.esri.Geocoding.geocode().address(this.placeQueryDest).city("Uppsala").country("Sweden").run(function (err, response) {
                this.destMarker = response.results;
            }.bind(this));
        },
        getAddressFrom: function (latLng, address) {
            this.fromMarker = L.marker(latLng).addTo(this.map);
            this.placeQueryFrom = address;
        },
        getAddressDest: function (latLng, address) {
            this.destMarker = L.marker(latLng).addTo(this.map);
            this.placeQueryDest = address;
        },
        removeSmallTaxi: function () {
            if (this.smallTaxi != 0) {
                this.smallTaxi = this.smallTaxi - 1;
            }
        },
        addSmallTaxi: function () {
            this.smallTaxi = this.smallTaxi + 1;
        },
        removeLargeTaxi: function () {
            if (this.largeTaxi != 0) {
                this.largeTaxi = this.largeTaxi - 1;
            }
        },
        addLargeTaxi: function () {
            this.largeTaxi = this.largeTaxi + 1;
        },
        gatherInfo: function () {
            this.confirmView = true;
            if (this.pickupTime == null) {
                var currentdate = new Date();
                var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();

                this.pickupTime = datetime;
            }

            this.orderItems.datum = this.pickupTime;

            if (this.smallTaxi != 0) {
                this.orderItems.litenTaxi = this.smallTaxi;
            }
            if (this.largeTaxi != 0) {
                this.orderItems.storTaxi = this.largeTaxi;
            }
            if (this.checkboxes.wheelchair) {
                this.orderItems.rullstol = "Ja";
            }
            if (this.checkboxes.animals) {
                this.orderItems.djur = "Ja";
            }
            if (this.checkboxes.kids) {
                this.orderItems.barn = "Ja"
            }
            if (this.additionalInfo != "") {
                this.orderItems.info = this.additionalInfo;
            }
        },
        orderTaxi: function () {
            socket.emit("orderTaxi", {
                fromLatLong: [this.fromMarker.getLatLng().lat, this.fromMarker.getLatLng().lng],
                destLatLong: [this.destMarker.getLatLng().lat, this.destMarker.getLatLng().lng],
                fromAddress: this.placeQueryFrom,
                destAddress: this.placeQueryDest,
                orderItems: this.orderItems,
                name: this.name,
                phone: this.phone
            });
            location.href = '/bokning_behandlas';
        }
    }
});
