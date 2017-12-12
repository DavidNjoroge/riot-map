$(document).ready(function(){
console.log('we are live')
var searchBox = new google.maps.places.SearchBox(document.querySelector("#search"));
function loadMap() {
    var address = $("#home").text()
    var addressWork = $("#away").text()
    
    var geocoder = new google.maps.Geocoder();        
    
    geocoder.geocode( { 'address': address}, function(results, status) {
        var locati = results[0].geometry.location; 
        
        var mapOptions = {
            center:new google.maps.LatLng(locati.lat(), locati.lng()),
            zoom:12
        }
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.9, -1.3),
        map: map,
        });
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locati.lat(), locati.lng()),
        map: map,
        });
    });

 }
 searchBox.addListener('places_changed', function() {
    var locale = searchBox.getPlaces()[0];
    console.log(locale.geometry.location.lat());
    console.log(locale.geometry.location.lng());
    
    
});
google.maps.event.addDomListener(window, 'load', loadMap);
loadMap()
})