// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -98.5], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    // SFO coordinates
    [37.6181, -122.3786],
    // DEN coordinates
    [39.8533, -104.6756],
    // AUS Coordinates
    [30.1944, -97.67],
    // STL Coordinates
    [38.7472, -90.3614],
    // YYZ Coordinates (Toronto)
    [43.6775, -79.6308],
    // JFK coordinates
    [40.6442, -73.7822]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: "5 10",
    opacity: 0.5
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);