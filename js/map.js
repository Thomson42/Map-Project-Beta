var map;
var infoWindow = null;
var bounds;
var markers = [];


var src = 'https://sites.google.com/site/votercompanion/HouseDistricts.kmz?';

function initMap() {
    bounds = new google.maps.LatLngBounds();
    // Create a styles array to use with the map.
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.281712,
            lng: -120.571651
        },
        zoom: 7,
     //   styles: styles,
        mapTypeControl: false
    });
    // Style the markers a bit. This will be our listing marker icon.

    
    setMarkers(map, districtArray);
    ko.applyBindings(new ViewModel());
    loadKmlLayer(src, map);
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
			visible: true,
			map: map,
			id: i
		});

        districtArray.marker = marker;
        loadInfoWindow(marker);
	}
};
function toggleBounce(marker) {
	marker.setAnimation(google.maps.Animation.BOUNCE);
	window.setTimeout(function() {
		marker.setAnimation(null);
	}, 1400);
};
function loadInfoWindow(marker) {
    google.maps.event.addListener(marker, 'click', function() {
    // where I have added .html to the marker object.
    	ViewModel.currentLocation(marker);
        infoWindow.setContent(this.html);
        infoWindow.open(map, this);
    });

  };
function selectInfoWindow(marker) {
    google.maps.event.trigger(marker, 'click', function() {
        google.maps.infoWindow.setContent(this.html);
        google.maps.infoWindow.open(map, this);
    });
};

function loadKmlLayer(src, map) {
	var kmlLayer = new google.maps.KmlLayer(src, {
	   preserveViewport: false,
	   map: map,
       suppressInfoWindows: true,
       scaleControl: false,
       zoomControl: false,
       clickable: false
    });

};
var districtArray = [
	{
		lat: 42.879857, lng: -124.176448, 
		title:'House District 01', 
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
            '</div>',
        representative: 'Wayne Krieger'
	},
	{
    	lat: 42.889406, lng: -123.18768, 
    	title:'House District 02',
        html:'Discription2',
        representative: 'Dallas Heard'
    },
    {
        lat: 42.267278, lng: -123.484847, 
        title:'House District 03',
        html:'Discription3',
        representative: 'Carl Wilson'
    },
    {
        lat: 42.395083, lng: -123.105353, 
        title:'House District 04',
        html:'Discription4',
        representative: 'Duane Stark'
    },
    {
        lat: 42.174025, lng: -122.759428, 
        title:'House District 05',
        html:'Discription5',
        representative: 'Peter Buckley'
    },
    {
        lat: 42.335308, lng: -122.854325, 
        title:'House District 06',
        html:'Discription6',
        representative: 'Sal Esquivel'
    },
    {
        lat: 43.517622, lng: -122.792728, 
        title:'House District 07',
        html:'Discription7',
        representative: 'Cedric Hayden'
    },
    {
        lat: 43.986553, lng: -123.388908, 
        title:'House District 08',
        html:'Discription8',
        representative: 'Paul Holvey'
    },
    {
        lat: 43.825914, lng: -123.956883, 
        title:'House District 09',
        html:'Discription9',
        representative: 'Caddy McKeown'
    },
    {
        lat: 44.792453, lng: -123.855322, 
        title:'House District 10',
        html:'Discription10',
        representative: 'David Gomberg'
    },
    {
        lat: 44.190392, lng: -122.986928, 
        title:'House District 11',
        html:'Discription11',
        representative: 'Phil Barnhart'
    },
    {
        lat: 44.052428, lng: -122.987669, 
        title:'House District 12',
        html:'Discription12',
        representative: 'John Lively'
    },
    {
        lat: 44.079347, lng: -123.093053, 
        title:'House District 13',
        html:'Discription13',
        representative: 'Nancy Nathanson'
    },
    {
        lat: 44.200686, lng: -123.189247, 
        title:'House District 14',
        html:'Discription14',
        representative: 'Val Hoyle'
    },
    {
        lat: 44.596342, lng: -123.093844, 
        title:'House District 15',
        html:'Discription15',
        representative: 'Andy Olson'
    },
    {
        lat: 44.572186, lng: -123.314939, 
        title:'House District 16',
        html:'Discription16',
        representative: 'Dan Rayfield'
    },
    {
        lat: 44.526928, lng: -122.333650, 
        title:'House District 17',
        html:'Discription17',
        representative: 'Sherrie Sprenger'
    },
    {
        lat: 45.064225, lng: -122.363769, 
        title:'House District 18',
        html:'Discription18',
        representative: 'Vic Gilliam'
    },
    {
        lat: 44.855664, lng: -122.979881, 
        title:'House District 19',
        html:'Discription19',
        representative: 'Jodi Hack'
    },
    {
        lat: 44.881706, lng: -123.131458, 
        title:'House District 20',
        html:'Discription20',
        representative: 'Paul Evans'
    },
    {
        lat: 44.933072, lng: -123.003756, 
        title:'House District 21',
        html:'Discription21',
        representative: 'Brian Clem'
    },
    {
        lat: 45.041217, lng: -122.978322, 
        title:'House District 22',
        html:'Discription22',
        representative: 'Betty Komp'
    },
    {
        lat: 44.693831, lng: -123.460050, 
        title:'House District 23',
        html:'Discription23',
        representative: 'Mike Nearman'
    },
    {
        lat: 45.327094, lng: -123.198294, 
        title:'House District 24',
        html:'Discription24',
        representative: 'Jim Weidner'
    },
    {
        lat: 45.148097, lng: -122.968161, 
        title:'House District 25',
        html:'Discription25',
        representative: 'Bill Post'
    },
    {
        lat: 45.350456, lng: -122.857914, 
        title:'House District 26',
        html:'Discription26',
        representative: 'John Davis'
    },
    {
        lat: 45.467478, lng: -122.791872, 
        title:'House District 27',
        html:'Discription27',
        representative: 'Tobias Read'
    },
    {
        lat: 45.476458, lng: -122.859597, 
        title:'House District 28',
        html:'Discription28',
        representative: 'Jeff Barker'
    },
    {
        lat: 45.531717, lng: -123.064019, 
        title:'House District 29',
        html:'Discription29',
        representative: 'Susan McLain'
    },
    {
        lat: 45.569125, lng: -122.966467, 
        title:'House District 30',
        html:'Discription30',
        representative: 'Joe Gallegos'
    },
    {
        lat: 45.829794, lng: -123.043714, 
        title:'House District 31',
        html:'Discription31',
        representative: 'Brad Witt'
    },
    {
        lat: 45.749375, lng: -123.694558, 
        title:'House District 32',
        html:'Discription32',
        representative: 'Deborah Boone'
    },
    {
        lat: 45.533425, lng: -122.770697, 
        title:'House District 33',
        html:'Discription33',
        representative: 'Mitch Greenlick'
    },
    {
        lat: 45.503314, lng: -122.825014, 
        title:'House District 34',
        html:'Discription34',
        representative: 'Ken Helm'
    },
    {
        lat: 45.425942, lng: -122.772400, 
        title:'House District 35',
        html:'Discription35',
        representative: 'Margaret Doherty'
    },
    {
        lat: 45.495067, lng: -122.702092, 
        title:'House District 36',
        html:'Discription36',
        representative: 'Jennifer Williamson'
    },
    {
        lat: 45.345186, lng: -122.705889, 
        title:'House District 37',
        html:'Discription37',
        representative: 'Julie Parrish'
    },
    {
        lat: 45.425439, lng: -122.698467, 
        title:'House District 38',
        html:'Discription38',
        representative: 'Ann Lininger'
    },
    {
        lat: 45.298264, lng: -122.470247, 
        title:'House District 39',
        html:'Discription39',
        representative: 'Bill Kennemer'
    },
    {
        lat: 45.344147, lng: -122.596736, 
        title:'House District 40',
        html:'Discription40',
        representative: 'Brent Barton'
    },
    {
        lat: 45.437686, lng: -122.631142, 
        title:'House District 41',
        html:'Discription41',
        representative: 'Kathleen Taylor'
    },
    {
        lat: 45.504475, lng: -122.634708, 
        title:'House District 42',
        html:'Discription42',
        representative: 'Rob Nosse'
    },
    {
        lat: 45.553333, lng: -122.659706, 
        title:'House District 43',
        html:'Discription43',
        representative: 'Lew Frederick'
    },
    {
        lat: 45.591361, lng: -122.669567, 
        title:'House District 44',
        html:'Discription44',
        representative: 'Tina Kotek'
    },
    {
        lat: 45.538653, lng: -122.587208, 
        title:'House District 45',
        html:'Discription45',
        representative: 'Barbara Smith Warner'
    },
    {
        lat: 45.501336, lng: -122.583608, 
        title:'House District 46',
        html:'Discription46',
        representative: 'Alissa Keny-Guyer'
    },
    {
        lat: 45.522306, lng: -122.506169, 
        title:'House District 47',
        html:'Discription47',
        representative: 'Jessica Vega Pederson'
    },
    {
        lat: 45.446475, lng: -122.569928, 
        title:'House District 48',
        html:'Discription48',
        representative: 'Jeff Reardon'
    },
    {
        lat: 45.539064, lng: -122.445633, 
        title:'House District 49',
        html:'Discription49',
        representative: 'Chris Gorsek'
    },
    {
        lat: 45.488328, lng: -122.437292, 
        title:'House District 50',
        html:'Discription50',
        representative: 'Carla Piluso'
    },
    {
        lat: 45.442700, lng: -122.471672, 
        title:'House District 51',
        html:'Discription51',
        representative: 'Shemia Fagan'
    },
    {
        lat: 45.393975, lng: -121.913583, 
        title:'House District 52',
        html:'Discription52',
        representative: 'Mark Johnson'
    },
    {
        lat: 43.925586, lng: -121.514297, 
        title:'House District 53',
        html:'Discription53',
        representative: 'Gene Whisnant'
    },
    {
        lat: 44.040094, lng: -121.317767, 
        title:'House District 54',
        html:'Discription54',
        representative: 'Knute Buehler'
    },
    {
        lat: 43.114539, lng: -120.952533, 
        title:'House District 55',
        html:'Discription55',
        representative: 'Mike McLane'
    },
    {
        lat: 42.133272, lng: -121.352069, 
        title:'House District 56',
        html:'Discription56',
        representative: 'Gail Whitsett'
    },
    {
        lat: 45.393144, lng: -120.129728, 
        title:'House District 57',
        html:'Discription57',
        representative: 'Greg Smith'
    },
    {
        lat: 45.482611, lng: -117.954811, 
        title:'House District 58',
        html:'Discription58',
        representative: 'Greg Barreto'
    },
    {
        lat: 44.689700, lng: -120.891500, 
        title:'House District 59',
        html:'Discription59',
        representative: 'John Huffman'
    },
    {
        lat: 43.350331, lng: -118.463981, 
        title:'House District 60',
        html:'Discription60',
        representative: 'Cliff Bentz'
    }];

var representative = 'Oregon_House_of_Representatives';

var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ representative +'&format=json&callback=wikiCallback'
$.ajax({
  url:wikiUrl,
  //"https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAFyyWOX_kolbLF1_-4dUi7ENyLB600qFY&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS",
  //may be harmfull
  dataType: 'jsonp',
  //method: "GET",
  //data: { 
  //  address: location.title,
  //  location: "Boston"
  //}
  success: function(response) {
  	var firstResponse = response[1][0];
  	console.log(response[1][0]);
  	var infoContent = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+firstResponse+'</h1>'+'</div>';

  	for (var i = 0; i < districtArray.length; i++) {
  		articleStr = districtArray[i];
  		districtArray[i].html.replace(infoContent);
  		console.log(districtArray[1].html);
  	}
  }
//}).done(function(result) {
//  console.log(result);
//});.fail(funciton(error) {
//	alert('error message');
});

function DisplayDistrict(location) {
    var self = this;
    self.lat = location.lat;
    self.lng = location.lng;
    self.title = location.title;
    self.html = location.html;
    self.showDistrictTitle = ko.observable(true);
    self.marker = location.marker;
}

var ViewModel = function() {
    var self = this;

    self.koDistrictArray = ko.observableArray();

    districtArray.forEach(function(district) {
        var interactiveDistricts = new DisplayDistrict(district);
        self.koDistrictArray.push(interactiveDistricts);
    });
    this.currentLocation = ko.observable(this.koDistrictArray()[0]);

    self.selectMarker = function(district) {
        selectInfoWindow(district.marker);
    };
    self.query = ko.observable('');

    self.search = ko.computed(function(districts) {
        var value = self.query();

        for(var x in self.koDistrictArray()) {
          if(self.koDistrictArray()[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            //show location
            self.koDistrictArray()[x].showDistrictTitle(true);
            self.koDistrictArray()[x].marker.setVisible(true);

        } else {
            //hide location
            self.koDistrictArray()[x].showDistrictTitle(false);
            self.koDistrictArray()[x].marker.setVisible(false);
        }
      }
    });
    self.passBounce = function(district) {
        toggleBounce(district.marker);
    };

};
