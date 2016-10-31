var map;

var wut = 'https://sites.google.com/site/votercompanion/HouseDistrict60.kml'

var src = 'https://sites.google.com/site/votercompanion/HouseDistrict21.kml';
// create a locations array of location objects

function initMap() {
    // Create a styles array to use with the map.

    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 45.5231,
            lng: -122.6765
        },
        zoom: 8,
     //   styles: styles,
        mapTypeControl: false
    });
    loadKmlLayer(src, map);

    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations = [];

    var largeInfowindow = new google.maps.InfoWindow();


    // Style the markers a bit. This will be our listing marker icon.
    //var defaultIcon = makeMarkerIcon('0091ff');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    //var highlightedIcon = makeMarkerIcon('FFFF24');

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open the large infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        // Two event listeners - one for mouseover, one for mouseout,
        // to change the colors back and forth.
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
    }


    // This function populates the infowindow when the marker is clicked. We'll only allow
    // one infowindow which will open at the marker that is clicked, and populate based
    // on that markers position.
    function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            // Clear the infowindow content to give the streetview time to load.
            infowindow.setContent('');
            infowindow.marker = marker;
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });

        }
    }
}
function loadKmlLayer(src, map) {
	var kmlLayer = new google.maps.KmlLayer(src, {
	preserveViewport: false,
	map: map
});
	google.maps.event.addListener(kmlLayer, 'click', function(event) {
		var content = event.featureData.infoWindowHtml;
		var testimonial = document.getElementById('capture');
		testimonial.innerHTML = content;
	});
}
var ViewModel = function() {
    var self = this;
    self.districtArray = [dist1, dist2, dist3, dist3, dist3, dist3, dist3, dist3, dist3, ];
    var dist1 = 'https://sites.google.com/site/votercompanion/HouseDistrict1.kml';
    var dist2 = 'https://sites.google.com/site/votercompanion/HouseDistrict2.kml';
    var dist3 = 'https://sites.google.com/site/votercompanion/HouseDistrict3.kml';
    var dist4 = 'https://sites.google.com/site/votercompanion/HouseDistrict4.kml';
    var dist5 = 'https://sites.google.com/site/votercompanion/HouseDistrict5.kml';
    var dist6 = 'https://sites.google.com/site/votercompanion/HouseDistrict6.kml';
    var dist7 = 'https://sites.google.com/site/votercompanion/HouseDistrict7.kml';
    var dist8 = 'https://sites.google.com/site/votercompanion/HouseDistrict8.kml';
    var dist9 = 'https://sites.google.com/site/votercompanion/HouseDistrict9.kml';
    var dist10 = 'https://sites.google.com/site/votercompanion/HouseDistrict10.kml';
    var dist11 = 'https://sites.google.com/site/votercompanion/HouseDistrict11.kml';
    var dist12 = 'https://sites.google.com/site/votercompanion/HouseDistrict12.kml';
    var dist13 = 'https://sites.google.com/site/votercompanion/HouseDistrict13.kml';
    var dist14 = 'https://sites.google.com/site/votercompanion/HouseDistrict14.kml';
    var dist15 = 'https://sites.google.com/site/votercompanion/HouseDistrict15.kml';
    var dist16 = 'https://sites.google.com/site/votercompanion/HouseDistrict16.kml';
    var dist17 = 'https://sites.google.com/site/votercompanion/HouseDistrict17.kml';
    var dist18 = 'https://sites.google.com/site/votercompanion/HouseDistrict18.kml';
    var dist19 = 'https://sites.google.com/site/votercompanion/HouseDistrict19.kml';
    var dist20 = 'https://sites.google.com/site/votercompanion/HouseDistrict20.kml';
    var dist21 = 'https://sites.google.com/site/votercompanion/HouseDistrict21.kml';
    var dist22 = 'https://sites.google.com/site/votercompanion/HouseDistrict22.kml';
    var dist23 = 'https://sites.google.com/site/votercompanion/HouseDistrict23.kml';
    var dist24 = 'https://sites.google.com/site/votercompanion/HouseDistrict24.kml';
    var dist25 = 'https://sites.google.com/site/votercompanion/HouseDistrict25.kml';
    var dist26 = 'https://sites.google.com/site/votercompanion/HouseDistrict26.kml';
    var dist27 = 'https://sites.google.com/site/votercompanion/HouseDistrict27.kml';
    var dist28 = 'https://sites.google.com/site/votercompanion/HouseDistrict28.kml';
    var dist29 = 'https://sites.google.com/site/votercompanion/HouseDistrict29.kml';
    var dist30 = 'https://sites.google.com/site/votercompanion/HouseDistrict30.kml';
    var dist31 = 'https://sites.google.com/site/votercompanion/HouseDistrict31.kml';
    var dist32 = 'https://sites.google.com/site/votercompanion/HouseDistrict32.kml';
    var dist33 = 'https://sites.google.com/site/votercompanion/HouseDistrict33.kml';
    var dist34 = 'https://sites.google.com/site/votercompanion/HouseDistrict34.kml';
    var dist35 = 'https://sites.google.com/site/votercompanion/HouseDistrict35.kml';
    var dist36 = 'https://sites.google.com/site/votercompanion/HouseDistrict36.kml';
    var dist37 = 'https://sites.google.com/site/votercompanion/HouseDistrict37.kml';
    var dist38 = 'https://sites.google.com/site/votercompanion/HouseDistrict38.kml';
    var dist39 = 'https://sites.google.com/site/votercompanion/HouseDistrict39.kml';
    var dist40 = 'https://sites.google.com/site/votercompanion/HouseDistrict40.kml';
    var dist41 = 'https://sites.google.com/site/votercompanion/HouseDistrict41.kml';
    var dist42 = 'https://sites.google.com/site/votercompanion/HouseDistrict42.kml';
    var dist43 = 'https://sites.google.com/site/votercompanion/HouseDistrict43.kml';
    var dist44 = 'https://sites.google.com/site/votercompanion/HouseDistrict44.kml';
    var dist45 = 'https://sites.google.com/site/votercompanion/HouseDistrict45.kml';
    var dist46 = 'https://sites.google.com/site/votercompanion/HouseDistrict46.kml';
    var dist47 = 'https://sites.google.com/site/votercompanion/HouseDistrict47.kml';
    var dist48 = 'https://sites.google.com/site/votercompanion/HouseDistrict48.kml';
    var dist49 = 'https://sites.google.com/site/votercompanion/HouseDistrict49.kml';
    var dist50 = 'https://sites.google.com/site/votercompanion/HouseDistrict50.kml';
    var dist51 = 'https://sites.google.com/site/votercompanion/HouseDistrict51.kml';
    var dist52 = 'https://sites.google.com/site/votercompanion/HouseDistrict52.kml';
    var dist53 = 'https://sites.google.com/site/votercompanion/HouseDistrict53.kml';
    var dist54 = 'https://sites.google.com/site/votercompanion/HouseDistrict54.kml';
    var dist55 = 'https://sites.google.com/site/votercompanion/HouseDistrict55.kml';
    var dist56 = 'https://sites.google.com/site/votercompanion/HouseDistrict56.kml';
    var dist57 = 'https://sites.google.com/site/votercompanion/HouseDistrict57.kml';
    var dist58 = 'https://sites.google.com/site/votercompanion/HouseDistrict58.kml';
    var dist59 = 'https://sites.google.com/site/votercompanion/HouseDistrict59.kml';
    var dist60 = 'https://sites.google.com/site/votercompanion/HouseDistrict60.kml';



   
    // test
    

    // Create a list view with location items
    // this.myLocations = ko. observableArray(locations);

    // iterate over the locations array, with for example the forEach method
    // to create location objects, if you use a Location constructor

};


var myViewModel = new ViewModel();

ko.applyBindings(myViewModel);
