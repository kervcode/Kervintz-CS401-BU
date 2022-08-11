 "use strict";
// let fahrenheit = prompt("Enter Fahrenheit temperature");

// let fdegrees = document.getElementById("fInput");
// let cdegrees = document.getElementById("cInput");

// const btn = document.getElementById("btn")


// console.log(btn.innerText);


// function convert() {
//   let fdegrees = document.getElementById("fInput").innerHTML;
// let cdegrees = document.getElementById("cInput");

// alert(fdegrees);
  
// }



// // step 2
// while (fahrenheit != 999); {
//     if(fahrenheit < -100 || fahrenheit >= 212){
//       alert("You entered " + fahrenheit + ". \n Entry must range from -100 to +212");
//       fahrenheit = prompt("Enter Fahrenheit temperature");
//     } else {
//       let celcius = parseFloat((fahrenheit - 32)  * (5/9)).toFixed(2);
      
//       alert("Fahrenheit temparatur is " + fahrenheit + "\n\n Celcius temperature is " + celcius);
//       fahrenheit = prompt("Enter Fahrenheit temperature");
//     }
// } 


var $ = function(id) { return document.getElementById(id); };

var calculate = function() {
  var temp;
  
  // if($("fdegrees").checked){
  //   $("fInput").disabled = true
  //   temp = fahrenheit(cvalue);
  //   cvalue = temp;
  // } else {
  //   $("cInput").disabled = true;
  // }
  
};

let fahrenheit = function(celsius) {
   return celsius * 1.8 + 32;
}

let celcius = function(fahrenheitDegree){
  return parseFloat((fahrenheitDegree - 32)  * (5/9)).toFixed(2)
}

var control = function() {
  
   if($("fdegrees").checked){
      $("fInput").disabled = false;
      $("cInput").disabled = true;
   } else {
      $("cInput").disabled = false;
      $("fInput").disabled = true;
   }
   
  var fvalue = $("fInput").value;
  var cvalue = $("cInput").value;
  
  if (cvalue){
      console.log(fahrenheit(cvalue))
    $("fInput").value = fahrenheit(cvalue);
  } else if(fvalue){
    console.log("empty")
    $("cInput").value = celcius(fvalue);
  }
}


window.addEventListener( "click", control)