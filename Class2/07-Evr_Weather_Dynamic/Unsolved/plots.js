// Submit Button handler
function handleSubmit() {
  // Step 2: @TODO: YOUR CODE HERE
  // first, we check if code from step1 is working:
  //console.log(d3.event.target); -- now we continue:
  var city_input = d3.select("#cityInput")
  //console.log(city_input.node().value);
  
  // Select the input value from the form
  city = city_input.node().value
  // clear the input value
  d3.select("#cityInput").node().value = ""

  // Build the plot with the new stock
  buildPlot(city)
}

function buildPlot(cityName) {
  //console.log(cityName);

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`

  d3.json(url).then(function(data) {
    console.log(data);

    // Step 3: @TODO: YOUR CODE HERE
    times = data.list.map(x => x.dt_txt); // get time string data
    temps = data.list.map(x => x.main.temp);; // get temp data

    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: times,
      y: temps,
      line: {
        color: "#17BECF",
      }
    };

    var plotData = [trace1];

    var layout = {
      title: `${data.city.name} 5-day forecast`,
    };

    Plotly.newPlot("plot", plotData, layout);
  })
}

// Step 1: Add event listener for submit button
// @TODO: YOUR CODE HERE
d3.select("#submit").on("click", handleSubmit);