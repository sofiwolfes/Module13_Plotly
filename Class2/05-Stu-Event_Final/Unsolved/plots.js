// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels, using data.us object
var provider = Object.keys(data.us);

// Create function to display the default plot
function init(){
  var data = [{
    values: us,
    labels: provider,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
};

// On change to the DOM, call another function getData() using D3
d3.selectAll("#selDataset").on("change", getData);

// Create getData() function called by DOM changes
function getData(){ 
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset === "us") {
    data = us;
  }

  if (dataset === "uk") {
    data = uk;
  }

  if (dataset === "canada") {
    data = canada;
  }

  // Call function to update the chart:
  updatePlotly(data);
   } //end of getData()

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

// call init() to display default plot
init();