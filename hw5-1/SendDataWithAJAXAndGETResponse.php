<!DOCTYPE html>
<html>

<!--==================================================================
//
// Title: Send Data With AJAX and GET Response
// Description:
//   This web page displays data passed with AJAX and GET.
// 
//=================================================================-->

<head>
  <title>AJAX and GET Response</title>
  <meta charset="UTF-8">
  <meta name="author" content="Dan Ouellette"/>
  <meta name="description" content="AJAX statements"/>
  <meta http-equiv="Expires" content="-1">
  <link rel="stylesheet" type="text/css" href="AJAXStyles.css">
</head>
 
<body>
  <?php

    // Show data from GET method
    echo 'Data on server: ' . 
      'first name -> ' . htmlspecialchars($_GET["first"]) .
      ', ' .
      'last name -> ' . htmlspecialchars($_GET["last"]);

  ?>
</body>
 
</html>
