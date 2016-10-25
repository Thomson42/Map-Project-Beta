var map;

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

    var dist21 = 'kml/HouseDistrict21.kml'
    var dist23 = 'kml/HouseDistrict23.kml'

   var kmlLayer = new google.maps.KmlLayer(dist21, dist23, {
   		supressInfoWindows: true,
   		preserveViewport: false,
    });

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
var ViewModel = function() {
    var self = this;
    self.districtArray = [];
    var dist21 = 'kml/HouseDistrict21.kml'
    var dist23 = 'kml/HouseDistrict23.kml'

   var kmlLayer = new google.maps.KmlLayer(dist21, dist23, {
   		supressInfoWindows: true,
   		preserveViewport: false,
    });
    // test
    

    // Create a list view with location items
    // this.myLocations = ko. observableArray(locations);

    // iterate over the locations array, with for example the forEach method
    // to create location objects, if you use a Location constructor

};


var myViewModel = new ViewModel();

ko.applyBindings(myViewModel);
