// Write your JavaScript code here!
window.addEventListener("load", function(){
event.preventDefault();
   document.addEventListener("submit", function(event){

      const launchStatus = document.getElementById("launchStatus");

      const pName = document.querySelector("input[name=pilotName]");
      const cPName = document.querySelector("input[name=copilotName]")
      const fuel = document.querySelector("input[name=fuelLevel]")
      const mass = document.querySelector("input[name=cargoMass]")
      let inputOK = false;

      if (pName.value === ""){
         alert("All fields are required!");

      } else if (!isNaN(pName.value) || typeof pName.value !== "string"){
         alert("Make sure to enter valid information for each field!");
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
        //  pilotStatus.innerHTML = `Pilot Ready (${pName.value})`;
        pilotStatus.innerHTML = `pilot NOT Ready (${pName.value})`;

    //   } else if (cPName.value === ""){
    //      alert("All fields are required!");
    //        faultyItems.style.visibility = "visible";
    //      launchStatus.innerHTML = "Shuttle not ready for launch";
    //      launchStatus.style.color = "red";
    //     //  pilotStatus.innerHTML = `Pilot Ready (${pName.value})`;
    //     copilotStatus.innerHTML = `coPilot Ready (${cPName.value})`;

      } else if (!isNaN(cPName.value) || typeof cPName.value !== "string"){
         alert("Make sure to enter valid information for each field!");
faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
        //  pilotStatus.innerHTML = `Pilot Ready (${pName.value})`;
        copilotStatus.innerHTML = `coPilot NOT Ready (${cPName.value})`;
      } else if (fuel.value === ""){
         alert("All fields are required!");

      } else if (isNaN(fuel.value)){
         alert("Make sure to enter valid information for each field!");

      } else if (mass.value === ""){
         alert("All fields are required!");

      } else if (isNaN(mass.value)){
         alert("Make sure to enter valid information for each field!");

      } else {
         inputOK = true;
      }
      event.preventDefault();


      let fuelOK = true;
      let cargoOK = true;

      if (fuel.value< 10000){
         fuelStatus.innerHTML = "Not enough fuel for launch";
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         fuelOK = false;
      }

      if (mass.value > 10000){
         cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         cargoOK = false;
      }

      if(!inputOK){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility="visible"
      }

      if(cargoOK && fuelOK && inputOK) {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         launchStatus.style.color = "green";
         faultyItems.style.visibility = "visible";
        // pilotStatus.innerHTML = `Pilot Ready (${pName.value})`;
        // copilotStatus.innerHTML = `Co-pilot Ready (${cPName.value})`;
        event.preventDefault();
      }


//       if(typeof(pName) !== "string" ){
//            faultyItems.style.visibility = "visible";
//             launchStatus.innerHTML = "Shuttle not ready for launch";
//          launchStatus.style.color = "red";
//          pilotStatus.innerHTML = `Pilot NOT Ready (${pName.value})`;
//          event.preventDefault();

//          //  copilotStatus.innerHTML = `Co-pilot Ready (${cPName.value})`;
//  } else {
//             pilotStatus.innerHTML = `Pilot  Ready (${pName.value})`;

//       }


//      if(typeof(cPName) !== "string" ){
//           launchStatus.innerHTML = "Shuttle not ready for launch";
//          launchStatus.style.color = "red";
//          faultyItems.style.visibility="visible"

//         copilotStatus.innerHTML = `coPilot NOT Ready (${cPName.value})`;

//       } else {
//             copilotStatus.innerHTML = `coPilot  Ready (${cPName.value})`;

//       }
//       event.preventDefault();
//     //   if(typeof(cPName) !== "string" && typeof(pName)!=="string"){
//     //       launchStatus.innerHTML = "Shuttle not ready for launch";
//     //      launchStatus.style.color = "red";
//     //      faultyItems.style.visibility="visible"
//     //       pilotStatus.innerHTML = `Pilot NOT Ready (${pName.value})`;
//     //     copilotStatus.innerHTML = `coPilot NOT Ready (${cPName.value})`;

//     //   }
       if(typeof(cPName) === "string" && typeof(pName)==="string"){
          launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "green";
         faultyItems.style.visibility="visible"
          pilotStatus.innerHTML = `Pilot Ready (${pName.value})`;
        copilotStatus.innerHTML = `coPilot Ready (${cPName.value})`;

      }
      event.preventDefault();
   })
//    event.preventDefault();
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let r = Math.floor(Math.random()*json.length);
         const mission = document.getElementById("missionTarget");
         mission.innerHTML=`
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[r].name}</li>
            <li>Diameter: ${json[r].diameter}</li>
            <li>Star: ${json[r].star}</li>
            <li>Distance from Earth: ${json[r].distance}</li>
            <li>Number of Moons: ${json[r].moons}</li>
         </ol>
         <img src="${json[r].image}"></img>
         `
      })
   }
   )
})
