const url = "https://api.spacexdata.com/v2/launchpads";

//const data = d3.json(url);
//console.log(data);


d3.json(url).then(
    function(data){
        console.log(data[0]["plaidid"]);
    });