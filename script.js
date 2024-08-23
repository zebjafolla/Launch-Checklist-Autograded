// const { addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener('load', function(){
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");
    let pilot = document.getElementById("pilotName");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

})
});






// The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot’s name and the co-pilot’s name.



window.addEventListener("load", function() {

    let planetsResponse;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        planetsResponse = result;
        console.log(planetsResponse);
    }).then(function () {
        console.log(planetsResponse);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(planetsResponse);
        // let planetInfo;
        // for (let i = 0; i < chosenPlanet.length; i ++)
        // {
        //     if (listedPlanets[i].name === chosenPlanet)
        //     {
        //         planetInfo = listedPlanets[i];
        //         break;
        //     }
        // }
        let name = chosenPlanet.name;
        let diameter = chosenPlanet.diameter;
        console.log(diameter);
        let star = chosenPlanet.star;
        let distance = chosenPlanet.distance;
        let moons = chosenPlanet.moons;
        let imageUrl = chosenPlanet.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
    
 });