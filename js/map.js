//Welcome to the core JavaScript code for The Voter companion website.
//This is a submitted "neighborhood map" project for Udacity's Web development course
//All comments on the exact nature of each piece of code have been made above the code in question.

//This is an error handling function referenced in src script
function googleError() {
	alert("Failed to load google maps.")
}
//initializes the origonal paramaters of the Map DOM.
function initMap() {
    bounds = new google.maps.LatLngBounds();
    // Creates the starting map view
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.281712,
            lng: -120.571651
        },
        zoom: 7,
        mapTypeControl: false
    });
    //calls the setMarkesr function so that we can combine it with the distirctArray to populate the map
    setMarkers(map, districtArray);
    //calls a new instance of the knockout ViewModel connecting the view with the modle 
    ko.applyBindings(new ViewModel());
    //creates a new webadress object and submits it to the loadKmlLayer function
    //loadKmlLayer then renders the submitted data.
    var src = 'https://sites.google.com/site/votercompanion/HouseDistricts.kmz?';
    loadKmlLayer(src, map);
    

};

function setMarkers(map, markers)    {
	for (var i = 0; i < markers.length; i++) {
	// Get the position from the location array.
		var districtArray = markers[i];
		var distPosit = new google.maps.LatLng(districtArray.lat, districtArray.lng);
		//Creats a new infoContent object designed as a placehodler infoWindow untill the AJAX can load
		var infoContent = markers[i].html = ko.observable('pending search');

		// Create a marker per location, and put into markers array.

		var marker = new google.maps.Marker({
            position: distPosit,
			title: districtArray.title,
			html: infoContent,
			rep: districtArray.representative,
			animation: google.maps.Animation.DROP,
			visible: true,
			map: map,
			id: i
		});
		infoWindow = new google.maps.InfoWindow();

        districtArray.marker = marker;
        //Adds on click bounce and infoWindow popup functionality
        marker.addListener('click', function() {
        	var marker = this;
        	loadInfoWindow(marker, infoWindow);
        	toggleBounce(marker);
        })
	}
};
//enables google map's bounce feature
function toggleBounce(marker) {
	marker.setAnimation(google.maps.Animation.BOUNCE);
	window.setTimeout(function() {
		marker.setAnimation(null);
	}, 1400);
};
 // This function populates the infowindow when the marker is clicked. We'll only allow
 // one infowindow which will open at the marker that is clicked, and populate based
 // on that markers position.
function loadInfoWindow(marker, infoWindow) {
	if (marker.html() === "pending search") {
		infoWindow.setContent(marker.html());
		infoWindow.open(map, marker);
		var representative = marker.rep;
		//creates the url string for the ajax request to submit too.
		var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+
		 representative +'&format=json&callback=wikiCallback'
		//starts the ajax request 
		$.ajax({
		  url:wikiUrl,
		  dataType: 'jsonp',

		}).done(function(response) {
			//once the ajax request is complete a new set of objects is made from the received  array
			//and added into a srtring.
			var firstResponse = response[1][0];
			var secondResponse = response[2][0];
			var webLink = response[3][0];
			var infoContent = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
	            '<h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>' + '</div>' +
	            '<div id="bodyContent">' + '<h1 id="secondHeading" class="secondHeading">'
	            + firstResponse + '</h1>' +'<p>' + secondResponse + '</p>' + '<p>Attribution:' +
	            firstResponse + ', <a href="' + webLink + '">' + webLink + '</a>' + '</div>'; 
	        marker.html(infoContent);
	        infoWindow.setContent(marker.html());
	        //The ajax request ends with a failed responce option built in, 
	        //in the event that no data is recived.
		}).fail (function(response) {
			alert("Failed to load representative data");
		});
	//an else statement that prevents redundant ajax querys 
	} else {
		infoWindow.setContent(marker.html());
		infoWindow.open(map, marker);
	}
  };
//The function that allows dom element clicks to register on the map
function selectInfoWindow(marker) {
    google.maps.event.trigger(marker, 'click', function() {
    	console.log(this.html);
        google.maps.infoWindow.setContent(this.html);
        google.maps.infoWindow.open(map, this);
    });
};
//The function that loads all the features of the KML layer src submitted.
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
//The entire array of 60 Oregon house districts
var districtArray = [
	{
		lat: 42.879857, lng: -124.176448, 
		title:'House District 01', 
        html:'Discription1',
        representative: 'Wayne_Krieger'
	},
	{
    	lat: 42.889406, lng: -123.18768, 
    	title:'House District 02',
        html:'Discription2',
        representative: 'Dallas_Heard'
    },
    {
        lat: 42.267278, lng: -123.484847, 
        title:'House District 03',
        html:'Discription3',
        representative: 'Carl_Wilson'
    },
    {
        lat: 42.395083, lng: -123.105353, 
        title:'House District 04',
        html:'Discription4',
        representative: 'Duane_Stark'
    },
    {
        lat: 42.174025, lng: -122.759428, 
        title:'House District 05',
        html:'Discription5',
        representative: 'Peter_Buckley'
    },
    {
        lat: 42.335308, lng: -122.854325, 
        title:'House District 06',
        html:'Discription6',
        representative: 'Sal_Esquivel'
    },
    {
        lat: 43.517622, lng: -122.792728, 
        title:'House District 07',
        html:'Discription7',
        representative: 'Cedric_Ross_Hayden'
    },
    {
        lat: 43.986553, lng: -123.388908, 
        title:'House District 08',
        html:'Discription8',
        representative: 'Paul_Holvey'
    },
    {
        lat: 43.825914, lng: -123.956883, 
        title:'House District 09',
        html:'Discription9',
        representative: 'Caddy_McKeown'
    },
    {
        lat: 44.792453, lng: -123.855322, 
        title:'House District 10',
        html:'Discription10',
        representative: 'David_Gomberg'
    },
    {
        lat: 44.190392, lng: -122.986928, 
        title:'House District 11',
        html:'Discription11',
        representative: 'Phil_Barnhart'
    },
    {
        lat: 44.052428, lng: -122.987669, 
        title:'House District 12',
        html:'Discription12',
        representative: 'John_Lively'
    },
    {
        lat: 44.079347, lng: -123.093053, 
        title:'House District 13',
        html:'Discription13',
        representative: 'Nancy_Nathanson'
    },
    {
        lat: 44.200686, lng: -123.189247, 
        title:'House District 14',
        html:'Discription14',
        representative: 'Val_Hoyle'
    },
    {
        lat: 44.596342, lng: -123.093844, 
        title:'House District 15',
        html:'Discription15',
        representative: 'Andy_Olson'
    },
    {
        lat: 44.572186, lng: -123.314939, 
        title:'House District 16',
        html:'Discription16',
        representative: 'Dan_Rayfield'
    },
    {
        lat: 44.526928, lng: -122.333650, 
        title:'House District 17',
        html:'Discription17',
        representative: 'Sherrie_Sprenger'
    },
    {
        lat: 45.064225, lng: -122.363769, 
        title:'House District 18',
        html:'Discription18',
        representative: 'Vic_Gilliam'
    },
    {
        lat: 44.855664, lng: -122.979881, 
        title:'House District 19',
        html:'Discription19',
        representative: 'Jodi_Hack'
    },
    {
        lat: 44.881706, lng: -123.131458, 
        title:'House District 20',
        html:'Discription20',
        representative: 'Paul_Evans'
    },
    {
        lat: 44.933072, lng: -123.003756, 
        title:'House District 21',
        html:'Discription21',
        representative: 'Brian_Clem'
    },
    {
        lat: 45.041217, lng: -122.978322, 
        title:'House District 22',
        html:'Discription22',
        representative: 'Betty_Komp'
    },
    {
        lat: 44.693831, lng: -123.460050, 
        title:'House District 23',
        html:'Discription23',
        representative: 'Mike_Nearman'
    },
    {
        lat: 45.327094, lng: -123.198294, 
        title:'House District 24',
        html:'Discription24',
        representative: 'Jim_Weidner'
    },
    {
        lat: 45.148097, lng: -122.968161, 
        title:'House District 25',
        html:'Discription25',
        representative: 'Bill_Post'
    },
    {
        lat: 45.350456, lng: -122.857914, 
        title:'House District 26',
        html:'Discription26',
        representative: 'John_Davis'
    },
    {
        lat: 45.467478, lng: -122.791872, 
        title:'House District 27',
        html:'Discription27',
        representative: 'Tobias_Read'
    },
    {
        lat: 45.476458, lng: -122.859597, 
        title:'House District 28',
        html:'Discription28',
        representative: 'Jeff_Barker'
    },
    {
        lat: 45.531717, lng: -123.064019, 
        title:'House District 29',
        html:'Discription29',
        representative: 'Susan_McLain'
    },
    {
        lat: 45.569125, lng: -122.966467, 
        title:'House District 30',
        html:'Discription30',
        representative: 'Joe_Gallegos'
    },
    {
        lat: 45.829794, lng: -123.043714, 
        title:'House District 31',
        html:'Discription31',
        representative: 'Brad_Witt'
    },
    {
        lat: 45.749375, lng: -123.694558, 
        title:'House District 32',
        html:'Discription32',
        representative: 'Deborah_Boone'
    },
    {
        lat: 45.533425, lng: -122.770697, 
        title:'House District 33',
        html:'Discription33',
        representative: 'Mitch_Greenlick'
    },
    {
        lat: 45.503314, lng: -122.825014, 
        title:'House District 34',
        html:'Discription34',
        representative: 'Ken_Helm'
    },
    {
        lat: 45.425942, lng: -122.772400, 
        title:'House District 35',
        html:'Discription35',
        representative: 'Margaret_Doherty'
    },
    {
        lat: 45.495067, lng: -122.702092, 
        title:'House District 36',
        html:'Discription36',
        representative: 'Jennifer_Williamson'
    },
    {
        lat: 45.345186, lng: -122.705889, 
        title:'House District 37',
        html:'Discription37',
        representative: 'Julie_Parrish'
    },
    {
        lat: 45.425439, lng: -122.698467, 
        title:'House District 38',
        html:'Discription38',
        representative: 'Ann_Lininger'
    },
    {
        lat: 45.298264, lng: -122.470247, 
        title:'House District 39',
        html:'Discription39',
        representative: 'Bill_Kennemer'
    },
    {
        lat: 45.344147, lng: -122.596736, 
        title:'House District 40',
        html:'Discription40',
        representative: 'Brent_Barton'
    },
    {
        lat: 45.437686, lng: -122.631142, 
        title:'House District 41',
        html:'Discription41',
        representative: 'Kathleen_Taylor'
    },
    {
        lat: 45.504475, lng: -122.634708, 
        title:'House District 42',
        html:'Discription42',
        representative: 'Rob_Nosse'
    },
    {
        lat: 45.553333, lng: -122.659706, 
        title:'House District 43',
        html:'Discription43',
        representative: 'Lew_Frederick'
    },
    {
        lat: 45.591361, lng: -122.669567, 
        title:'House District 44',
        html:'Discription44',
        representative: 'Tina_Kotek'
    },
    {
        lat: 45.538653, lng: -122.587208, 
        title:'House District 45',
        html:'Discription45',
        representative: 'Barbara_Smith_Warner'
    },
    {
        lat: 45.501336, lng: -122.583608, 
        title:'House District 46',
        html:'Discription46',
        representative: 'Alissa_Keny-Guyer'
    },
    {
        lat: 45.522306, lng: -122.506169, 
        title:'House District 47',
        html:'Discription47',
        representative: 'Jessica_Vega_Pederson'
    },
    {
        lat: 45.446475, lng: -122.569928, 
        title:'House District 48',
        html:'Discription48',
        representative: 'Jeff_Reardon'
    },
    {
        lat: 45.539064, lng: -122.445633, 
        title:'House District 49',
        html:'Discription49',
        representative: 'Chris_Gorsek'
    },
    {
        lat: 45.488328, lng: -122.437292, 
        title:'House District 50',
        html:'Discription50',
        representative: 'Carla_Piluso'
    },
    {
        lat: 45.442700, lng: -122.471672, 
        title:'House District 51',
        html:'Discription51',
        representative: 'Shemia_Fagan'
    },
    {
        lat: 45.393975, lng: -121.913583, 
        title:'House District 52',
        html:'Discription52',
        representative: 'Mark_Johnson'
    },
    {
        lat: 43.925586, lng: -121.514297, 
        title:'House District 53',
        html:'Discription53',
        representative: 'Gene_Whisnant'
    },
    {
        lat: 44.040094, lng: -121.317767, 
        title:'House District 54',
        html:'Discription54',
        representative: 'Knute_Buehler'
    },
    {
        lat: 43.114539, lng: -120.952533, 
        title:'House District 55',
        html:'Discription55',
        representative: 'Mike_McLane'
    },
    {
        lat: 42.133272, lng: -121.352069, 
        title:'House District 56',
        html:'Discription56',
        representative: 'Gail_Whitsett'
    },
    {
        lat: 45.393144, lng: -120.129728, 
        title:'House District 57',
        html:'Discription57',
        representative: 'Greg_Smith'
    },
    {
        lat: 45.482611, lng: -117.954811, 
        title:'House District 58',
        html:'Discription58',
        representative: 'Greg_Barreto'
    },
    {
        lat: 44.689700, lng: -120.891500, 
        title:'House District 59',
        html:'Discription59',
        representative: 'John_Huffman'
    },
    {
        lat: 43.350331, lng: -118.463981, 
        title:'House District 60',
        html:'Discription60',
        representative: 'Cliff_Bentz'
    }];
//A constructor function that adds the showDistrictTitle feature as a ko.observable
function DisplayDistrict(location) {
    var self = this;
    self.lat = location.lat;
    self.lng = location.lng;
    self.title = location.title;
    self.html = location.html;
    self.showDistrictTitle = ko.observable(true);
    self.marker = location.marker;
};
//the View Model that acts as an intermediary between the View and the data
var ViewModel = function() {
    var self = this;
    //objects within the CSS in need of click funtionality
    var menu = document.querySelector('#menu');
	var body = document.querySelector('body');
	var drawer = document.querySelector('#drawer');
	var map = document.querySelector('#map');
	var li = document.querySelector('li');
	//allows the hamburger icon to be clicked revealing the search menu
	menu.addEventListener('click', function(e) {
		body.classList.toggle('open');
		e.stopPropagation();
	});
	//allows the map to be clicked to close the search menu
	map.addEventListener('click', function() {
		body.classList.remove('open');
	});

    self.html = ko.observable("");
    //converts the district array into a observable array for knockout compatibility
    self.koDistrictArray = ko.observableArray();
    //creates a new array from the constructor and makes is knockout compatible
    districtArray.forEach(function(district) {
        var interactiveDistricts = new DisplayDistrict(district);
        self.koDistrictArray.push(interactiveDistricts);
    });
    this.currentLocation = ko.observable(this.koDistrictArray()[0]);
    //a ViewModle function that calls the selectInfoWindow function and allow clicks on the DOM to 
    //rely to the Map
    self.selectMarker = function(district) {
        selectInfoWindow(district.marker);
        body.classList.remove('open');
    };
    self.query = ko.observable('');

    self.search = ko.computed(function(districts) {
        var value = self.query();
        //The forloop that checks for changes in the searchbar and 
        //matches the resuts acording to the input automatically
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
    //allows mouseovers of the district titles to bounce their corresponding district.
    self.passBounce = function(district) {
        toggleBounce(district.marker);
    };

};
