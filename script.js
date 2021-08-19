// Write your JavaScript code here!
// const { myFetch, planetPicked } = require("./scriptHelper");
// require('isomorphic-fetch');
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
            console.log(myPlanet)
            addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image)



            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        })
        //  console.log(listedPlanets);
        //         let myPlanet = pickPlanet(listedPlanets);
        //        console.log(listedPlanet)
        //         addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image)

    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    let form = this.document.querySelector("form")



    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]")
        let pilot = pilotName.value

        let fuel = document.querySelector("input[name=fuelLevel]")

        let fuelLevel = fuel.value
        let copilotName = document.querySelector("input[name=copilotName]")
        let copilot = copilotName.value
        let cargo = document.querySelector("input[name=cargoMass]")
        let cargoLevel = cargo.value
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });
});
//     let document = window.document;

//     list.style.visibility = "hidden";
//     let form = document.querySelector("form");
//     let list = document.querySelector("faultyItems");