let fahrenheit = prompt("Enter Fahrenheit temperature");




// step 2
while (fahrenheit != 999); {
    if(fahrenheit < -100 || fahrenheit > 212){
      alert("You entered " + fahrenheit + ". \n Entry must range from -100 to +212");
      fahrenheit = prompt("Enter Fahrenheit temperature");
    } else {
      let celcius = parseFloat((fahrenheit - 32)  * (5/9)).toFixed(2);
      
      alert("Fahrenheit temparatur is " + fahrenheit + "\n\n Celcius temperature is " + celcius);
      fahrenheit = prompt("Enter Fahrenheit temperature");
    }
} 
