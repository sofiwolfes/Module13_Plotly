Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotSofi", [{x: [2, 7, 9], y: [27, 70, 35]}]);

// SKILL DRILL 13.1.3

// Drinks: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]
// Percent of Drinks Ordered: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

var drinks = {
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Nonalcoholic Drinks Ordered",
    xaxis: {title: "Nonalcoholic Drinks"},
    yaxis: {title: "% of the total number of orders"}
};

Plotly.newPlot("plotDrinks", [drinks], layout);


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var populationNum = cities.map(function(popu){
    return popu.population;
});
console.log(populationNum);


