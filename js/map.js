var map;
var infoWindow = null;
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
    setMarkers(map, myViewModel.koDistrictArray());
    infoWindow = new google.maps.InfoWindow({
    	content: 'Loading...'
    });

};
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.

    // This function populates the infowindow when the marker is clicked. We'll only allow
    // one infowindow which will open at the marker that is clicked, and populate based
    // on that markers position.

function setMarkers(map, markers)    {
	for (var i = 0; i < markers.length; i++) {
	// Get the position from the location array.
		var districtArray = markers[i];
		var distPosit = new google.maps.LatLng(districtArray.lat, districtArray.lng);
		// Create a marker per location, and put into markers array.

		var marker = new google.maps.Marker({
            position: distPosit,
			title: districtArray.title,
			html: districtArray.html,
			animation: google.maps.Animation.DROP,
			map: map,
			id: i
		});

        districtArray.marker = marker;

//Critical object that formats the string used in my Info Window needs photo image, title, name, and Link
	loadInfoWindow(marker);

	// Push the marker to our array of markers.
	}
	

}
/*function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}*/
function loadInfoWindow(marker) {
        google.maps.event.addListener(marker, 'click', function () {
        // where I have added .html to the marker object.
            infoWindow.setContent(this.html);
            infoWindow.open(map, this);
        });

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
	{
		lat: 42.879857, lng: -124.176448, 
		title:'House District 1', 
        html:'<div id="content">'+
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
	},
	{
    	lat: 42.889406, lng: -123.18768, 
    	title:'House District 2',
        html:'Discription2'
    },
    {
        lat: 42.267278, lng: -123.484847, 
        title:'House District 3',
        html:'Discription3'
    },
    {
        lat: 42.395083, lng: -123.105353, 
        title:'House District 4',
        html:'Discription4'
    },
    {
        lat: 42.174025, lng: -122.759428, 
        title:'House District 5',
        html:'Discription5'
    },
    {
        lat: 42.335308, lng: -122.854325, 
        title:'House District 6',
        html:'Discription6'
    },
    {
        lat: 43.517622, lng: -122.792728, 
        title:'House District 7',
        html:'Discription7'
    },
    {
        lat: 43.986553, lng: -123.388908, 
        title:'House District 8',
        html:'Discription8'
    },
    {
        lat: 43.825914, lng: -123.956883, 
        title:'House District 9',
        html:'Discription9'
    },
    {
        lat: 44.792453, lng: -123.855322, 
        title:'House District 10',
        html:'Discription10'
    },
    {
        lat: 44.190392, lng: -122.986928, 
        title:'House District 11',
        html:'Discription11'
    },
    {
        lat: 44.052428, lng: -122.987669, 
        title:'House District 12',
        html:'Discription12'
    },
    {
        lat: 44.079347, lng: -123.093053, 
        title:'House District 13',
        html:'Discription13'
    },
    {
        lat: 44.200686, lng: -123.189247, 
        title:'House District 14',
        html:'Discription14'
    },
    {
        lat: 44.596342, lng: -123.093844, 
        title:'House District 15',
        html:'Discription15'
    },
    {
        lat: 44.572186, lng: -123.314939, 
        title:'House District 16',
        html:'Discription16'
    },
    {
        lat: 44.526928, lng: -122.333650, 
        title:'House District 17',
        html:'Discription17'
    },
    {
        lat: 45.064225, lng: -122.363769, 
        title:'House District 18',
        html:'Discription18'
    },
    {
        lat: 44.855664, lng: -122.979881, 
        title:'House District 19',
        html:'Discription19'
    },
    {
        lat: 44.881706, lng: -123.131458, 
        title:'House District 20',
        html:'Discription20'
    },
    {
        lat: 44.933072, lng: -123.003756, 
        title:'House District 21',
        html:'Discription21'
    },
    {
        lat: 45.041217, lng: -122.978322, 
        title:'House District 22',
        html:'Discription22'
    },
    {
        lat: 44.693831, lng: -123.460050, 
        title:'House District 23',
        html:'Discription23'
    },
    {
        lat: 45.327094, lng: -123.198294, 
        title:'House District 24',
        html:'Discription24'
    },
    {
        lat: 45.148097, lng: -122.968161, 
        title:'House District 25',
        html:'Discription25'
    },
    {
        lat: 45.350456, lng: -122.857914, 
        title:'House District 26',
        html:'Discription26'
    },
    {
        lat: 45.467478, lng: -122.791872, 
        title:'House District 27',
        html:'Discription27'
    },
    {
        lat: 45.476458, lng: -122.859597, 
        title:'House District 28',
        html:'Discription28'
    },
    {
        lat: 45.531717, lng: -123.064019, 
        title:'House District 29',
        html:'Discription29'
    },
    {
        lat: 45.569125, lng: -122.966467, 
        title:'House District 30',
        html:'Discription30'
    },
    {
        lat: 45.829794, lng: -123.043714, 
        title:'House District 31',
        html:'Discription31'
    },
    {
        lat: 45.749375, lng: -123.694558, 
        title:'House District 32',
        html:'Discription32'
    },
    {
        lat: 45.533425, lng: -122.770697, 
        title:'House District 33',
        html:'Discription33'
    },
    {
        lat: 45.503314, lng: -122.825014, 
        title:'House District 34',
        html:'Discription34'
    },
    {
        lat: 45.425942, lng: -122.772400, 
        title:'House District 35',
        html:'Discription35'
    },
    {
        lat: 45.495067, lng: -122.702092, 
        title:'House District 36',
        html:'Discription36'
    },
    {
        lat: 45.345186, lng: -122.705889, 
        title:'House District 37',
        html:'Discription37'
    },
    {
        lat: 45.425439, lng: -122.698467, 
        title:'House District 38',
        html:'Discription38'
    },
    {
        lat: 45.298264, lng: -122.470247, 
        title:'House District 39',
        html:'Discription39'
    },
    {
        lat: 45.344147, lng: -122.596736, 
        title:'House District 40',
        html:'Discription40'
    },
    {
        lat: 45.437686, lng: -122.631142, 
        title:'House District 41',
        html:'Discription41'
    },
    {
        lat: 45.504475, lng: -122.634708, 
        title:'House District 42',
        html:'Discription42'
    },
    {
        lat: 45.553333, lng: -122.659706, 
        title:'House District 43',
        html:'Discription43'
    },
    {
        lat: 45.591361, lng: -122.669567, 
        title:'House District 44',
        html:'Discription44'
    },
    {
        lat: 45.538653, lng: -122.587208, 
        title:'House District 45',
        html:'Discription45'
    },
    {
        lat: 45.501336, lng: -122.583608, 
        title:'House District 46',
        html:'Discription46'
    },
    {
        lat: 45.522306, lng: -122.506169, 
        title:'House District 47',
        html:'Discription47'
    },
    {
        lat: 45.446475, lng: -122.569928, 
        title:'House District 48',
        html:'Discription48'
    },
    {
        lat: 45.539064, lng: -122.445633, 
        title:'House District 49',
        html:'Discription49'
    },
    {
        lat: 45.488328, lng: -122.437292, 
        title:'House District 50',
        html:'Discription50'
    },
    {
        lat: 45.442700, lng: -122.471672, 
        title:'House District 51',
        html:'Discription51'
    },
    {
        lat: 45.393975, lng: -121.913583, 
        title:'House District 52',
        html:'Discription52'
    },
    {
        lat: 43.925586, lng: -121.514297, 
        title:'House District 53',
        html:'Discription53'
    },
    {
        lat: 44.040094, lng: -121.317767, 
        title:'House District 54',
        html:'Discription54'
    },
    {
        lat: 43.114539, lng: -120.952533, 
        title:'House District 55',
        html:'Discription55'
    },
    {
        lat: 42.133272, lng: -121.352069, 
        title:'House District 56',
        html:'Discription56'
    },
    {
        lat: 45.393144, lng: -120.129728, 
        title:'House District 57',
        html:'Discription57'
    },
    {
        lat: 45.482611, lng: -117.954811, 
        title:'House District 58',
        html:'Discription58'
    },
    {
        lat: 44.689700, lng: -120.891500, 
        title:'House District 59',
        html:'Discription59'
    },
    {
        lat: 43.350331, lng: -118.463981, 
        title:'House District 60',
        html:'Discription60'
    }];