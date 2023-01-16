const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

d3.json("samples.json").then(function(data){
    console.log(data);
});

researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};


// Object.entries()
console.log(Object.entries(researcher1));

// forEach()
Object.entries(researcher1).forEach(([first, second]) => console.log(first
    + ": " + second));

// SKILL DRILL:
// Use Object.entries() and forEach() to print all the metadata 
// of the first person in the samples.json() dataset (ID 940).

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

d3.json("samples.json").then(function(data){
    secondPerson = data.metadata[1];
    Object.entries(secondPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});
