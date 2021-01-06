/* Code based on code on the google maps JavaScript API documentation */

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.40774,
            lng: -1.51105
        }
    });

    var window = new google.maps.InfoWindow();
    var markers = locations.map(function (location, i) {
        var marker = new google.maps.Marker({
            position: location,
            icon: "assets/images/map-icon-3.png"
        });
        google.maps.event.addListener(marker, 'click', function (evt) {
            window.setContent(location.info);
            window.open(map, marker);
        })
        return marker;
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

 

    var locations = [
        { lat: 52.41232, lng: -1.53119, info:'<h2>Morrisons</h2><br><h3>Address:</h3>Holyhead Road<br>Coventry<br>CV5 8BX<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>', },
        { lat: 52.41262, lng: -1.52850, info:'<h2>MacDonalds</h2><br><h3>Address:</h3>Alvis Retail Park<br>Holyhead Road<br>Coventry<br>CV5 8BW<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.39530, lng: -1.52123, info:'<h2>War Memorial Park</h2><br><h3>Address:</h3>Kenilworth Road<br>Coventry<br>CV3 6PT<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40773, lng: -1.51416, info:'<h2>Coventry Market</h2><br><h3>Address:</h3>14 Market Way<br>Coventry<br>CV1 3HT<br><h3>Amenities:</h3><li>No pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.40250, lng: -1.51596, info:'<h2>Burger King</h2><br><h3>Address:</h3>Central Six Retail Park<br>Warwick Road<br>Coventry<br>CV3 6TA<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.43134, lng: -1.43912, info:'<h2>Asda Superstore</h2><br><h3>Address:</h3>Brade Drive<br>Coventry<br>CV2 2PN<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.44567, lng: -1.48907, info:'<h2>Tesco Extra</h2><br><h3>Address:</h3>Phoenix Way<br>Longford Road<br>Coventry<br>CV6 6AS<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.43562, lng: -1.42727, info:'<h2>Starbucks Coffee</h2><br><h3>Address:</h3>Olivier Way<br>Coventry<br>CV2 2SH<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>Handsfree flush</li> <li>Baby change within female toilet</li><li>Accessible by car</li>',  },
        { lat: 52.40954, lng: -1.50710, info:'<h2>Starbucks Coffee</h2><br><h3>Address:</h3>52 Broadgate<br>Coventry<br>CV1 1NF<br><h3>Amenities:</h3><li>No pushchair accessible cubicle</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40404, lng: -1.56413, info:'<h2>Starbucks Coffee</h2><br><h3>Address:</h3>Unit 2, Island Site<br>Tile Hill Lane<br>Coventry<br>CV5 6UA<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.39200, lng: -1.53975, info:'<h2>Starbucks Go & Serve</h2><br><h3>Address:</h3>Esso Service Station<br>Canley Road<br>Coventry<br>CV5 6AP<br><h3>Amenities:</h3><li>No pushchair accessible cubicle</li><li>No handsfree flush</li> <li>No baby change facilities</li><li>Accessible by car</li>',  },
        { lat: 52.40784, lng: -1.51185, info:'<h2>Costa Coffee</h2><br><h3>Address:</h3>The Precinct<br>Units 35-37<br>Coventry<br>CV1 1DD<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40846, lng: -1.51341, info:'<h2>Caffe Nero</h2><br><h3>Address:</h3>Lower Precinct<br>Coventry<br>CV1 1DX<br><h3>Amenities:</h3><li>No accessible to pushchairs</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40671, lng: -1.52013, info:'<h2>Planet Ice</h2><br><h3>Address:</h3>Holyhead Road<br>Coventry<br>CV5 8BX<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.40949, lng: -1.51283, info:'<h2>West Orchards<br>Shopping Centre</h2><br><h3>Address:</h3>Smithford Way<br>Coventry<br>CV1 1QX<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40876, lng: -1.50801, info:'<h2>Coventry<br>Cathedral</h2><br><h3>Address:</h3>Priory Street<br>Coventry<br>CV1 5FB<br><h3>Amenities:</h3><li>Not accessible to pushchairs</li><li>No handsfree flush</li> <li>No baby change facilities</li><li>Accessible by car</li>',  },
        { lat: 52.41017, lng: -1.50979, info:'<h2>Subway</h2><br><h3>Address:</h3>27 The Burges<br>Coventry<br>CV1 1HL<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>No handsfree flush</li> <li>Baby change within female toilet</li><li>Only accessible on foot</li>',  },
        { lat: 52.40765, lng: -1.50833, info:'<h2>Subway</h2><br><h3>Address:</h3>12 High Street<br>Coventry<br>CV1 5RE<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40633, lng: -1.51232, info:'<h2>Subway</h2><br><h3>Address:</h3>8a Bull Yard<br>Coventry<br>CV1 1LH<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.39901, lng: -1.53278, info:'<h2>Subway</h2><br><h3>Address:</h3>51 Earlsdon Street<br>Coventry<br>CV5 6EL<br><h3>Amenities:</h3><li>No pushchair accessible cubicles</li><li>No handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.41023, lng: -1.50929, info:'<h2>MacDonalds</h2><br><h3>Address:</h3>26 Cross Cheaping<br>Coventry<br>CV1 1HF<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40785, lng: -1.50743, info:'<h2>Herbert<br>Art Gallery</h2><br><h3>Address:</h3>Jordan Well<br>Coventry<br>CV1 5QP<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.41120, lng: -1.50994, info:'<h2>Coventry Transport Museum</h2><br><h3>Address:</h3>Millenium Place<br>Hales Street<br>Coventry<br>CV1 1JD<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Accessible by car</li>',  },
        { lat: 52.40658, lng: -1.51267, info:'<h2>City Arcade</h2><br><h3>Address:</h3>City Arcade<br>Coventry<br>CV1 3HX<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change accessible to all</li><li>Only accessible on foot</li>',  },
        { lat: 52.40829, lng: -1.51488, info:'<h2>Lower Precinct<br>Shopping Centre</h2><br><h3>Address:</h3>Lower Precinct Shopping Centre<br>Coventry<br>CV1 1NQ<br><h3>Amenities:</h3><li>Pushchair accessible cubicle</li><li>Handsfree flush</li> <li>Baby change within female toilet</li><li>Only accessible on foot</li>',  },
    ];
    

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });


