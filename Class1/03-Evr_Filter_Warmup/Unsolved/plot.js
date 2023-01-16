var titles = topMovies.map(movies => movies.title);
console.log(titles);

var ratings = topMovies.map(movies => movies.metascore);
console.log(ratings);

// Create the trace.
var trace = {
    x: titles,
    y: ratings,
    type: "bar"
  };
  
// Create the data array for our plot
var data = [trace];
  
// Define our plot layout
var layout = {
    title: "The highest critically acclaimed movies",
    xaxis: { title: "Title" },
    yaxis: { title: "Metascore (Critic) Rating"}
};
  
// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);