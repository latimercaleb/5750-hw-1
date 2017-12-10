<!DOCTYPE html>
<html>

<!--==================================================================
//
// Web site: Restaurant Web Site
// Web page: Restaurant Sales - Database Interface
// Description:
//   This web page handles communication with the MySQL database.
// 
//=================================================================-->

<head>
  
	<title>Restaurant Database Interface</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="author" content="Dan Ouellette"/>
  <meta name="description" content="Restaurant Database Interface"/>
  <meta http-equiv="Expires" content="-1">
  
</head>
 
<body>
    
  <?php

    // ---------------------------------------------------------------
    // Set connection parameters and create connection
    // ---------------------------------------------------------------
    $host = "127.0.0.1";
    $user = "root";
    $password = "dano";
    $database = "dbRestaurantSales";
    $cxn = mysqli_connect($host, $user, $password, $database);
      
    // Test which database request to perform
    switch ($_GET["request"])
    {
      
      // -------------------------------------------------------------
      // Read sales variables
      // -------------------------------------------------------------
      case "readSalesVars":
      
        // Create and submit query
        $sql = "select * from tbStatus;";
        $result = mysqli_query($cxn, $sql);
        
        // Test if query failed
        if($result == false)
          echo "Query error - sales variables read operation failed.";
        else
        {
          
          // Retrieve data
          $row = mysqli_fetch_row($result);
          echo "Sales variables - ",
            "#", $row[0],
            "#", $row[1],
            "#", $row[2],
            "#";
            
        }
        break;
      
      // -------------------------------------------------------------
      // Read sales array
      // -------------------------------------------------------------
      case "readSalesArray":
      
        // Create and submit query
        $sql = "select * from tbSales;";
        $result = mysqli_query($cxn, $sql);
        
        // Test if query failed
        if($result == false)
          echo "Query error - sales array read operation failed.#bad#";
        else
        {
          
          // Loop to retrieve data
          echo "Query success - sales array read operation succeeded.#good#";
          $salesIn = array();
          while($row = mysqli_fetch_row($result))
            array_push($salesIn, array($row[0], $row[1], $row[2], $row[3]));
          echo json_encode($salesIn);
          echo "#";
            
        }
        break;
      
      // -------------------------------------------------------------
      // Write sales variables
      // -------------------------------------------------------------
      case "writeSalesVars":
            
        // Create and submit query
        $sql = "update tbStatus SET " .
          "saleID=" . $_GET["saleID"] .
          ", saleCount=" . $_GET["saleCount"] .
          ", salePtr=" . $_GET["salePtr"];
        $result = mysqli_query($cxn, $sql);
        
        // Test if query failed
        if($result == false)
          echo "Query error - sales variables update operation failed.";
        else
          echo "Query success - sales variables update operation succeeded.";
        break;
      
      // -------------------------------------------------------------
      // Write sales array
      // -------------------------------------------------------------
      case "writeSalesArray":
      
        // Delete sales from database
        $sql = "delete from tbSales;";
        $result = mysqli_query($cxn, $sql);
              
        // Test if query failed
        if($result == false)
          echo "Query error - sales array delete operation failed.<br>";
        else
        {
          echo "Query success - sales array delete operation succeeded.<br>";
        
          // Add sales to database
          $salesOut = json_decode($_GET["sales"]);
          for ($row = 0; $row < count($salesOut); $row = $row + 1)
          {
            
            // Create and submit update query
            $sql = "insert into tbSales " .
              "(saleID, entreeIndex, drinkIndex, tipPercentage) " .
              "values (" .
              $salesOut[$row][0] . "," .
              $salesOut[$row][1] . "," .
              $salesOut[$row][2] . "," .
              $salesOut[$row][3] . ");";
            $result = mysqli_query($cxn, $sql);
              
            // Test if query failed
            if($result == false)
              echo "Query error - sales array write operation for sale ",
                $salesOut[$row][0], " failed.<br>";
            else
              echo "Query success - sales array write operation for sale ",
                $salesOut[$row][0], " succeeded.<br>";

          }
          
        }
        break;
      
      // -------------------------------------------------------------
      // Handle unknown request
      // -------------------------------------------------------------
      default:
        echo "Error: unknown database request.";

    }

  ?>

</body>
 
</html>
