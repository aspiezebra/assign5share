// Write your JavaScript code here!
const { myFetch, planetPicked } = require("./scriptHelper");
require('isomorphic-fetch');
window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = "";
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;


        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        let myPlanet = pickPlanet(listedPlanets);
       console.log(listedPlanet)
        addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)



        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
//  console.log(listedPlanets);
//         let myPlanet = pickPlanet(listedPlanets);
//        console.log(listedPlanet)
//         addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)

let launchStatus = document.getElementById("faultyItems")
launchStatus.style.visibility = "hidden"
let form = this.document.querySelector("form")



form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]")
        let pilotName = pilot.value

        let fuel = document.querySelector("input[name=fuelLevel]")

        let fuelLevel = fuel.value
        let copilot = document.querySelector("input[name=copilotName]")
        let copilotName = copilot.value
        let cargo = document.querySelector("input[name=cargoMass]")
        let cargoMass = cargo.value
        formSubmission(document, launchStatus, pilotName, copilotName, fuelLevel, cargoMass);
    });
});
//     let document = window.document;

//     list.style.visibility = "hidden";
//     let form = document.querySelector("form");
//     let list = document.querySelector("faultyItems");

