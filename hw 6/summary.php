<!--Summary file for the calculations made from previous sales in javascript layer of this client-server application-->
<head>
    <title> Summary</title>
    <link rel='stylesheet' href='bootstrap/css/bootstrap.min.css' />
    <link rel='stylesheet' href='styles.css' />
</head>
<body>
<header>
 <h1>Cashier</h1>
</header>
<hr />
<main>
    <?php
    $TotalSales = $_GET["TotalSales"];
    $TotalTips =  $_GET["TotalTip"];
    $TotalBeforeTip = $_GET["TotalsNoTip"];
    $TotalWithTip = $_GET["TotalWithTip"];
    ?>
 <div class='container'>
        <div class='row'>
            <div class='col-md-6'>
                  <form> <!--Main form for user interaction-->
                    <div class='form-group bigger-group'>
                      <label>Sales: </label>
                      <input readonly value="<?php echo $TotalSales  ?>" />
                    </div>
                      <div class='form-group'>
                          <label>Totals Before Tips:</label>
                      </div>
                      <div class='form-group'>
                          <label>Total Tip Cost:</label>
                      </div>
                      <div class='form-group'>
                          <label>Total Cost with Tip:</label>
                      </div>
                    </div>
                    <div class=col-md-6>
                    <h1>Cost ($)</h1>
                <div class='form-group'>
                    <input readonly value="<?php echo $TotalBeforeTip ?>"/>
                </div>
                <div class='form-group'>
                    <input readonly value="<?php echo $TotalTips ?>"/>
                </div>
                <div class='form-group'>
                    <input readonly value="<?php echo $TotalWithTip ?>"/>
                </div>
            </div>
        </div>
            
</main>
</body>
               