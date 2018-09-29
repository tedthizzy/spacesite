
console.log("Starting...!")

//var myJson = new Array();
// var myObj = JSON.parse(myJSON);
//var myObj = JSON.parse(require('fs').readFileSync('test.json', 'utf8'));

var choice_list = ["Food Quantity and Nutrition","Water Quantity","Access to Work Items","Air Flow System","Arrangement of Functional Areas","Atmosphere Revitalization (humidity, particulate, toxin, & CO2 removal)","Atmospheric Revitalization System (constituents)","Atmospheric Revitalization System (maintain pressure)","Availability of Hatches","Availability of Medical Care","Availability of Personal Items","Availability of Private Space","Availability of Recreation/Personal Activities","Availability of Windows","Caution & Warning Functionality","Clothing","Control Panels/Input Devices","Countermeasure Hardware","Decor of Environment","Food System","Habitable Volume","Heating/Cooling System","Hygiene Support","Information Displays/Decision Aids","Information Management Support","Inventory Management Capability","Lighting (Ambient)","Mobility Aids & Restraints Availability & Quality","Noise Reduction Systems","Oxygen Management System","Presence of Location Aids","Situation-Specific Lighting","Sleep Accommodation","Stowage","Suit Design","Support of Traffic Flow, Translation Paths","Trash Management","Water Management","Cleanliness of Environment","Confinement","Hardware Tool Availability","Level of Sensory Stimulation","Safety Accommodations"];

var options_list = ["Low Food Quantity (Restricted Calorie)","High Food Quantity (High Calorie)","Low Nutrition Food","High Nutrition Food","Low Quantity","High Quantity","N/A","N/A","Easy access and appropriate location of work items","Need to move a few things to get access","Need to move more than 3 things to get access","Limited or obstructed access","Fan","Temperature Difference","N/A","N/A","Easy movement & dynamically reconfigurable","Moderately reconfigurable","Fixed, with large obstructions","Randomized","Bioregenerative (plants)","Physio-chemical hardware (scrubbers)","N/A","N/A","Earth-like (N2, O2-20%, He, Ar etc)","Apollo style","N/A","N/A","Earth-like (14.2psi)","Operational 9.2psi","Low pressure 5psi","Higher pressure (?)","Available in all emergency situations","Available for highest probability emergencies","Available for ingress/egress","None","Level of Care 3-5","Level of Care 1-2","Level of Care 0","N/A","As many momentos as can be brought (~10kg)","Limited to weight of 5 kg/crew","Limited to weight of 1 kg/crew","None","Ample","Average","Minimal","None","Ample recreactional/personal activities","Handful recreational/personal activities","Limited recreational/personal activities","None","Several available","Moderate # of windows","Minimal Small Windows","None","Clear, intuitive, standardized","Helpful & appropriate for most systems","Difficult to understand, non-standard, limited","None","Range of clothing (light and heavy)","Just one pair of clothing","No clothing","N/A","Helpful and Intuitive Devices","Somewhat helpful and usable devices","None","N/A","Adequate & easy/fun/reliable to use","A few available","Minimal countermeasures to lessen degradation","None","Good positive décor","Medium décor","Minimal décor","None","Fresh, large variety of food","Packaged food","Power Bars","N/A","Ample Space","Suitable Space","Minimal Space","N/A","Heaters and AC condition","Thermal sink","N/A","N/A","Normal facilities for hygiene support","ISS style","Apollo style","None","Helpful and Intuitive Displays","Somewhat helpful and usable displays","Minimumlly helpful displays","None","Clear intuitive information conveyed","Exists","None","N/A","Clear, intuitive, well-marked, standardized","Partly available (not for all items)","None","N/A","Dynamically matching lighting","Acceptable lighting levels","Too little light for operations or comfort","None","Appropriately placed and easy to use","Mostly available and somewhat easy to use","Minimally available and okay to use","None","Ear muffs","Acoustic dampeners around S/C","None","N/A","O2 candles","Fuel cells","Tanks","N/A","Available and appropriately located","Limited location aids","None","N/A","Appropriate lighting for specific situations","Minimal lighting for specific situations","None","N/A","Comfortable, quiet, good air flow","Noisy, uncomfortable, stagnant air","N/A","N/A","Exists, with ease of storing items","Does not exist","N/A","N/A","Easy don-doff; prevents injury; flexible","Moderate don-doff & flexibility; prevents some injury","Hard to don-doff; high injury rate","None","Acceptable support for traffic flow","Minimal support for traffic flow","No support for traffic flow","N/A","Trash compactor","Bag it and squash by hand","None","N/A","Good tasting water and easy to access","Acceptable water quality and ease of access","Minimal water quality hard to access","None","Clean","Workable","Dirty","N/A","Can do as many EVA's for enjoyment not just work","Can do some EVA's for enjoyment not just work","Minimum EVA only as needed","Total Confinement (no leaving vehicle)","Easily available hardware","Mostly available hardware","Hard to find","None Available","High sensory stimulation","Medium sensory stimulation","Low sensory stimulation","None","Several safety provisions (for hazards >25% chance)","Moderate # of provisions (for hazards >75% chance)","Minimal # of provisions (for hazards >90% chance)","None"];


function getStarted(){

  for (var o = 0; o < choice_list.length; o++) {

    var this_choice = choice_list[o]

    var droptext = document.createElement("OPTION");
    droptext.setAttribute("selected", "true");
    droptext.setAttribute("disabled", "disabled");
    droptext.setAttribute("hidden", "true");
    var textdrop = document.createTextNode(choice_list[o]);
    droptext.appendChild(textdrop);
    document.getElementById(this_choice).appendChild(droptext);

    for (var p = 0; p <4; p++){

      if (options_list[o*4+p] != "N/A"){
        var option = document.createElement("OPTION");
        option.setAttribute("value", options_list[o*4+p]);
        var texsd = document.createTextNode(options_list[o*4+p]);
        option.appendChild(texsd);
        document.getElementById(this_choice).appendChild(option);
      }
    }
  }
}

//var dummy = '[{ "key" : "water", "data" : [{"Options" : "Moon","crewA" : "1","crewB" : "1","crewC" : "1"},{"Options" : "Mars","crewA" : "1","crewB" : "1","crewC" : "2"}]}, {"key" : "countermeasures", "data" : [{"Options" : "Moon","crewA" : "2","crewB" : "2","crewC" : "2"},{"Options" : "Mars","crewA" : "0","crewB" : "3","crewC" : "6"}]}]';
var dummy = '[{"key":"Food Quantity and Nutrition",  "data" : []},{"key": "Water Quantity",  "data" : []},{"key": "Access to Work Items",  "data" : []},{"key": "Air Flow System",  "data" : []},{"key": "Arrangement of Functional Areas",  "data" : []},{"key": "Atmosphere Revitalization (humidity, particulate, toxin, & CO2 removal)",  "data" : []},{"key": "Atmospheric Revitalization System (constituents)",  "data" : []},{"key": "Atmospheric Revitalization System (maintain pressure)",  "data" : []},{"key": "Availability of Hatches",  "data" : []},{"key": "Availability of Medical Care",  "data" : []},{"key": "Availability of Personal Items",  "data" : []},{"key": "Availability of Private Space",  "data" : []},{"key": "Availability of Recreation/Personal Activities",  "data" : []},{"key": "Availability of Windows",  "data" : []},{"key": "Caution & Warning Functionality",  "data" : []},{"key": "Clothing",  "data" : []},{"key": "Control Panels/Input Devices",  "data" : []},{"key": "Countermeasure Hardware",  "data" : []},{"key": "Décor of Environment",  "data" : []},{"key": "Food System",  "data" : []},{"key": "Habitable Volume",  "data" : []},{"key": "Heating/Cooling System",  "data" : []},{"key": "Hygiene Support",  "data" : []},{"key": "Information Displays/Decision Aids",  "data" : []},{"key": "Information Management Support",  "data" : []},{"key": "Inventory Management Capability",  "data" : []},{"key": "Lighting (Ambient)",  "data" : []},{"key": "Mobility Aids & Restraints Availability & Quality",  "data" : []},{"key": "Noise Reduction Systems",  "data" : []},{"key": "Oxygen Management System",  "data" : []},{"key": "Presence of Location Aids",  "data" : []},{"key": "Situation-Specific Lighting",  "data" : []},{"key": "Sleep Accommodation",  "data" : []},{"key": "Stowage",  "data" : []},{"key": "Suit Design",  "data" : []},{"key": "Support of Traffic Flow, Translation Paths",  "data" : []},{"key": "Trash Management",  "data" : []},{"key": "Water Management",  "data" : []},{"key": "Cleanliness of Environment",  "data" : []},{"key": "Confinement",  "data" : []},{"key": "Hardware Tool Availability",  "data" : []},{"key": "Level of Sensory Stimulation",  "data" : []},{"key": "Safety Accommodations",  "data" : []}]';
var myObj = JSON.parse(dummy);

var dest, craft, task;


function clicked_earth() {
  dest = "Earth";
}

function clicked_moon() {
  dest = "Moon";
}

function clicked_mars() {
  dest = "Mars";
}

function clicked_apollo() {
  craft = "Apollo Class";
}

function clicked_shuttle() {
  craft = "Shuttle Class";
}

function clicked_iss() {
  craft = "ISS Class";
}

function clicked_light() {
  task = "Light Workload";
}

function clicked_moderate() {
  task = "Moderate Workload";
}

function clicked_heavy() {
  task = "Heavy Workload";
}

function get_selections() {

  if (typeof window.dest == 'undefined') {
    var dest = "undefined";
    var img_tag = "../assets/incomplete.png";
  }

  if (typeof window.craft == 'undefined') {
    var craft = "undefined";
    var img_tag = "../assets/incomplete.png";
  }

  if (typeof window.task == 'undefined') {
    var task = "undefined";
    var img_tag = "../assets/incomplete.png";
  }

  // var myObject = JSON.parse("my json string");
  // for (var i = 0; i < jsonData.counters.length; i++) {
  //     var counter = jsonData.counters[i];
  //     console.log(counter.counter_name);
  // }

  console.log("#############################");
  console.log(document.getElementById("craft").value);
  console.log("#############################");

  if (document.getElementById("craft").value == "Cylindrical"){
    document.getElementById("crafting").src="../assets/habitatWinged.jpg";
  }

  if (document.getElementById("craft").value == "Capsule"){
    document.getElementById("crafting").src="../assets/habitatCapsule.png";
  }

  if (document.getElementById("craft").value == "Winged"){
    document.getElementById("crafting").src="../assets/habitatWinged.jpg";
  }

  var bc1 = document.getElementById('block_BC1');
  var b2 = document.getElementById('block_B2');
  var c2 = document.getElementById('block_C2');
  var a1 = document.getElementById('block_A1');
  var img_tag = "../assets/incomplete.png";

  if (window.craft == "Apollo Class"){
    if (document.getElementById("Duration").value == "short"){ img_tag = "../assets/IMG_A1.png" };
    if (document.getElementById("Duration").value == "medium"){ img_tag = "../assets/IMG_B1.png" };
    if (document.getElementById("Duration").value == "long"){ img_tag = "../assets/IMG_C1.png" };
  }

  if (window.craft == "Shuttle Class"){
    if (document.getElementById("Duration").value == "short"){ img_tag = "../assets/IMG_A2.png" };
    if (document.getElementById("Duration").value == "medium"){ img_tag = "../assets/IMG_B2.png" };
    if (document.getElementById("Duration").value == "long"){ img_tag = "../assets/IMG_C2.png" };
  }

  if (window.craft == "ISS Class"){
    if (document.getElementById("Duration").value == "short"){ img_tag = "../assets/IMG_A3.png" };
    if (document.getElementById("Duration").value == "medium"){ img_tag = "../assets/IMG_B3.png" };
    if (document.getElementById("Duration").value == "long"){ img_tag = "../assets/IMG_C3.png" };
  }


  a1.innerHTML = "<img src="+img_tag+">";
  bc1.innerHTML = "Mission Name: "+document.getElementById("Name").value + "<br>Destination: "+window.dest+ "<br>Duration: "+document.getElementById("Duration").value+"<br>Number of Crew: "+document.getElementById("Crewnumber").value;
  b2.innerHTML = "Spacecraft Design: "+window.craft;
  c2.innerHTML = "Task Profile: "+window.task;





  console.log("running selections!");

  //var arr1 = ["water", "countermeasures"];//, "areas", "hatches", "windows"];

  //console.log(myObj);

  var i;
  for (i = 0; i < choice_list.length; i++) {
      // var var1 = document.getElementById('arr1[i]');
      console.log("Value of: " + choice_list[i] + "  -is:-  " + document.getElementById(choice_list[i]).value);

      var ii;
      // for ii = 0; ii < myObj.arr1[i].length; ii++ {
      //   if (myObj.arr1[i][ii].Options != document.getElementById(arr1[i]).value) {
      //     delete myObj.arr1[i][ii];
      //     console.log('deleted');
      //   };
      // }

      var key = myObj[i]['key'];
      var data = myObj[i]['data'];

      for(var j = 0; j < data.length; j++) {
        console.log("trying: " + data[j].Options)
        if (data[j].Options != document.getElementById(choice_list[i]).value) {
          console.log("deleting: " + data[j].Options)
          delete myObj[i]['data'][j]
        }
      }

      var data2 = myObj[i]['data'];
      console.log("whats left: " + data);


  };


  // var var1 = document.getElementById('destination');
  // console.log(var1);
}

//get_selections()
