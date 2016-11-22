/*
var koDistrictArray = function(lat, lng, title) {
    	this.koDistrictArray.push(map.districtArray);
    	this.lat = lat;
    	this.lng = lng;
    	this.title = ko.observableArray(districtArray[2]);
    	//this.discription
    };
    */

var ViewModel = function() {
    var self = this;
    self.koDistrictArray = ko.observableArray();

    districtArray.forEach(function(district) {
        self.koDistrictArray.push(district);
    });

    self.selectMarker = function(koDistrictArray) {
    	google.maps.event.trigger(marker, "click") 
    };






};


var myViewModel = new ViewModel();

ko.applyBindings(myViewModel);
