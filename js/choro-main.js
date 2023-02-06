mapboxgl.accessToken =
        'pk.eyJ1Ijoia3lsZXVuZzF1dyIsImEiOiJjbGFmcWs3bmgwaWt0M3VwYndydjU5Z3hyIn0.VB46m97-U_Aoz5My7xuMwg';

const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/dark-v11', // style URL
zoom: 4, // starting zoom
center: [-100, 40], // starting center
projection: 'albers'
});

async function geojsonFetch() {
// other operations
let response = await fetch('assets/us-covid-2020-rates.geojson');
let countyData = await response.json();

map.on('load', function loadingData() {
    // add layer
    // add legend
    map.addSource('countyData', {
    type: 'geojson',
    data: countyData,
    });

    map.addLayer({
    id: 'countyData-layer',
    type: 'fill',
    source: 'countyData',
    paint: {
        'fill-color': [
        'step',
        ['get', 'rates'],
        '#FFEDA0', // stop_output_0
        10, // stop_input_0
        '#FED976', // stop_output_1
        20, // stop_input_1
        '#FEB24C', // stop_output_2
        30, // stop_input_2
        '#FD8D3C', // stop_output_3
        40, // stop_input_3
        '#FC4E2A', // stop_output_4
        50, // stop_input_4
        '#E31A1C', // stop_output_5
        60, // stop_input_5
        '#BD0026', // stop_output_6
        70, // stop_input_6
        '#800026', // stop_output_7
        80, // stop_input_7
        '#9B59B6', // stop_output_8
        90, // stop_input_8
        '#76448A', // stop_output_9
        100, // stop_input_9
        '#4A235A', // stop_output_10
        ],
        'fill-outline-color': '#BBBBBB',
        'fill-opacity': 0.7,
    },
    });

    const layers = [
    '0-9',
    '10-19',
    '20-29',
    '30-39',
    '40-49',
    '50-59',
    '60-69',
    '70-79',
    '80-89',
    '90-99',
    '100 and more',
    ];
    const colors = [
    '#FFEDA070',
    '#FED97670',
    '#FEB24C70',
    '#FD8D3C70',
    '#FC4E2A70',
    '#E31A1C70',
    '#BD002670',
    '#80002670',
    '#9B59B670',
    '#76448A70',
    '#4A235A70',
    ];

    const legend = document.getElementById('legend');
    legend.innerHTML =
    '<b>Covid-19 Rate<br>(Cases / 1000 people)</b><br><br>';

    layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
    });

    const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">NYTimes</a>, <a href="https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS</a></p>';
    legend.innerHTML += source;

    map.on('mousemove', ({ point }) => {
    const county = map.queryRenderedFeatures(point, {
        layers: ['countyData-layer'],
    });
    document.getElementById('text-description').innerHTML =
        county.length
        ? `<h3>${county[0].properties.county}</h3><p><strong><em>${county[0].properties.rates}</strong> covid-19 cases per thousand residents</em></p>`
        : `<p>Hover over a county!</p>`;
    });
});
}

geojsonFetch();