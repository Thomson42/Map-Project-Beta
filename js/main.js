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
