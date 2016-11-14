var map;
var infowindow = null;
var bounds;
var marker;


var src = 'https://sites.google.com/site/votercompanion/HouseDistricts2.kmz';

function initMap() {
    bounds = new google.maps.LatLngBounds();
    // Create a styles array to use with the map.
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.281712,
            lng: -120.571651
        },
        zoom: 10,
     //   styles: styles,
        mapTypeControl: false
    });
    loadKmlLayer(src, map);
    setMarkers(map, districtArray);
    infoWindow = new google.maps.InfoWindow({
    	content: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>'
    });

};
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.

    // This function populates the infowindow when the marker is clicked. We'll only allow
    // one infowindow which will open at the marker that is clicked, and populate based
    // on that markers position.

function setMarkers(map, markers)    {
	var self = this;
	for (var i = 0; i < markers.length; i++) {
	// Get the position from the location array.
		var districtArray = markers[i];
		var distPosit = new google.maps.LatLng(districtArray[0], districtArray[1]);
		// Create a marker per location, and put into markers array.
		var marker = new google.maps.Marker({
			position: distPosit,
			title: districtArray[2],
			html: districtArray[3],
			animation: google.maps.Animation.DROP,
			map: map,
			id: i
		});

//Critical object that formats the string used in my Info Window needs photo image, title, name, and Link
	google.maps.event.addListener(marker, 'click', function () {
		// where I have added .html to the marker object.
			//alert(this.html);
			//populateInfoWindow(this);
			console.log(districtArray[3]);
			console.log(this.html);
			console.log(self.html);
			infowindow.open(map, districtArray);
			infowindow.open(map, this);
			infowindow.setContent(this.html);
			infowindow.getContent(this.html);
			//infowindow.open(map, this);
			map.setZoom(6);
			map.setCenter(marker.getPosition());
			console.log(this.html);
		});

	// Push the marker to our array of markers.
	}
	
	// marker.addListener('mouseover', toggleBounce);

}
/*function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}*/
function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker == marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
          
          // Open the infowindow on the correct marker.
          infowindow.open(map, marker);
        }
      }

function loadKmlLayer(src, map) {
	var kmlLayer = new google.maps.KmlLayer(src, {
	   preserveViewport: false,
	   map: map,
       suppressInfoWindows: true,
       scaleControl: false,
       zoomControl: false
    });

};
var districtArray = [
	[
		42.879857, -124.176448, 
		'House District 1', 'Discription'
	],
	[
    	42.889406, -123.18768, 
    	'House District 2', 'Discription'
    ],
    [
        42.267278, -123.484847, 
        'House District 3', 'Discription'
    ],
    [
        42.395083, -123.105353, 
        'House District 4', 'Discription'
    ],
    [
        42.174025, -122.759428, 
        'House District 5', 'Discription'
    ],
    [
        42.335308, -122.854325, 
        'House District 6', 'Discription'
    ],
    [
        43.517622, -122.792728, 
        'House District 7', 'Discription'
    ],
    [
        43.986553, -123.388908, 
        'House District 8', 'Discription'
    ],
    [
        43.825914, -123.956883, 
        'House District 9', 'Discription'
    ],
    [
        44.792453, -123.855322, 
        'House District 10', 'Discription'
    ],
    [
        44.190392, -122.986928, 
        'House District 11', 'Discription'
    ],
    [
        44.052428, -122.987669, 
        'House District 12', 'Discription'
    ],
    [
        44.079347, -123.093053, 
        'House District 13', 'Discription!'
    ],
    [
        44.200686, -123.189247, 
        'House District 14', 'Discription!'
    ],
    [
        44.596342, -123.093844, 
        'House District 15', 'Discription'
    ],
    [
        44.572186, -123.314939, 
        'House District 16', 'Discription'
    ],
    [
        44.526928, -122.333650, 
        'House District 17', 'Discription'
    ],
    [
        45.064225, -122.363769, 
        'House District 18', 'Discription'
    ],
    [
        44.855664, -122.979881, 
        'House District 19', 'Discription'
    ],
    [
        44.881706, -123.131458, 
        'House District 20', 'Discription'
    ],
    [
        44.933072, -123.003756, 
        'House District 21', 'Discription'
    ],
    [
        45.041217, -122.978322, 
        'House District 22', 'Discription'
    ],
    [
        44.693831, -123.460050, 
        'House District 23', 'Discription'
    ],
    [
        45.327094, -123.198294, 
        'House District 24', 'Discription'
    ],
    [
        45.148097, -122.968161, 
        'House District 25', 'Discription'
    ],
    [
        45.350456, -122.857914, 
        'House District 26', 'Discription'
    ],
    [
        45.467478, -122.791872, 
        'House District 27', 'Discription'
    ],
    [
        45.476458, -122.859597, 
        'House District 28', 'Discription'
    ],
    [
        45.531717, -123.064019, 
        'House District 29', 'Discription'
    ],
    [
        45.569125, -122.966467, 
        'House District 30', 'Discription'
    ],
    [
        45.829794, -123.043714, 
        'House District 31', 'Discription'
    ],
    [
        45.749375, -123.694558, 
        'House District 32', 'Discription'
    ],
    [
        45.533425, -122.770697, 
        'House District 33', 'Discription'
    ],
    [
        45.503314, -122.825014, 
        'House District 34', 'Discription'
    ],
    [
        45.425942, -122.772400, 
        'House District 35', 'Discription'
    ],
    [
        45.495067, -122.702092, 
        'House District 36', 'Discription'
    ],
    [
        45.345186, -122.705889, 
        'House District 37', 'Discription'
    ],
    [
        45.425439, -122.698467, 
        'House District 38', 'Discription'
    ],
    [
        45.298264, -122.470247, 
        'House District 39', 'Discription'
    ],
    [
        45.344147, -122.596736, 
        'House District 40', 'Discription'
    ],
    [
        45.437686, -122.631142, 
        'House District 41', 'Discription'
    ],
    [
        45.504475, -122.634708, 
        'House District 42', 'Discription'
    ],
    [
        45.553333, -122.659706, 
        'House District 43', 'Discription'
    ],
    [
        45.591361, -122.669567, 
        'House District 44', 'Discription'
    ],
    [
        45.538653, -122.587208, 
        'House District 45', 'Discription'
    ],
    [
        45.501336, -122.583608, 
        'House District 46', 'Discription'
    ],
    [
        45.522306, -122.506169, 
        'House District 47', 'Discription'
    ],
    [
        45.446475, -122.569928, 
        'House District 48', 'Discription'
    ],
    [
        45.539064, -122.445633, 
        'House District 49', 'Discription'
    ],
    [
        45.488328, -122.437292, 
        'House District 50', 'Discription'
    ],
    [
        45.442700, -122.471672, 
        'House District 51', 'Discription'
    ],
    [
        45.393975, -121.913583, 
        'House District 52', 'Discription'
    ],
    [
        43.925586, -121.514297, 
        'House District 53', 'Discription'
    ],
    [
        44.040094, -121.317767, 
        'House District 54', 'Discription'
    ],
    [
        43.114539, -120.952533, 
        'House District 55', 'Discription'
    ],
    [
        42.133272, -121.352069, 
        'House District 56', 'Discription'
    ],
    [
        45.393144, -120.129728, 
        'House District 57', 'Discription'
    ],
    [
        45.482611, -117.954811, 
        'House District 58', 'Discription'
    ],
    [
        44.689700, -120.891500, 
        'House District 59', 'Discription'
    ],
    [
        43.350331, -118.463981, 
        'House District 60', 'Discription'
    ]];