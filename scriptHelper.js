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
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.style.color = "green";
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "")
    {
        alert("No fields may be left blank.");
    }
    if (validateInput(pilot.value) === "Is a Number" || validateInput(pilot.value) === "Empty")
    {
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = "You must enter a pilot."
    }
    else
    {
        console.log(pilot.value);
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        if (launchStatus.style.color === "green")
        {
            launchStatus.style.color = "green";
        }
    }
    
    if (validateInput(copilot.value) === "Is a Number" || validateInput(copilot.value) === "Empty")
    {
        launchStatus.style.color = "red";
        copilotStatus.innerHTML = "You must enter a copilot."; 
    }
    else
    {
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        if (launchStatus.style.color === "green")
            {
                launchStatus.style.color = "green";
            }
    }
    if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(fuelLevel.value) === "Empty" || fuelLevel.value < 10000)
    {
        if(validateInput(fuelLevel.value) === "Not a Number")
        {
            fuelStatus.innerHTML = "Fuel level too low for launch"
        }
        else
        {
            fuelStatus.innerHTML = `Fuel level: ${fuelLevel.value} is not high enough for launch.`;
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
    if (validateInput(cargoLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Empty" || cargoLevel.value > 10000)
    {
        if(cargoLevel.value === "")
        {
            cargoStatus.innerHTML = `There is no cargo.`;
        }
        else if(validateInput(cargoLevel.value) === "Not a Number")
        {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        else
        {
            cargoStatus.innerHTML = `Cargo level: ${cargoLevel.value} is too high for launch.`;
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
        launchStatus.innerHTML = "Shuttle is ready for launch.";
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