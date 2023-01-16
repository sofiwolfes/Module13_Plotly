const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));


// SKILL DRILL 13.3.1

// Use map() to print only the latitude and longitude coordinates 
//of each SpaceX launch station.

