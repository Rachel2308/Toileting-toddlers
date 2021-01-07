/* Code based on code on the google maps JavaScript API documentation */
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.40774,
            lng: -1.51105
        }
    });

    /* Code to show flag marker on map */    

    let window = new google.maps.InfoWindow();
    let markers = locations.map(function(location, i) {
        let marker = new google.maps.Marker({
            position: location,
            icon: "assets/images/map-icon-3.png"
        });
        google.maps.event.addListener(marker, 'click', function(evt) {
            window.setContent(location.info);
            window.open(map, marker);
        })
        return marker;
    });

/* Code to show cluster marker on map */     

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}


let markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

let markerCluster = new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
});