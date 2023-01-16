console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(god => god.pair),
    y: data.map(god => god.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(god => god.pair),
    y: data.map(god => god.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    type: "bar"
};

// Combining both traces
var data = [trace1, trace2];

// Apply the feature barmode = "group" to the layout
// (refer to Plotly documentation for bar charts)
var layout = {
    title: "Greek vs Roman Gods Search Results",
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);