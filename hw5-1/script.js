"use strict";

//==================================================
// sendData
//==================================================
function sendData()
{

  // Declare variables
  var first = document.getElementById('txtFirstName').value;
  var last = document.getElementById('txtLastName').value;
  var qstring;

  // Test input values and prepare query string
  if (first.length == 0) first = "(none)";
  if (last.length == 0) last = "(none)";
  qstring = "first=" + first + "&last=" + last;

  // At this point, we could bypass AJAX and use window.open
  //window.open("SendDataWithJavaScriptAndGETMethodResponse.php?" +
  //  qstring, "_self");

  // Attempt to communicate with server
  try
  {
  
    // Create server request
    var xhttp = new XMLHttpRequest();
  
    // Define callback function
    xhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200)
        document.getElementById('lblStatus').innerHTML = 
          this.responseText;
    };
    
    // Define command and send
    xhttp.open("GET", "SendDataWithAJAXAndGETResponse.php?" + 
      qstring, true);
    xhttp.send();
    
  }
  catch (ex)
  {
    window.alert("Error" + "\nName: " + ex.name + 
      "\nMessage: " + ex.message + "\nStack: " + ex.stack);
  }

}
    
//==================================================
// clearData
//==================================================
function clearData()
{
  document.getElementById('txtFirstName').value = "";
  document.getElementById('txtLastName').value = "";
  document.getElementById('lblStatus').innerHTML = "Data cleared.";
}
