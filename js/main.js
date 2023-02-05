mapboxgl.accessToken =
        "pk.eyJ1Ijoia3lsZXVuZzF1dyIsImEiOiJjbGFmcWs3bmgwaWt0M3VwYndydjU5Z3hyIn0.VB46m97-U_Aoz5My7xuMwg";
let map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-100, 40], // starting position [lng, lat]
    zoom: 4.3, // starting zoom
    projection: "albers"
});

const grades = [2000, 4000, 6000],
    colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
    radii = [5, 15, 20];


map.on("load", () => {
map.addSource("cases", {
    type: "geojson",
    data: "assets/us-covid-2020-counts.geojson",
});

map.addLayer({
    id: "case-point",
    type: "circle",
    source: "cases",
    paint: {
    // increase the radii of the circle as the zoom level and dbh value increases
    "circle-radius": {
        property: "cases",
        stops: [
        [grades[0], radii[0]],
        [grades[1], radii[1]],
        [grades[2], radii[2]],
        ],
    },
    "circle-color": {
        property: "cases",
        stops: [
        [grades[0], colors[0]],
        [grades[1], colors[1]],
        [grades[2], colors[2]],
        ],
    },
    "circle-stroke-color": "white",
    "circle-stroke-width": 1,
    "circle-opacity": 0.6,
    },
});

// click on tree to view magnitude in a popup
map.on("click", "case-point", (event) => {
    new mapboxgl.Popup()
    .setLngLat(event.features[0].geometry.coordinates)
    .setHTML(
        `<strong>Magnitude:</strong> ${event.features[0].properties.cases}`
    )
    .addTo(map);
});

const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://earthquake.usgs.gov/earthquakes/">USGS</a></p>';

// combine all the html codes.
legend.innerHTML = labels.join("") + source;
});

// create legend object, it will anchor to the div element with the id legend.
const legend = document.getElementById("legend");

//set up legend grades and labels
var labels = ["<strong>Size</strong>"],
vbreak;
//iterate through grades and create a scaled circle and label for each
for (var i = 0; i < grades.length; i++) {
vbreak = grades[i];
// you need to manually adjust the radius of each dot on the legend
// in order to make sure the legend can be properly referred to the dot on the map.
dot_radius = 2 * radii[i];
labels.push(
    '<p class="break"><i class="dot" style="background:' +
    colors[i] +
    "; width: " +
    dot_radius +
    "px; height: " +
    dot_radius +
    'px; "></i> <span class="dot-label" style="top: ' +
    dot_radius / 2 +
    'px;">' +
    vbreak +
    "</span></p>"
);
}