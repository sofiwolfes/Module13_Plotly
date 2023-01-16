/**
 * Generates an array of random numbers between 0 and 9
 * @param {integer} n: length of array to generate
 */
function randomNumbersBetween0and9(n) {
    var randomNumberArray = [];
    for (var i = 0; i < n; i++) {
      var randomNumber = Math.floor(Math.random() * 10);
      randomNumberArray.push(randomNumber);
    }
    return randomNumberArray;
  }

// Create our first trace
var trace0 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumbersBetween0and9(5),
    type: "scatter"
  };
  
// TODO: Create a second trace
var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// The data array 
var data = [trace0, trace1];
  
// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);