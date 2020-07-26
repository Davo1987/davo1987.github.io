var mymap = L.map('mapid').setView([54.406193, -3.054618], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF2bzE5ODciLCJhIjoiY2tjMGY1MDVnMWoxaDM0bXg1dTc0c3BicCJ9.btpO9V_p3D1_OS6cfhml2Q'
}).addTo(mymap);
// Hodge close quarry
var hodgeClose = L.marker([54.406193, -3.054618]).bindPopup('Hodge Close quarry').addTo(mymap);
// Cathedral quarry
var cathedral = L.marker([54.416064, -3.058785]).bindPopup('Cathedral quarry').addTo(mymap);

// create a red polyline from an array of LatLng points
var latlngs = [
    [54.421257, -3.056081],
    [54.418885, -3.057401],
    [54.416956, -3.055620]
];
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(mymap);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());