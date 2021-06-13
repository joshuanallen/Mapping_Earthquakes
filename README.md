# Mapping_Earthquakes
Using JS to render and analyze earthquake data

## Purpose
The purpose of this repository is to show earthquake from the last 7 days from the USGS layered on a map of the techtonic plates. The earthquake and plate techtonic data is extracted using d3 and geoJSON and layered using LeafletJS onto a map from the OpenMaps API.

### Resources
Data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

Tools: JavaScript, HTML, CSS, d3, leafletJS, OpenMapsAPI, VS Code

### Landing Page funcitonality
The landing page generated in the index.html file allows for togglable layers for all earthquake data in the last 7 days, earthquakes above 4.5 magnitude in the last 7 days, and a layer that outlines the tectonic plates.

Additionally there are 3 types of base map options to choose from: Street Map, Satellite view with streets, and a dark-mode map version.
