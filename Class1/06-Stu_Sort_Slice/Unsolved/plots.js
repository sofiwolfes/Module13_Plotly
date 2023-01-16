// Sort the data in descending order by Greek search results
var sortByGreekSearch = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults);

console.log("Greek search results (desc)", sortByGreekSearch)

// Slice the first 10 objects for plotting
var firstTen = sortByGreekSearch.slice(0,10);

console.log("First 10 gods", firstTen);

// Reverse the array (to accommodate Plotly's defaults)
var firstTenAsc = firstTen.reverse()

console.log("First 10 gods in ascendent order", firstTenAsc);

// Trace1 for the Greek Data
var trace1 = {
    x: firstTenAsc.map(god => god.greekSearchResults),
    y: firstTenAsc.map(god => god.greekName),
    type: "bar",
    orientation: "h"

};

// data
var data = [trace1];

// Apply a layout
var layout = {
    title: "Most searched Greek Gods",
    xaxis: { title: "Number of Searches"},
    yaxis: { title: "Greek Gods"}
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

