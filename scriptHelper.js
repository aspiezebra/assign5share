// Write your helper functions here!
require('isomorphic-fetch');

// import 'isomorphic-fetch';

let guide = 10000

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission Goal div.

    const div = document.getElementById("missionTarget")
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}  </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`

}



function validateInput(testInput) {
    // testInput=validateInput(testInput);
    // testInput = Number(testInput);
    if (testInput === "" || testInput == null) {
        return "Empty";

        // } else if (isNaN(Number(testInput)) === false) {
        //     return "Is a Number";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";

    } else if (isNaN(Number(testInput))) {
        return "Not a Number";

    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // const faultyItems = document.getElementById("faultyItems");

    const pilotStatus = document.getElementById("pilotStatus")


    const copilotStatus = document.getElementById("copilotStatus")


    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    //    cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("launchStatus");
    // let fuel = document.getElementById("fuelStatus");


    // launchStatus.style.visibility = "visible";

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        //   alert("empty")


    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("You need to give proper data types!")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is Ready for Launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is Ready for Launch`;

        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = "visible";
            launchStatus.style.visibility = "visible";
        } else
        if (fuelLevel >= 10000 && cargoLevel > 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = "visible";
            launchStatus.style.visibility = "visible";
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = "visible";
            launchStatus.style.visibility = "visible";
        } else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            list.style.visibility = "visible";
            // pilotStatus.innerHTML = `Pilot Ready (${pilot.value})`;
            // copilotStatus.innerHTML = `Co-pilot Ready (${copilot.value})`;
            launchStatus.style.visibility = "visible";
            launchStatus.style.color = "rgb(65, 159, 106)"
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
    }

    //     if (validateInput(Number(pilot)) === "Empty" || validateInput(Number(copilot)) === "Empty" || validateInput(Number(fuelLevel)) === "Empty" || validateInput(Number(cargoLevel)) === "Empty") {
    //         // alert("All fields are required!");
    //         alert("All fields are required!");
    //         list.style.visibility = "hidden";
    //         if (validateInput(Number(pilot)) === "Empty") {

    //         }
    //     } else if (validateInput(Number(pilot)) === "Is a Number" || validateInput(Number(copilot)) === "Is a Number") {
    //         // alert("Please enter a name for Pilot and/or Co-Pilot!");
    //         alert("Please enter a name for Pilot and/or Co-Pilot!");
    //     } else if (validateInput(Number(fuelLevel)) === "Not a Number" || validateInput(Number(cargoLevel)) === "Not a Number") {
    //         // alert("Please enter a numerical value for Fuel Level and/or Cargo Mass!");
    //         alert("Please enter a numerical value for Fuel Level and/or Cargo Mass!")
    //     } else {



    //         let pilotStatus = document.getElementById("pilotStatus");
    //         let copilotStatus = document.getElementById("copilotStatus");
    //         let fuelStatus = document.getElementById("fuelStatus");
    //         let cargoStatus = document.getElementById("cargoStatus");
    //         let launchStatus = document.getElementById("launchStatus");

    //         // list.style.visibility = "visible";

    //         // launchStatus.style.visibility = "visible";
    //         //update shuttle requirements here// if checks for status variables
    //         // pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //         // copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //         if (fuelLevel < 10000 || cargoLevel > 10000) {
    //             if (fuelLevel < 10000) {
    //                 fuelStatus.innerHTML = `Fuel level too low for launch`;
    //                 launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    //                 launchStatus.style.color = 'rgb(199, 37, 78)';

    //             } else {
    //                 fuelStatus.innerHTML = `Fuel level high enough for launch`;
    //                 // launchStatus.innerHTML = `Shuttle is Ready for Launch`;

    //                 list.style.visibility = "visible";
    //                 launchStatus.style.visibility = "visible";
    //                 // launchStatus.style.color = 'rgb(65, 159, 106)';

    //             }


    //             if (cargoLevel > 10000) {
    //                 cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    //                 launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    //                 launchStatus.style.color = 'rgb(199, 37, 78)';

    //             } else {
    //                 cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    //                 // launchStatus.innerHTML = `Shuttle is Ready for Launch`;

    //                 list.style.visibility = "visible";
    //                 launchStatus.style.visibility = "visible";
    //                 // launchStatus.style.color = 'rgb(65, 159, 106)';

    //             }
    //         } else {
    //             fuelStatus.innerHTML = `Fuel level high enough for launch`;
    //             launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    //             // list.style.visibility = "visible";
    //             launchStatus.style.visibility = "visible";
    //             list.style.visibility = "visible";
    //             launchStatus.style.color = 'rgb(65,159,106)';
    //             cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    //         }
    //     }
}











async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        if (response.status === 400) {
            throw new Error("Bad response");
        } else {
            return response.json()
        }
    });
    // console.log(response.json());
    return planetsReturned;
};

function pickPlanet(planets) {
    let num = Math.floor(Math.random() * planets.length)
    return planets[num]
}

module.exports.addDestinationInfo = addDestinationInfo;

module.exports.validateInput = validateInput;

module.exports.formSubmission = formSubmission;

module.exports.pickPlanet = pickPlanet;

module.exports.myFetch = myFetch;