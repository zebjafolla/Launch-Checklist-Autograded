// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}></img>`
 }
 
 function validateInput(testInput) {
    if (testInput === "")
    {
            return "Empty";
    }
    if (isNaN(testInput))
    {
        return "Not a Number";
    }
    if (!isNaN(testInput))
    {
        return "Is a Number";
    }
 }
 //comment test
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = "Pilot Ready";
    let copilotStatus = document.getElementById("copilotStatus")
    copilotStatus.innerHTML = "Co-pilot Ready";
    let fuelStatus = document.getElementById("fuelStatus")
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    let launchStatus = document.getElementById("launchStatus")
    launchStatus.innerHTML = "Awaiting Information Before Launch";
    launchStatus.style.color = "green";
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "")
    {
        alert("No fields may be left blank.");
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(pilot) === "Empty")
    {
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = "You must enter a pilot."
    }
    else
    {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        if (launchStatus.style.color === "green")
        {
            launchStatus.style.color = "green";
        }
    }
    
    if (validateInput(copilot) === "Is a Number" || validateInput(copilot) === "Empty")
    {
        launchStatus.style.color = "red";
        copilotStatus.innerHTML = "You must enter a copilot."; 
    }
    else
    {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (launchStatus.style.color === "green")
            {
                launchStatus.style.color = "green";
            }
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty" || fuelLevel < 10000 == true)
    {
        if(validateInput(fuelLevel) === "Not a Number")
        {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        else
        {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
        }
        launchStatus.style.color = "red";
    }
    else
    {
        if (launchStatus.style.color === "green")
            {
                launchStatus.style.color = "green";
            }
    }
    if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty" || cargoLevel > 10000 == true)
    {
        if(cargoLevel === "")
        {
            cargoStatus.innerHTML = `There is no cargo.`;
        }
        else if(validateInput(cargoLevel) === "Not a Number")
        {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        else
        {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        }
        launchStatus.style.color = "red";
    }
    else
    {
        if (launchStatus.style.color === "green")
            {
                launchStatus.style.color = "green";
            }
    }
    if (launchStatus.style.color === "green")
    {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }
    if (launchStatus.style.color === "red")
    {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
    document.getElementById("faultyItems").style = "visibility: visible;";

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let rand = Math.floor(Math.random() * planets.length);
    return planets[rand].name;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;