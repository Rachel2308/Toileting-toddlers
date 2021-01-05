
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.40774,
            lng: -1.51105
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.41232, lng: -1.53119 },
        { lat: 52.41262, lng: -1.52850 },
        { lat: 52.39530, lng: -1.52123 },
        { lat: 52.40773, lng: -1.51416 },
        { lat: 52.40250, lng: -1.51596 },
        { lat: 52.43134, lng: -1.43912 },
        { lat: 52.44567, lng: -1.48907 },
        { lat: 52.43562, lng: -1.42727 },
        { lat: 52.40954, lng: -1.50710 },
        { lat: 52.40404, lng: -1.56413 },
        { lat: 52.39200, lng: -1.53975 },
        { lat: 52.40784, lng: -1.51185 },
        { lat: 52.40846, lng: -1.51341 },
        { lat: 52.40671, lng: -1.52013 },
        { lat: 52.40949, lng: -1.51283 },
        { lat: 52.40876, lng: -1.50801 },
        { lat: 52.41017, lng: -1.50979 },
        { lat: 52.40765, lng: -1.50833 },
        { lat: 52.40633, lng: -1.51232 },
        { lat: 52.40489, lng: -1.52173 },
        { lat: 52.41023, lng: -1.50929 },
        { lat: 52.40785, lng: -1.50743 },
        { lat: 52.41120, lng: -1.50994 },
        { lat: 52.40658, lng: -1.51267 },
        { lat: 52.40829, lng: -1.51488 },
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });
}


