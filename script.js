// const { addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener('load', function(){
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

})
});






// The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot’s name and the co-pilot’s name.



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        let planetInfo;
        for (let i = 0; i < listedPlanets.length; i ++)
        {
            if (listedPlanets[i].name === chosenPlanet)
            {
                planetInfo = listedPlanets[i];
                break;
            }
        }
        let name = planetInfo.name;
        let diameter = planetInfo.diameter;
        let star = planetInfo.star;
        let distance = planetInfo.distance;
        let moons = planetInfo.moons;
        let imageUrl = planetInfo.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
    
 });