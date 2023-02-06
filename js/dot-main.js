mapboxgl.accessToken =
        "pk.eyJ1Ijoia3lsZXVuZzF1dyIsImEiOiJjbGFmcWs3bmgwaWt0M3VwYndydjU5Z3hyIn0.VB46m97-U_Aoz5My7xuMwg";
let map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/dark-v11", // style URL
    center: [-100, 40], // starting position [lng, lat]
    zoom: 4.3, // starting zoom
    projection: "albers"
});

const grades = [1000, 5000, 10000, 15000, 20000],
    colors = ["rgb(169, 204, 227)", "rgb(84, 153, 199)", "rgb(36, 113, 163 )", "rgb(26, 82, 118)", "rgb(20, 143, 119)"],
    radii = [5, 10, 15, 20, 25];


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
        [grades[3], radii[3]],
        [grades[4], radii[4]],
        ],
    },
    "circle-color": {
        property: "cases",
        stops: [
        [grades[0], colors[0]],
        [grades[1], colors[1]],
        [grades[2], colors[2]],
        [grades[3], colors[3]],
        [grades[4], colors[4]],
        ],
    },
    "circle-stroke-color": "white",
    "circle-stroke-width": 1,
    "circle-opacity": 0.6,
    },
});

// click on tree to view cases in a popup
map.on("click", "case-point", (event) => {
    new mapboxgl.Popup()
    .setLngLat(event.features[0].geometry.coordinates)
    .setHTML(
        `<strong>State:</strong> ${event.features[0].properties.state}<br>` +
        `<strong>County:</strong> ${event.features[0].properties.county}<br>` +
        `<strong>Deaths:</strong> ${event.features[0].properties.deaths}<br>` +
        `<strong>Cases:</strong> ${event.features[0].properties.cases}<br>`
    )
    .addTo(map);
});

const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">NYTimes</a>, <a href="https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS</a></p>';

// combine all the html codes.
legend.innerHTML = labels.join("") + source;
});

// create legend object, it will anchor to the div element with the id legend.
const legend = document.getElementById("legend");

//set up legend grades and labels
var labels = ["<strong>Covid-19 Cases (Cases)</strong>"],
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