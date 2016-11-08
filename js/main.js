var ViewModel = function() {
    var self = this;
    self.districtArray = ko.observableArray([]);
    var dist1 = {lat: 42.879857, lng: -124.176448};
    var dist2 = {lat: 42.889406, lng: -123.187681};
    var dist3 = {lat: 42.267278, lng: -123.484847};
    var dist4 = {lat: 42.395083, lng: -123.105353};
    var dist5 = {lat: 42.174025, lng: -122.759428};
    var dist6 = {lat: 42.335308, lng: -122.854325};
    var dist7 = {lat: 43.517622, lng: -122.792728};
    var dist8 = {lat: 43.986553, lng: -123.388908};
    var dist9 = {lat: 43.825914, lng: -123.956883};
    var dist10 = {lat: 44.792453, lng: -123.855322};
    var dist11 = {lat: 44.190392, lng: -122.986928};
    var dist12 = {lat: 44.052428, lng: -122.987669};
    var dist13 = {lat: 44.079347, lng: -123.093053};
    var dist14 = {lat: 44.200686, lng: -123.189247};
    var dist15 = {lat: 44.596342, lng: -123.093844};
    var dist16 = {lat: 44.572186, lng: -123.314939};
    var dist17 = {lat: 44.526928, lng: -122.333650};
    var dist18 = {lat: 45.024006, lng: -122.965128};
    var dist19 = {lat: 44.855664, lng: -122.979881};
    var dist20 = {lat: 44.881706, lng: -123.131458};
    var dist21 = {lat: 44.933072, lng: -123.003756};
    var dist22 = {lat: 45.041217, lng: -122.978322};
    var dist23 = {lat: 44.693831, lng: -123.460050};
    var dist24 = {lat: 45.327094, lng: -123.198294};
    var dist25 = {lat: 45.148097, lng: -122.968161};
    var dist26 = {lat: 45.350456, lng: -122.857914};
    var dist27 = {lat: 45.467478, lng: -122.791872};
    var dist28 = {lat: 45.476458, lng: -122.859597};
    var dist29 = {lat: 45.531717, lng: -123.064019};
    var dist30 = {lat: 45.569125, lng: -122.966467};
    var dist31 = {lat: 45.829794, lng: -123.043714};
    var dist32 = {lat: 45.749375, lng: -123.694558};
    var dist33 = {lat: 45.533425, lng: -122.770697};
    var dist34 = {lat: 45.503314, lng: -122.825014};
    var dist35 = {lat: 45.425942, lng: -122.772400};
    var dist36 = {lat: 45.495067, lng: -122.702092};
    var dist37 = {lat: 45.345186, lng: -122.705889};
    var dist38 = {lat: 45.425439, lng: -122.698467};
    var dist39 = {lat: 45.298264, lng: -122.470247};
    var dist40 = {lat: 45.344147, lng: -122.596736};
    var dist41 = {lat: 45.437686, lng: -122.631142};
    var dist42 = {lat: 45.504475, lng: -122.634708};
    var dist43 = {lat: 45.553333, lng: -122.659706};
    var dist44 = {lat: 45.591361, lng: -122.669567};
    var dist45 = {lat: 45.538653, lng: -122.587208};
    var dist46 = {lat: 45.501336, lng: -122.583608};
    var dist47 = {lat: 45.522306, lng: -122.583556};
    var dist48 = {lat: 45.446475, lng: -122.569928};
    var dist49 = {lat: 45.539064, lng: -122.445633};
    var dist50 = {lat: 45.488328, lng: -122.437292};
    var dist51 = {lat: 45.442700, lng: -122.471672};
    var dist52 = {lat: 45.393975, lng: -121.913583};
    var dist53 = {lat: 43.925586, lng: -121.514297};
    var dist54 = {lat: 44.040094, lng: -121.317767};
    var dist55 = {lat: 43.114539, lng: -120.952533};
    var dist56 = {lat: 42.133272, lng: -121.352069};
    var dist57 = {lat: 45.393144, lng: -120.129728};
    var dist58 = {lat: 45.482611, lng: -117.954811};
    var dist59 = {lat: 44.675208, lng: -122.484847};
    var dist60 = {lat: 43.350331, lng: -118.463981};

	districtArray.push(dist1, dist2, dist3, dist4, dist5, dist6, dist7, dist8, dist9, dist10, dist11, dist12, dist13, dist14, 
    	dist15, dist16, dist17, dist18, dist19, dist20, dist21, dist22, dist23, dist24, dist25, dist26, dist27, dist28, dist29, 
    	dist30, dist31, dist32, dist33, dist34, dist35, dist36, dist37, dist38, dist39, dist40, dist41, dist42, dist43, dist44, 
    	dist45, dist46, dist47, dist48, dist49, dist50, dist51, dist52, dist53, dist54, dist55, dist56, dist57, dist58, dist59, 
    	dist60);
	self.districtNames = [
		{districtName: "House District 1"},
		{districtName: "House District 2"},
		{districtName: "House District 3"},
		{districtName: "House District 4"},
		{districtName: "House District 5"},
		{districtName: "House District 6"},
		{districtName: "House District 7"},
		{districtName: "House District 8"},
		{districtName: "House District 9"},
		{districtName: "House District 10"},
		{districtName: "House District 11"},
		{districtName: "House District 12"},
		{districtName: "House District 13"},
		{districtName: "House District 14"},
		{districtName: "House District 15"},
		{districtName: "House District 16"},
		{districtName: "House District 17"},
		{districtName: "House District 18"},
		{districtName: "House District 19"},
		{districtName: "House District 20"},
		{districtName: "House District 21"},
		{districtName: "House District 22"},
		{districtName: "House District 23"},
		{districtName: "House District 24"},
		{districtName: "House District 25"},
		{districtName: "House District 26"},
		{districtName: "House District 27"},
		{districtName: "House District 28"},
		{districtName: "House District 29"},
		{districtName: "House District 30"},
		{districtName: "House District 31"},
		{districtName: "House District 32"},
		{districtName: "House District 33"},
		{districtName: "House District 34"},
		{districtName: "House District 35"},
		{districtName: "House District 36"},
		{districtName: "House District 37"},
		{districtName: "House District 38"},
		{districtName: "House District 39"},
		{districtName: "House District 40"},
		{districtName: "House District 41"},
		{districtName: "House District 42"},
		{districtName: "House District 43"},
		{districtName: "House District 44"},
		{districtName: "House District 45"},
		{districtName: "House District 46"},
		{districtName: "House District 47"},
		{districtName: "House District 48"},
		{districtName: "House District 49"},
		{districtName: "House District 50"},
		{districtName: "House District 51"},
		{districtName: "House District 52"},
		{districtName: "House District 53"},
		{districtName: "House District 54"},
		{districtName: "House District 55"},
		{districtName: "House District 56"},
		{districtName: "House District 57"},
		{districtName: "House District 58"},
		{districtName: "House District 59"},
		{districtName: "House District 60"}
	];


    // test
    

    // Create a list view with location items
    // this.myLocations = ko. observableArray(locations);

    // iterate over the locations array, with for example the forEach method
    // to create location objects, if you use a Location constructor

};


var myViewModel = new ViewModel();

ko.applyBindings(myViewModel);
