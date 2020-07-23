var mymap = L.map('mapid').setView([54.526693, -3.017289], 13);

var standard = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/outdoors-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZGF2bzE5ODciLCJhIjoiY2tjMGY1MDVnMWoxaDM0bXg1dTc0c3BicCJ9.btpO9V_p3D1_OS6cfhml2Q'
        }).addTo(mymap);

        

// Helvellyn marker and popup
var helvellyn = L.marker([54.526693, -3.017289]).bindPopup('Helvellyn Summit').addTo(mymap);
// Striding edge marker and pop up                
var striding = L.marker([54.525425, -3.008422]).bindPopup('Striding edge').addTo(mymap);
 // Swirral Edge marker and popup               
 var swirral = L.marker([54.529809, -3.016631]).bindPopup('Swirral edge').addTo(mymap);

 var pointsOfInterest = L.layerGroup([helvellyn, striding, swirral]); 