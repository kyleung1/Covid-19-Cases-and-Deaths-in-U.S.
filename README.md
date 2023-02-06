# Covid-19 Cases and Deaths in U.S. Mapped

## Introduction

The Covid-19 pandemic was devastating across the United States in 2020. There were no vaccines at the time for the illness. The New York Times provided data of the covid-19 cases, deaths, and various other data related to the statistics and the geographical location. Along with the 2018 ACS 5 year population data I was able to produce a choropleth map of the covid-19 rate and a proportional symbols map of the covid-19 cases. The goal of this project was to reveal areas where the pandemic affected the most in the United States.

## Links

### Map 1: Choropleth map of covid-19 rates in the U.S. in 2020

[Click here for map 1](https://kyleung1.github.io/Covid-19-Cases-and-Deaths-in-US/map1.html)

### Map 2: Proportional Symbols map of covid-19 cases in the U.S. in 2020

[Click here for map 2](https://kyleung1.github.io/Covid-19-Cases-and-Deaths-in-US/map2.html)

## Screenshots

![choropleth map](https://raw.githubusercontent.com/kyleung1/Covid-19-Cases-and-Deaths-in-US/main/img/choro2.PNG)
| When hovering over a county
![choropleth map function](https://raw.githubusercontent.com/kyleung1/Covid-19-Cases-and-Deaths-in-US/main/img/choro1.PNG)

![proportional symbols map](https://raw.githubusercontent.com/kyleung1/Covid-19-Cases-and-Deaths-in-US/main/img/prop2.PNG)
| When clicking on proportional symbol
![proportional symbols map function](https://raw.githubusercontent.com/kyleung1/Covid-19-Cases-and-Deaths-in-US/main/img/prop1.PNG)

## Functions

The main function in the covid-19 rates choropleth map is hovering over a county. When the user hovers over a county, information about the county such as the name and the rate appears. The rate that is shown is calculated as covid-19 cases per 1000 people there were.

The main function in the covid-19 cases proportional symbols map is clicking over a circle in the proportional symbol. Information such as the name of the state, name of the county, deaths and cases of covid-19 are displayed when a circle is clicked.

## Libaries

Library used is mapboxgljs.
Some other resources I used were [mapshaper](https://mapshaper.org/) to convert the shapefiles to a json file

## Data Sources

- [NYTimes](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv)
- [2018 ACS 5 year population estimates](https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true)
- [U.S. Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html)

## Credit

Kyle Leung,
Bo Zhao,
Steven Bao

## Acknowledgement

Thank you Professor Bo Zhao and Steven Bao for designing this lab and helping me with questions. Thank you to NYTimes, ACS, and U.S. Census bureau for providing open source data for me to use.
