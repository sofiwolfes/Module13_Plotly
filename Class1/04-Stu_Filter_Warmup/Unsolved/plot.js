// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
function FilterCitiesPop(city) {
    return parseInt(city.Increase_from_2016) > 15000;
}

// 2. Use filter() to pass the function as its argument
var filteredCities = top15Cities.filter(FilterCitiesPop)

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var filteredCityNames = filteredCities.map(city => city.City)

//  Check your filtered cities
console.log(filteredCityNames);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var filteredCityPop = filteredCities.map(city => city.population)

//  Check the populations of your filtered cities
console.log(filteredCityPop);

// 5. Create your trace.
var trace = {
    x: filteredCityNames,
    y: filteredCityPop,
    type: "bar"
  };

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
    title: "Cities that added more than 15K people in 2017",
    xaxis: { title: "City" },
    yaxis: { title: "2017 Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);

// BONUS:

// Create a chart of the *rate* of population growth (% of 2016 population) 
// of the filtered cities.

var pop_rate = filteredCities.map(city => {

    //get the cities 2016 increase of population:
var increase = parseInt(city.Increase_from_2016);

var pop2016 = parseInt(city.population) - increase;

return 100 * increase / pop2016;
});

// Create an array that has the 2016 population for each of the filtered cities.

// Create an array for the increase in population for each of the filtered cities.

// Use a for loop to handle two different conditions, i.e., to iterate through the 
// two arrays above.

// Create a variable that calculates the rate by dividing the increase in population 
// by the 2016 population while iterating through the for loop, and then adds that 
// variable to an empty list.

// **Hint:** 

// You will need to use the `parseInt()` method to convert the populations from 
// a string to a number before you can subtract or divide them.



// Create the second trace:
var trace2 = {
    x: filteredCityNames,
    y: pop_rate,
    type: "bar"
};

// Create the data2 array for our plot:
var data2 = [trace2];

// Define our plot layout:
var layout = {
    title: "Increased population by city",
    xaxis: { title: "City" },
    yaxis: { title: "% Increase Population"}
};

// Plot the chart to a div tag with id: "rate-bar-plot":
Plotly.newPlot("rate-bar-plot", data2, layout);

